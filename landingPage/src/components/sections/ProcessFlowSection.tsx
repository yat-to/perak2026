'use strict';
import React from 'react';
import {
  FilePenLine,
  FileSearch,
  Scale,
  FileSignature,
  PrinterCheck,
  ArrowRight,
  Route,
  ShieldCheck,
} from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Masyarakat Input Data',
    sub: 'Pengajuan Mandiri',
    desc: 'Pemohon mengisi formulir biodata lengkap, riwayat pendidikan, dan mengunggah dokumen persyaratan (KTP, Ijazah, Pas Foto) secara online.',
    icon: FilePenLine,
    accent: 'blue',
  },
  {
    num: '02',
    title: 'Operator Verifikasi Data',
    sub: 'Validasi Berkas',
    desc: 'Operator Disnakertrans memeriksa kelengkapan administrasi dan memvalidasi keabsahan data serta dokumen yang diunggah pemohon.',
    icon: FileSearch,
    accent: 'indigo',
  },
  {
    num: '03',
    title: 'Persetujuan / Penolakan',
    sub: 'Keputusan Berkas',
    desc: 'Pejabat verifikator meninjau hasil validasi: menyetujui jika dokumen lengkap atau menolak dengan catatan perbaikan jika belum sesuai.',
    icon: Scale,
    accent: 'amber',
  },
  {
    num: '04',
    title: 'Penandatangan TTE',
    sub: 'Sertifikasi Digital',
    desc: 'Dokumen AK-1 ditandatangani secara elektronik (TTE) tersertifikasi resmi oleh Kepala Dinas / Pejabat berwenang sesuai regulasi SPBE.',
    icon: FileSignature,
    accent: 'purple',
  },
  {
    num: '05',
    title: 'Pencetakan Kartu Selesai',
    sub: 'Penerbitan AK-1',
    desc: 'Kartu Kuning AK-1 ber-TTE resmi selesai diterbitkan. Masyarakat dapat langsung mengunduh file PDF dan mencetak kartu secara mandiri.',
    icon: PrinterCheck,
    accent: 'emerald',
  },
];

const ACCENT_MAP: Record<string, { card: string; num: string; icon: string; badge: string }> = {
  blue: {
    card: 'border-blue-200 hover:border-blue-400',
    num: 'text-blue-100 group-hover:text-blue-200',
    icon: 'bg-blue-600 text-white',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  indigo: {
    card: 'border-indigo-200 hover:border-indigo-400',
    num: 'text-indigo-100 group-hover:text-indigo-200',
    icon: 'bg-indigo-600 text-white',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  amber: {
    card: 'border-amber-200 hover:border-amber-400',
    num: 'text-amber-100 group-hover:text-amber-200',
    icon: 'bg-amber-500 text-white',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  purple: {
    card: 'border-purple-200 hover:border-purple-400',
    num: 'text-purple-100 group-hover:text-purple-200',
    icon: 'bg-purple-600 text-white',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  emerald: {
    card: 'border-emerald-200 hover:border-emerald-400',
    num: 'text-emerald-100 group-hover:text-emerald-200',
    icon: 'bg-emerald-600 text-white',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
};

export default function ProcessFlowSection() {
  return (
    <section id="alur" className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="section-badge">
            <Route className="w-3.5 h-3.5" />
            Alur Pelayanan Digital &amp; TTE (5 Tahap)
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            5 Tahapan Pelayanan Kartu Kuning{' '}
            <span className="text-blue-600">Berbasis TTE Resmi</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Transparan, cepat, dan berkekuatan hukum digital. Dari pengajuan mandiri oleh masyarakat, verifikasi, keputusan berkas, penandatanganan TTE, hingga kartu siap dicetak.
          </p>
        </div>

        {/* Steps Grid (5 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {/* Connector line (desktop only) */}
          <div className="absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-amber-200 to-emerald-300 hidden lg:block pointer-events-none z-0" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const colors = ACCENT_MAP[step.accent];
            const isLast = idx === STEPS.length - 1;
            return (
              <div
                key={step.num}
                className={`group relative z-10 bg-white border ${colors.card} rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col ${
                  isLast ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto sm:w-full lg:max-w-none' : ''
                }`}
              >
                {/* Header row: Step number & Sub badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-3xl font-black font-mono ${colors.num} leading-none transition-colors`}>
                    {step.num}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                    {step.sub}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${colors.icon} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1">{step.desc}</p>

                {/* Step indicator */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-500">Tahap {idx + 1} dari 5</span>
                  {idx < STEPS.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-300 lg:hidden" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg shadow-blue-500/20">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-semibold mb-1 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Keabsahan Dokumen Dijamin UU ITE
            </div>
            <h4 className="text-base font-bold text-white">
              Siap Mengajukan Kartu Kuning AK-1 Anda?
            </h4>
            <p className="text-xs text-blue-100">
              Pastikan dokumen persyaratan sudah lengkap agar proses verifikasi dan penandatanganan TTE berjalan lancar.
            </p>
          </div>
          <a
            href="#persyaratan"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-colors shadow-sm"
          >
            <span>Cek Dokumen Persyaratan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
