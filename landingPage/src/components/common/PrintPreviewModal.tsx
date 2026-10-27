'use client';

import React from 'react';
import {
  X,
  Printer,
  Download,
  ShieldCheck,
  QrCode,
  AlertCircle,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { PengajuanDetail } from '../../types';
import { formatDateId } from '../../utils/formatters';

interface PrintPreviewModalProps {
  data: PengajuanDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PrintPreviewModal({
  data,
  isOpen,
  onClose,
}: PrintPreviewModalProps) {
  if (!isOpen || !data) return null;

  const handlePrint = () => {
    if (data.pdfUrl) {
      window.open(data.pdfUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      window.print();
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="id">
        <head>
          <meta charset="utf-8">
          <title>Kartu Kuning AK-1 - ${data.nama}</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 12mm;
            }
            * { box-sizing: border-box; }
            body {
              font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
              color: #0f172a;
              background: #fff;
              margin: 0;
              padding: 24px;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .card-wrapper {
              max-width: 680px;
              margin: 0 auto;
              border: 2px solid #eab308;
              background-color: #fefce8 !important;
              border-radius: 12px;
              padding: 24px;
            }
            .kop {
              display: flex;
              align-items: center;
              border-bottom: 2px solid #0f172a;
              padding-bottom: 12px;
              margin-bottom: 14px;
              gap: 16px;
            }
            .kop-logo {
              width: 70px;
              height: 85px;
              object-fit: contain;
            }
            .kop-text {
              flex: 1;
              text-align: center;
            }
            .kop-text h4 {
              margin: 0;
              font-size: 13px;
              font-weight: 700;
              text-transform: uppercase;
              color: #1e293b;
            }
            .kop-text h3 {
              margin: 3px 0;
              font-size: 16px;
              font-weight: 900;
              text-transform: uppercase;
              color: #0f172a;
            }
            .kop-text p {
              margin: 0;
              font-size: 10px;
              color: #64748b;
            }
            .card-title {
              margin-top: 8px;
              padding: 6px;
              background: #fef08a !important;
              border: 1px solid #facc15;
              border-radius: 6px;
              font-weight: 800;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              text-align: center;
            }
            .meta-bar {
              display: flex;
              justify-content: space-between;
              font-size: 11px;
              background: rgba(255, 255, 255, 0.85);
              padding: 6px 12px;
              border-radius: 6px;
              border: 1px solid #fde047;
              margin: 12px 0 16px 0;
            }
            .grid-body {
              display: flex;
              gap: 16px;
              align-items: flex-start;
            }
            .photo-col {
              width: 120px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 10px;
            }
            .photo-box {
              width: 105px;
              height: 135px;
              border: 1.5px solid #94a3b8;
              background: #f1f5f9;
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              font-size: 10px;
              color: #64748b;
              border-radius: 4px;
            }
            .qr-box {
              border: 1px solid #cbd5e1;
              background: #fff;
              padding: 6px;
              border-radius: 6px;
              text-align: center;
              font-size: 9px;
              color: #475569;
            }
            .data-table {
              flex: 1;
              border-collapse: collapse;
              width: 100%;
              font-size: 12px;
            }
            .data-table tr {
              border-bottom: 1px solid #fef08a;
            }
            .data-table td {
              padding: 6px 4px;
              vertical-align: top;
            }
            .data-table td.label {
              color: #475569;
              width: 35%;
              font-weight: 500;
            }
            .data-table td.val {
              font-weight: 700;
              color: #0f172a;
            }
            .terms {
              margin-top: 16px;
              padding-top: 10px;
              border-top: 1px dashed #eab308;
              font-size: 9.5px;
              color: #475569;
              line-height: 1.4;
            }
            .terms ul {
              margin: 4px 0 0 16px;
              padding: 0;
            }
            @media print {
              body { padding: 0; }
              .card-wrapper { max-width: 100%; border: 1px solid #000; }
            }
          </style>
        </head>
        <body>
          <div class="card-wrapper">
            <div class="kop">
              <img src="/logo-konsel.png" alt="Logo Pemda Konsel" class="kop-logo" />
              <div class="kop-text">
                <h4>Pemerintah Kabupaten Konawe Selatan</h4>
                <h3>Dinas Transmigrasi dan Tenaga Kerja</h3>
                <p>Kompleks Perkantoran Pemkab Konawe Selatan, Andoolo — Telp. (0401) 319-2026</p>
                <div class="card-title">Tanda Bukti Pendaftaran Pencari Kerja (AK-1)</div>
              </div>
            </div>

            <div class="meta-bar">
              <div><strong>No. Pendaftaran:</strong> <span style="font-family: monospace; color: #1e3a8a;">${data.nomorAk1 || data.nomorPengajuan}</span></div>
              <div><strong>Berlaku s/d:</strong> <span>${data.masaBerlaku || '2 Tahun Sejak Terbit'}</span></div>
            </div>

            <div class="grid-body">
              <div class="photo-col">
                <div class="photo-box">
                  ${data.foto ? `<img src="${data.foto}" style="width:100%;height:100%;object-fit:cover;border-radius:3px;" />` : `Pas Foto 3x4 Resmi`}
                </div>
                <div class="qr-box">
                  <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="margin: 0 auto; display: block;">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                  <span>Validasi Digital</span>
                </div>
              </div>

              <table class="data-table">
                <tr>
                  <td class="label">Nomor Induk (NIK)</td>
                  <td class="val" style="font-family: monospace;">${data.nikMasked}</td>
                </tr>
                <tr>
                  <td class="label">Nama Lengkap</td>
                  <td class="val" style="text-transform: uppercase;">${data.nama}</td>
                </tr>
                ${data.tempatLahir || data.tanggalLahir ? `
                <tr>
                  <td class="label">Tempat / Tgl Lahir</td>
                  <td class="val">${data.tempatLahir || '-'}${data.tanggalLahir ? `, ${data.tanggalLahir}` : ''}</td>
                </tr>` : ''}
                ${data.jenisKelamin ? `
                <tr>
                  <td class="label">Jenis Kelamin</td>
                  <td class="val">${data.jenisKelamin}</td>
                </tr>` : ''}
                <tr>
                  <td class="label">Wilayah Domisili</td>
                  <td class="val">${data.alamat || data.kecamatan || 'Kabupaten Konawe Selatan'}</td>
                </tr>
                <tr>
                  <td class="label">Tanggal Terbit</td>
                  <td class="val">${formatDateId(data.tanggalUpdate)}</td>
                </tr>
                <tr>
                  <td class="label">Status Keabsahan</td>
                  <td class="val" style="color: #065f46;">Dokumen Sah Elektronik (BSrE Verified)</td>
                </tr>
              </table>
            </div>

            <div class="terms">
              <strong>Ketentuan Pemegang Kartu AK-1:</strong>
              <ul>
                <li>Kartu ini berlaku selama 2 (dua) tahun terhitung sejak tanggal dikeluarkan.</li>
                <li>Wajib melapor ke Disnakertrans Konsel atau melalui portal PERAK setiap 6 (enam) bulan sekali bila belum mendapatkan pekerjaan.</li>
                <li>Apabila telah diterima bekerja, pemegang kartu wajib melaporkan status penempatan kerja.</li>
              </ul>
            </div>
          </div>

          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 400);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Pratinjau Kartu Kuning (AK-1) Digital
              </h3>
              <p className="text-[11px] text-slate-300">
                Pemerintah Kabupaten Konawe Selatan — Disnakertrans
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Kartu Kuning Document Simulation */}
        <div className="p-6 bg-slate-100 overflow-y-auto max-h-[75vh]">
          {/* Petunjuk Cetak */}
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Panduan Pencetakan:</span> Kartu ini sah dan memiliki kekuatan hukum dokumen digital dengan tanda tangan elektronik berupa kode QR. Dapat dicetak pada kertas HVS A4 (minimal 80 gram) atau kertas sertifikat.
            </div>
          </div>

          {/* Area Dokumen Kartu AK-1 (Print Area) */}
          <div
            id="printable-card"
            className="bg-yellow-50/70 border-2 border-yellow-300 rounded-xl p-6 shadow-sm relative overflow-hidden text-slate-900"
          >
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
              <span className="text-8xl font-black tracking-widest text-slate-900">
                PERAK
              </span>
            </div>

            {/* Kop Dokumen */}
            <div className="text-center border-b-2 border-slate-900 pb-3 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                Pemerintah Kabupaten Konawe Selatan
              </h4>
              <h3 className="text-sm font-black uppercase text-slate-900">
                Dinas Transmigrasi dan Tenaga Kerja
              </h3>
              <p className="text-[10px] text-slate-600">
                Kompleks Perkantoran Pemkab Konawe Selatan, Andoolo — Telp. (0401) 319-2026
              </p>
              <div className="mt-2 py-1 bg-yellow-200/80 rounded border border-yellow-400">
                <p className="text-xs font-black uppercase tracking-wider text-slate-900">
                  Tanda Bukti Pendaftaran Pencari Kerja (AK-1)
                </p>
              </div>
            </div>

            {/* Nomor Dokumen & Masa Berlaku */}
            <div className="flex justify-between items-center text-xs font-semibold mb-4 px-2 py-1 bg-white/70 rounded border border-yellow-200">
              <div>
                <span className="text-slate-500">No. Pendaftaran: </span>
                <span className="font-mono font-bold text-blue-900">
                  {data.nomorAk1 || data.nomorPengajuan}
                </span>
              </div>
              <div>
                <span className="text-slate-500">Berlaku s/d: </span>
                <span className="font-bold text-slate-800">
                  {data.masaBerlaku || '2 Tahun Sejak Terbit'}
                </span>
              </div>
            </div>

            {/* Grid Data Pencari Kerja & Pas Foto */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-start text-xs">
              {/* Foto Profil & QR */}
              <div className="sm:col-span-1 flex flex-col items-center gap-3">
                <div className="w-24 h-32 bg-slate-200 border-2 border-slate-400 rounded-md flex flex-col items-center justify-center p-2 text-center text-[10px] text-slate-500 shadow-inner">
                  <div className="w-10 h-10 rounded-full bg-slate-300 mb-1" />
                  <span>Pas Foto 3x4 Resmi</span>
                </div>
                {/* QR Code Verifikasi */}
                <div className="p-2 bg-white rounded border border-slate-300 shadow-sm flex flex-col items-center">
                  <QrCode className="w-14 h-14 text-slate-900" />
                  <span className="text-[9px] font-mono mt-1 text-slate-500">Scan Validasi</span>
                </div>
              </div>

              {/* Data Pribadi (Aman & Masked) */}
              <div className="sm:col-span-3 space-y-2">
                <div className="grid grid-cols-3 gap-2 border-b border-yellow-200 pb-1.5">
                  <span className="text-slate-600 font-medium">Nomor Induk (NIK)</span>
                  <span className="col-span-2 font-mono font-bold">{data.nikMasked}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-yellow-200 pb-1.5">
                  <span className="text-slate-600 font-medium">Nama Pencari Kerja</span>
                  <span className="col-span-2 font-bold uppercase">{data.nama}</span>
                </div>
                {(data.tempatLahir || data.tanggalLahir) && (
                  <div className="grid grid-cols-3 gap-2 border-b border-yellow-200 pb-1.5">
                    <span className="text-slate-600 font-medium">Tempat / Tgl Lahir</span>
                    <span className="col-span-2 font-medium">
                      {data.tempatLahir || '-'}
                      {data.tanggalLahir ? `, ${data.tanggalLahir}` : ''}
                    </span>
                  </div>
                )}
                {data.jenisKelamin && (
                  <div className="grid grid-cols-3 gap-2 border-b border-yellow-200 pb-1.5">
                    <span className="text-slate-600 font-medium">Jenis Kelamin</span>
                    <span className="col-span-2 font-medium">{data.jenisKelamin}</span>
                  </div>
                )}
                <div className="grid grid-cols-3 gap-2 border-b border-yellow-200 pb-1.5">
                  <span className="text-slate-600 font-medium">Wilayah Domisili</span>
                  <span className="col-span-2 font-medium">{data.alamat || data.kecamatan || 'Kabupaten Konawe Selatan'}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-yellow-200 pb-1.5">
                  <span className="text-slate-600 font-medium">Tanggal Penerbitan</span>
                  <span className="col-span-2 font-medium">{formatDateId(data.tanggalUpdate)}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pb-1.5">
                  <span className="text-slate-600 font-medium">Status Dokumen</span>
                  <span className="col-span-2 inline-flex items-center gap-1 font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Dokumen Sah Elektronik (BSrE Verified)
                  </span>
                </div>
              </div>
            </div>

            {/* Catatan Ketentuan Resmi di Bawah */}
            <div className="mt-4 pt-3 border-t border-dashed border-yellow-400 text-[10px] text-slate-600 space-y-1">
              <p><strong>Ketentuan Pemegang Kartu AK-1:</strong></p>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Kartu ini berlaku selama 2 (dua) tahun terhitung sejak tanggal dikeluarkan.</li>
                <li>Wajib melapor ke Disnakertrans Konsel atau melalui portal PERAK setiap 6 (enam) bulan sekali bila belum mendapatkan pekerjaan.</li>
                <li>Apabila telah diterima bekerja, pemegang kartu wajib melaporkan status penempatan kerja.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-white border-t border-slate-200">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Disahkan secara elektronik oleh Bidang Penempatan Tenaga Kerja Disnakertrans Konawe Selatan.
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              type="button"
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handlePrint}
              type="button"
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Dokumen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
