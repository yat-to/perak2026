'use client';

import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileCheck2,
  Printer,
  Shield,
  ArrowRight,
  Info,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { PengajuanDetail } from '../../types';
import { checkStatusPengajuan } from '../../services/statusService';
import { formatDateId, getStatusStyle } from '../../utils/formatters';

interface StatusCheckerSectionProps {
  onPrintCard: (data: PengajuanDetail) => void;
}

export default function StatusCheckerSection({
  onPrintCard,
}: StatusCheckerSectionProps) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PengajuanDetail | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const targetQuery = customQuery ?? query;
    if (!targetQuery.trim()) {
      setErrorMessage('Silakan Masukkan NIK Anda.');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setResult(null);
    setSearched(true);

    try {
      const res = await checkStatusPengajuan(targetQuery);
      if (res.success && res.data) {
        setResult(res.data);
      } else {
        setErrorMessage(
          res.message || 'NIK tidak ditemukan.'
        );
      }
    } catch {
      setErrorMessage('Terjadi kendala saat memeriksa status pengajuan.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSample = (code: string) => {
    setQuery(code);
    handleSearch(undefined, code);
  };

  const statusStyle = result ? getStatusStyle(result.status) : null;

  return (
    <section
      id="cek-status"
      className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Sudah Mengajukan? Cek Status Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Masukkan NIK KTP Anda untuk melihat perkembangan proses verifikasi.
          </p>
        </div>

        {/* Input Card Container */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-900/5 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Contoh: AK1-2026-0001 atau 16 digit NIK..."
                className="w-full pl-12 pr-32 py-4 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900 transition-all placeholder:text-slate-400 font-medium"
              />
              <div className="absolute inset-y-2 right-2 flex items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="h-full px-5 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-60 rounded-xl transition-all shadow-sm"
                >
                  {loading ? 'Memeriksa...' : 'Cek Status'}
                </button>
              </div>
            </div>
          </form>

          {/* Privacy Guarantee Note */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              <strong>Perlindungan Privasi:</strong> Data sensitif kependudukan seperti NIK lengkap dan berkas pribadi tidak dipublikasikan ke publik.
            </span>
          </div>
        </div>

        {/* Error State */}
        {errorMessage && (
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-8 text-xs text-rose-800 flex items-start gap-3 animate-in fade-in duration-200">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-sm mb-0.5">Pengajuan Tidak Ditemukan</p>
              <p>{errorMessage}</p>
              <div className="mt-3">
                <a
                  href="#persyaratan"
                  className="font-bold text-rose-900 underline hover:no-underline"
                >
                  Belum pernah mengajukan? Klik di sini untuk panduan pendaftaran baru &rarr;
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Success Result Container */}
        {result && statusStyle && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
            {/* Header Status Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {result.nomorPengajuan}
                  </span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-500">
                    Diajukan: {formatDateId(result.tanggalPengajuan)}
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  {result.namaMasked}
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  NIK Terdaftar: {result.nikMasked} ({result.kecamatan || 'Konawe Selatan'})
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex flex-col sm:items-end gap-1.5">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${statusStyle.badge}`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  {result.statusLabel}
                </span>
                <span className="text-[11px] text-slate-500">
                  Pembaruan: {formatDateId(result.tanggalUpdate)}
                </span>
              </div>
            </div>

            {/* Catatan Petugas */}
            {result.catatanPetugas && (
              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed flex items-start gap-3 ${statusStyle.bg} ${statusStyle.border} ${statusStyle.text}`}
              >
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold uppercase tracking-wider text-[11px] block mb-1">
                    Catatan Verifikator Disnakertrans:
                  </span>
                  {result.catatanPetugas}
                </div>
              </div>
            )}

            {/* Stepper Timeline Pengajuan */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Tahapan Pemrosesan Berkas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {result.timeline.map((t, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs space-y-1 ${
                      t.status === 'completed'
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                        : t.status === 'current'
                        ? 'bg-amber-50/80 border-amber-300 text-amber-900 ring-2 ring-amber-200'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold">Tahap {t.step}</span>
                      {t.status === 'completed' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      ) : t.status === 'current' ? (
                        <Clock className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      )}
                    </div>
                    <p className="font-semibold text-slate-900">{t.title}</p>
                    <p className="text-[10px] opacity-80">{t.date}</p>
                    {t.desc && (
                      <p className="text-[10px] text-slate-600 pt-1 border-t border-slate-200/50">
                        {t.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Cetak Kartu Kuning jika sudah disetujui */}
            {result.canPrint && (
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100">
                <div className="space-y-0.5 text-center sm:text-left">
                  <p className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 justify-center sm:justify-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Pengajuan Telah Disetujui Secara Resmi
                  </p>
                  <p className="text-[11px] text-slate-600">
                    No. AK-1: <span className="font-mono font-bold text-slate-900">{result.nomorAk1}</span> (Berlaku s/d: {result.masaBerlaku})
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onPrintCard(result)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Kartu Kuning (AK-1)</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
