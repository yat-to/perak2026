'use strict';
import React from 'react';
import {
  X,
  FileCheck,
  AlertCircle,
  HelpCircle,
  CreditCard,
  Users,
  GraduationCap,
  Camera,
  Award,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { DOKUMEN_SYARAT } from '../../data/requirementsData';

interface SyaratDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SyaratDetailModal({
  isOpen,
  onClose,
}: SyaratDetailModalProps) {
  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Rincian Panduan Persyaratan Berkas
              </h3>
              <p className="text-xs text-slate-300">
                Penerbitan Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1)
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

        {/* Content */}
        <div className="p-6 bg-slate-50 overflow-y-auto max-h-[75vh] space-y-6">
          {/* Alert Ringkas */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3 text-xs text-blue-900">
            <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <p>
              Pastikan seluruh berkas yang dipindai (scan) atau difoto berasal dari <strong>dokumen asli berwarna</strong> (bukan fotokopi hitam putih), tulisan dan angka tidak buram, serta tidak terpotong pada bagian tepi.
            </p>
          </div>

          {/* List Dokumen Lengkap */}
          <div className="space-y-4">
            {DOKUMEN_SYARAT.map((dok, idx) => (
              <div
                key={dok.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                      {getIcon(dok.iconName)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {idx + 1}. {dok.nama}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{dok.deskripsi}</p>
                    </div>
                  </div>

                  <span
                    className={`shrink-0 px-2.5 py-1 text-[11px] font-bold rounded-full ${
                      dok.wajib
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {dok.wajib ? 'Wajib' : 'Opsional'}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 pt-1 border-t border-slate-100">
                  <span>Format: <strong>{dok.format}</strong></span>
                  <span>•</span>
                  <span>Ukuran: <strong>{dok.maxSize}</strong></span>
                </div>

                <div className="bg-slate-50 rounded-lg p-3 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">
                    Ketentuan Khusus:
                  </span>
                  <ul className="space-y-1">
                    {dok.ketentuan.map((k, kIdx) => (
                      <li key={kIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-4 bg-white border-t border-slate-200">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
          >
            Mengerti & Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
