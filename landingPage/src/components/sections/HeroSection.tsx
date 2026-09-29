'use client';

import React from 'react';
import {
  FileCheck2,
  Search,
  Sparkles,
  ArrowRight,
  Clock,
  Printer,
} from 'lucide-react';

interface HeroSectionProps {
  onCheckStatusClick?: () => void;
}

export default function HeroSection({ onCheckStatusClick }: HeroSectionProps) {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL || '#persyaratan';

  return (
    <section id="beranda" className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Headline Utama */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
            Urus Kartu Kuning Lebih Mudah dengan{' '}
            <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
              PERAK
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Layanan digital pendaftaran dan pencetakan Kartu Kuning (AK-1) bagi pencari kerja di Kabupaten Konawe Selatan. Bebas antre, transparan, dan 100% gratis.
          </p>

          {/* CTA Utama dan Sekunder */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={registerUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-500/25 transition-all group"
            >
              <FileCheck2 className="w-5 h-5" />
              <span>Daftar Kartu Kuning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#cek-status"
              onClick={onCheckStatusClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-700 hover:text-blue-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all active:scale-95"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Cek Status Pengajuan</span>
            </a>
          </div>

          {/* Point Kepercayaan & Nilai Layanan */}
          <div className="pt-8 border-t border-slate-200/80 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs backdrop-blur-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">100% Gratis</p>
                <p className="text-[11px] text-slate-500">Tanpa biaya & calo</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs backdrop-blur-xs">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Proses Cepat</p>
                <p className="text-[11px] text-slate-500">1-2 hari kerja</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-white/70 border border-slate-200/60 shadow-xs backdrop-blur-xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Printer className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Cetak Mandiri</p>
                <p className="text-[11px] text-slate-500">QR Code sah resmi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
