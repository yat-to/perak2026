'use strict';
import React from 'react';
import {
  IdCard,
  Users,
  GraduationCap,
  Camera,
  Award,
  Briefcase,
  CircleCheck,
  FileCheck2,
  ArrowRight,
  FolderOpen,
} from 'lucide-react';
import { DOKUMEN_SYARAT } from '../../data/requirementsData';

interface RequirementsSectionProps {
  onOpenDetailModal: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  CreditCard: <IdCard className="w-5 h-5 text-blue-600" />,
  Users: <Users className="w-5 h-5 text-indigo-600" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-600" />,
  Camera: <Camera className="w-5 h-5 text-amber-600" />,
  Award: <Award className="w-5 h-5 text-purple-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-slate-600" />,
};

export default function RequirementsSection({
  onOpenDetailModal,
}: RequirementsSectionProps) {
  return (
    <section id="persyaratan" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="section-badge">
            <FolderOpen className="w-3.5 h-3.5" />
            Persyaratan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Siapkan Dokumen{' '}
            <span className="text-blue-600">Sebelum Mendaftar</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Pastikan dokumen telah dipindai atau difoto dengan jelas sebelum mengisi formulir pendaftaran secara daring.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOKUMEN_SYARAT.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-200 hover:border-blue-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {ICON_MAP[item.iconName] ?? <FileCheck2 className="w-5 h-5 text-blue-600" />}
                </div>
                <span
                  className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full shrink-0 ${
                    item.wajib
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}
                >
                  {item.wajib ? 'Wajib' : 'Opsional'}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-blue-700 transition-colors">
                {item.nama}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                {item.deskripsi}
              </p>

              {/* Bullet points */}
              <ul className="space-y-1.5 mb-4 flex-1">
                {item.ketentuan.slice(0, 2).map((k, kIdx) => (
                  <li key={kIdx} className="flex items-start gap-2">
                    <CircleCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600">{k}</span>
                  </li>
                ))}
              </ul>

              {/* Format specs */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Format: <strong className="text-slate-600">{item.format}</strong></span>
                <span>{item.maxSize}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenDetailModal}
            type="button"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm shadow-blue-500/20 active:scale-95"
          >
            <span>Lihat Persyaratan Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-3 text-xs text-slate-400">
            Format berkas, ukuran maksimal, dan ketentuan lengkap tersedia di halaman detail.
          </p>
        </div>
      </div>
    </section>
  );
}
