import { PengajuanDetail, StatusPengajuanType, TimelineStep } from '../types';
import { maskNik, maskName, formatDateId } from '../utils/formatters';

const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5043';
const API_BASE_URL = RAW_API_URL.replace(/\/+$/, '');

export async function checkStatusPengajuan(
  nomorAtauNik: string
): Promise<{ success: boolean; data?: PengajuanDetail; message: string }> {
  const cleanQuery = nomorAtauNik.trim();

  if (!cleanQuery) {
    return {
      success: false,
      message: 'Silakan masukkan NIK KTP Anda.',
    };
  }

  // Panggil endpoint Express MySQL lokal: http://localhost:5043/api/v1/publish_status/cekStatus
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`${API_BASE_URL}/api/v1/publish_status/cekStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nik: cleanQuery }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const rows = await res.json();

      if (Array.isArray(rows) && rows.length > 0) {
        const row = rows[0];
        const nik = String(row.nik || cleanQuery);
        const nikMasked = maskNik(nik);
        const rawNama = row.nama || row.nama_lengkap || row.name || '';
        const namaMasked = rawNama
          ? maskName(rawNama)
          : `Pencari Kerja Konsel (${row.tmp_lahir || 'Konawe Selatan'})`;

        // Mapping status:
        // 0: Sedang diproses / diverifikasi
        // 1: Perlu perbaikan / revisi berkas
        // 2: Disetujui / Selesai (diterima)
        const rowStatusNum = Number(row.status);
        const ket = String(row.keterangan || '').toLowerCase();

        let statusType: StatusPengajuanType = 'verifikasi';
        let statusLabel = 'Sedang Diverifikasi Petugas';
        let statusColor = 'amber';
        let canPrint = false;

        if (rowStatusNum === 2 || ket.includes('diterima') || ket.includes('disetujui')) {
          statusType = 'disetujui';
          statusLabel = 'Pengajuan Disetujui / Terbit';
          statusColor = 'emerald';
          canPrint = true;
        } else if (
          rowStatusNum === 1 ||
          ket.includes('kuran') ||
          ket.includes('revisi') ||
          ket.includes('perbaiki') ||
          ket.includes('tolak')
        ) {
          statusType = 'perlu_perbaikan';
          statusLabel = 'Perlu Perbaikan / Revisi Berkas';
          statusColor = 'orange';
          canPrint = false;
        } else {
          statusType = 'verifikasi';
          statusLabel = 'Sedang Diproses Petugas';
          statusColor = 'amber';
          canPrint = false;
        }

        const tanggalPengajuan = row.createdAt
          ? String(row.createdAt).split('T')[0]
          : '2024-01-31';
        const tanggalUpdate = row.editeAt
          ? String(row.editeAt).split('T')[0]
          : tanggalPengajuan;

        const timeline: TimelineStep[] = [
          {
            step: 1,
            title: 'Pengajuan Diterima',
            date: formatDateId(tanggalPengajuan),
            status: 'completed',
            desc: 'Data pendaftar telah tersimpan di sistem PERAK Konsel',
          },
          {
            step: 2,
            title: 'Verifikasi Administrasi',
            date: formatDateId(tanggalUpdate),
            status: statusType === 'disetujui' ? 'completed' : 'current',
            desc:
              statusType === 'perlu_perbaikan'
                ? row.keterangan || 'Terdapat dokumen yang perlu diperbaiki'
                : statusType === 'disetujui'
                ? 'Dokumen persyaratan telah dinyatakan lengkap dan sah'
                : 'Pemeriksaan keabsahan dokumen oleh verifikator Disnakertrans',
          },
          {
            step: 3,
            title: 'Persetujuan Pejabat Disnaker',
            date: statusType === 'disetujui' ? formatDateId(tanggalUpdate) : 'Menunggu',
            status: statusType === 'disetujui' ? 'completed' : 'pending',
            desc:
              statusType === 'disetujui'
                ? 'Pengesahan dan penerbitan tanda bukti pendaftaran'
                : 'Menunggu hasil verifikasi berkas',
          },
          {
            step: 4,
            title: 'Pencetakan Kartu AK-1',
            date: statusType === 'disetujui' ? formatDateId(tanggalUpdate) : 'Menunggu',
            status: statusType === 'disetujui' ? 'completed' : 'pending',
            desc:
              statusType === 'disetujui'
                ? 'Kartu Kuning sah resmi siap dicetak mandiri'
                : 'Dokumen belum dapat diterbitkan',
          },
        ];

        const nomorPengajuan = row.no_pendaftaran
          ? `AK1-${row.no_pendaftaran}`
          : `AK1-${nik.slice(-4)}`;
        const nomorAk1 = row.no_pendaftaran
          ? `7405/AK1/${row.no_pendaftaran}`
          : `7405/AK1/${nik.slice(-4)}`;

        let masaBerlaku = '2 Tahun Sejak Terbit';
        if (row.editeAt || row.createdAt) {
          try {
            const d = new Date(row.editeAt || row.createdAt);
            d.setFullYear(d.getFullYear() + 2);
            masaBerlaku = formatDateId(d.toISOString().split('T')[0]);
          } catch {
            masaBerlaku = '2 Tahun';
          }
        }

        const nama = String(row.nama || 'Pencari Kerja Konsel');

        // Format nama untuk nama file: lowercase, spasi jadi underscore
        const cleanNama = (row.nama || '')
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '_')
          .replace(/[^a-z0-9_]/g, '');

        const pdfFileName = row.id ? `ak1_${row.id}_${cleanNama}.pdf` : undefined;
        const pdfUrl = pdfFileName ? `${API_BASE_URL}/uploads/${pdfFileName}` : undefined;

        const data: PengajuanDetail = {
          id: row.id ? Number(row.id) : undefined,
          nomorPengajuan,
          nikMasked,
          nama,
          namaMasked,
          pdfUrl,
          pdfFileName,
          email: row.email || undefined,
          hp: row.hp || undefined,
          tempatLahir: row.tmp_lahir || undefined,
          tanggalLahir: row.tgl_lahir ? formatDateId(row.tgl_lahir) : undefined,
          jenisKelamin: row.jns_kelamin || undefined,
          alamat: row.alamat && row.alamat !== '-' ? row.alamat : undefined,
          foto: row.file || undefined,
          tanggalPengajuan,
          tanggalUpdate,
          status: statusType,
          statusLabel,
          statusColor,
          catatanPetugas: row.keterangan || undefined,
          kecamatan: row.tmp_lahir ? `Lahir di ${row.tmp_lahir}` : 'Konawe Selatan',
          nomorAk1,
          masaBerlaku,
          canPrint,
          timeline,
        };

        return {
          success: true,
          data,
          message: 'Data pengajuan berhasil ditemukan.',
        };
      }

      // Jika baris kosong (NIK tidak ditemukan)
      return {
        success: false,
        message: 'NIK tidak ditemukan dalam pangkalan data pelayanan PERAK Konsel.',
      };
    }
  } catch (error) {
    console.error('Gagal menghubungi backend publish_status:', error);
  }

  return {
    success: false,
    message:
      'Tidak dapat menghubungi server database Disnakertrans. Pastikan server lokal aktif di port 5043.',
  };
}
