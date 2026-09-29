'use strict';
import React from 'react';
import {
  CreditCard,
  Users,
  GraduationCap,
  Camera,
  Award,
  Briefcase,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  Info,
} from 'lucide-react';
import { DOKUMEN_SYARAT } from '../../data/requirementsData';

interface RequirementsSectionProps {
  onOpenDetailModal: () => void;
}

export default function RequirementsSection({
  onOpenDetailModal,
}: RequirementsSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-emerald-600" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-amber-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-purple-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-slate-600" />;
      default:
        return <FileCheck className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="persyaratan" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Siapkan Persyaratan Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Pastikan dokumen pendukung telah dipindai (scan) atau difoto dengan jelas sebelum mengisi formulir pendaftaran secata daring.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOKUMEN_SYARAT.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Card */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getIcon(item.iconName)}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 text-[10px] font-bold uppercase rounded-full ${
                      item.wajib
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {item.wajib ? 'Wajib' : 'Opsional'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.nama}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.deskripsi}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-1.5 mb-5 text-xs text-slate-600">
                  {item.ketentuan.slice(0, 2).map((k, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Format & Size Specs */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span>Format: {item.format}</span>
                <span>{item.maxSize}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button "Lihat Persyaratan Lengkap" */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenDetailModal}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 border border-slate-200 rounded-xl transition-all shadow-xs active:scale-95"
          >
            <span>Lihat Persyaratan Lengkap & Format Berkas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
