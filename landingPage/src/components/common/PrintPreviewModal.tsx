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
    window.print();
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
