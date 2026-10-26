'use client';

import React from 'react';
import {
  FileCheck2,
  Search,
  ArrowRight,
  CheckCircle,
  BadgeCheck,
  Timer,
  PrinterCheck,
  Landmark,
} from 'lucide-react';

interface HeroSectionProps {
  onCheckStatusClick?: () => void;
}

const TRUST_POINTS = [
  {
    icon: CheckCircle,
    label: '100% Gratis',
    sub: 'Tanpa biaya & calo',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-100',
  },
  {
    icon: Timer,
    label: '1–2 Hari Kerja',
    sub: 'Proses cepat & transparan',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: PrinterCheck,
    label: 'TTE & Cetak Mandiri',
    sub: 'Tanda tangan elektronik sah',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 border-indigo-100',
  },
];

export default function HeroSection({ onCheckStatusClick }: HeroSectionProps) {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL || '#';

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Badge institusi */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold backdrop-blur-sm">
            <Landmark className="w-3.5 h-3.5 text-amber-300" />
            Dinas Transmigrasi & Tenaga Kerja — Kab. Konawe Selatan
          </span>
        </div>

        {/* Headline */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Urus{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400">
                Kartu Kuning
              </span>
            </span>
            {' '}Lebih Mudah
            <br className="hidden sm:block" />
            <span className="text-blue-300"> Bersama </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              PERAK
            </span>
          </h1>

          <p className="text-base sm:text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Portal resmi pendaftaran dan pencetakan Kartu AK-1 bagi pencari kerja di Kabupaten Konawe Selatan.
            Bebas antre, transparan, dan <strong className="text-white">100% gratis</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-blue-900 bg-gradient-to-r from-amber-300 to-yellow-300 hover:from-amber-400 hover:to-yellow-400 active:scale-95 shadow-lg shadow-amber-500/20 transition-all group"
            >
              <FileCheck2 className="w-5 h-5" />
              <span>Daftar Kartu Kuning</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onCheckStatusClick}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all active:scale-95"
            >
              <Search className="w-4 h-4 text-blue-200" />
              <span>Cek Status Pengajuan</span>
            </button>
          </div>
        </div>

        {/* Trust points */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {TRUST_POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/8 border border-white/10 backdrop-blur-sm hover:bg-white/12 transition-all"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white">{item.label}</p>
                  <p className="text-xs text-blue-300">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10 sm:h-16">
          <path d="M0 60L480 20L960 40L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
