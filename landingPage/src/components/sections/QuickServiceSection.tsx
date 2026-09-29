'use strict';
import React from 'react';
import {
  FileText,
  Search,
  Printer,
  ClipboardList,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface QuickServiceSectionProps {
  onCheckStatusClick: () => void;
  onOpenSyaratModal: () => void;
}

export default function QuickServiceSection({
  onCheckStatusClick,
  onOpenSyaratModal,
}: QuickServiceSectionProps) {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL || '#persyaratan';

  const services = [
    {
      id: 'daftar',
      title: 'Pendaftaran Kartu Kuning',
      desc: 'Isi biodata diri dan unggah berkas kependudukan untuk mengajukan penerbitan Kartu AK-1 baru secara daring.',
      icon: FileText,
      iconBg: 'bg-blue-100 text-blue-700',
      actionText: 'Mulai Daftar',
      href: registerUrl,
      isButton: false,
      badge: 'Layanan Utama',
    },
    {
      id: 'status',
      title: 'Cek Status Pengajuan',
      desc: 'Pantau posisi berkas pengajuan Anda secara real-time, mulai dari antrean verifikasi hingga penerbitan kartu.',
      icon: Search,
      iconBg: 'bg-indigo-100 text-indigo-700',
      actionText: 'Cek Status Sekarang',
      action: onCheckStatusClick,
      isButton: true,
      badge: 'Real-Time',
    },
    {
      id: 'cetak',
      title: 'Cetak Kartu Kuning',
      desc: 'Unduh dokumen digital dan cetak mandiri Kartu AK-1 resmi yang telah disetujui tanpa perlu antre di kantor dinas.',
      icon: Printer,
      iconBg: 'bg-emerald-100 text-emerald-700',
      actionText: 'Akses Pencetakan',
      action: onCheckStatusClick,
      isButton: true,
      badge: 'Mandiri / QR Code',
    },
  ];

  return (
    <section id="layanan" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Layanan Perak
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Akses langsung ke seluruh tahapan penerbitan Kartu Kuning (AK-1) dalam satu portal yang mudah, cepat, dan terpercaya.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-slate-200/90 hover:border-blue-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Action CTA */}
                <div>
                  {item.isButton ? (
                    <button
                      onClick={item.action}
                      type="button"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 transition-colors group/btn"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors group/btn shadow-xs"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
