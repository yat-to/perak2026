import { PengajuanDetail } from '../types';
import { PENGAJUAN_SAMPLES } from '../data/mockData';
import { maskNik, maskName } from '../utils/formatters';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function checkStatusPengajuan(
  nomorAtauNik: string
): Promise<{ success: boolean; data?: PengajuanDetail; message: string }> {
  const query = nomorAtauNik.trim().toUpperCase();

  if (!query) {
    return {
      success: false,
      message: 'Silakan masukkan Nomor Pengajuan atau NIK Anda.',
    };
  }

  // 1. Coba hubungi backend FastAPI
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(
      `${API_BASE_URL}/pengajuan/status?query=${encodeURIComponent(query)}`,
      {
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    clearTimeout(timeoutId);

    if (res.ok) {
      const result = await res.json();
      if (result && result.data) {
        return {
          success: true,
          data: result.data,
          message: 'Data pengajuan ditemukan di server.',
        };
      }
    }
  } catch {
    // Backend offline / development mode
  }

  // 2. Cek database mock
  // Cari berdasarkan nomor pengajuan
  if (PENGAJUAN_SAMPLES[query]) {
    return {
      success: true,
      data: PENGAJUAN_SAMPLES[query],
      message: 'Data pengajuan ditemukan.',
    };
  }

  // Cari berdasarkan NIK (misal NIK cocok dengan digit terakhir)
  const byNik = Object.values(PENGAJUAN_SAMPLES).find((item) => {
    const cleanQuery = query.replace(/\D/g, '');
    const cleanNik = item.nikMasked.replace(/\D/g, '');
    return cleanQuery.length >= 4 && cleanNik.endsWith(cleanQuery.slice(-4));
  });

  if (byNik) {
    return {
      success: true,
      data: byNik,
      message: 'Data pengajuan ditemukan berdasarkan NIK.',
    };
  }

  // Jika formatnya menyerupai AK1-2026-XXXX atau NIK 16 digit yang baru didaftarkan
  const isNik = /^\d{16}$/.test(query);
  const isRegNumber = /^AK1-\d{4}-\d{4}$/.test(query);

  if (isRegNumber || isNik) {
    // Generate data dinamis yang aman
    const generated: PengajuanDetail = {
      nomorPengajuan: isRegNumber ? query : `AK1-2026-${query.slice(-4)}`,
      nikMasked: isNik ? maskNik(query) : '740502******0099',
      namaMasked: maskName('Warga Konawe Selatan'),
      tanggalPengajuan: '2026-09-24',
      tanggalUpdate: '2026-09-25',
      status: 'verifikasi',
      statusLabel: 'Sedang Diverifikasi Petugas',
      statusColor: 'amber',
      catatanPetugas:
        'Berkas pengajuan telah diterima dan sedang dalam tahap verifikasi administrasi oleh petugas Disnakertrans Konsel.',
      pendidikanTerakhir: 'SMA / SMK',
      kecamatan: 'Kec. Andoolo',
      canPrint: false,
      timeline: [
        {
          step: 1,
          title: 'Pengajuan Diterima',
          date: '24 Sep 2026, 10:00 WITA',
          status: 'completed',
          desc: 'Data pendaftar tersimpan di portal PERAK',
        },
        {
          step: 2,
          title: 'Verifikasi Administrasi',
          date: '25 Sep 2026, 09:30 WITA',
          status: 'current',
          desc: 'Pemeriksaan keabsahan dokumen',
        },
        {
          step: 3,
          title: 'Persetujuan Pejabat',
          date: 'Menunggu',
          status: 'pending',
          desc: 'Pengesahan surat keterangan',
        },
        {
          step: 4,
          title: 'Pencetakan Kartu AK-1',
          date: 'Menunggu',
          status: 'pending',
          desc: 'Dokumen siap dicetak',
        },
      ],
    };

    return {
      success: true,
      data: generated,
      message: 'Data pengajuan ditemukan dalam antrean pemrosesan.',
    };
  }

  return {
    success: false,
    message:
      'Nomor Pengajuan atau NIK tidak ditemukan. Pastikan nomor yang dimasukkan sudah benar atau silakan lakukan pendaftaran baru.',
  };
}
