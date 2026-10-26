'use strict';
import React from 'react';
import {
  FileText,
  Search,
  Printer,
  ArrowRight,
  ExternalLink,
  Sparkles,
  RadioTower,
  Fingerprint,
} from 'lucide-react';

interface QuickServiceSectionProps {
  onCheckStatusClick: () => void;
  onOpenSyaratModal: () => void;
}

export default function QuickServiceSection({
  onCheckStatusClick,
  onOpenSyaratModal,
}: QuickServiceSectionProps) {
  const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL || '#';

  const services = [
    {
      id: 'daftar',
      title: 'Pendaftaran Kartu Kuning',
      desc: 'Isi biodata dan unggah berkas kependudukan untuk mengajukan penerbitan Kartu AK-1 baru secara daring.',
      icon: FileText,
      gradient: 'from-blue-600 to-blue-700',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
      actionText: 'Mulai Daftar Sekarang',
      badge: 'Layanan Utama',
      badgeColor: 'bg-blue-100 text-blue-700',
      href: registerUrl,
      isExternal: true,
      isButton: false,
    },
    {
      id: 'status',
      title: 'Cek Status Pengajuan',
      desc: 'Pantau posisi berkas secara real-time, mulai dari antrean verifikasi hingga penerbitan kartu Anda.',
      icon: RadioTower,
      gradient: 'from-indigo-600 to-violet-700',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
      actionText: 'Cek Status Pengajuan',
      badge: 'Real-Time',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      action: onCheckStatusClick,
      isExternal: false,
      isButton: true,
    },
    {
      id: 'cetak',
      title: 'Cetak Kartu Kuning',
      desc: 'Unduh dan cetak mandiri Kartu AK-1 resmi yang disetujui tanpa harus antre di kantor dinas.',
      icon: Printer,
      gradient: 'from-emerald-600 to-teal-700',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      actionText: 'Akses Pencetakan',
      badge: 'QR Code Resmi',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      action: onCheckStatusClick,
      isExternal: false,
      isButton: true,
    },
  ];

  return (
    <section id="layanan" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            Layanan Digital
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Semua Layanan dalam{' '}
            <span className="text-blue-600">Satu Portal</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Akses langsung ke seluruh tahapan penerbitan Kartu Kuning (AK-1) — mudah, cepat, dan terpercaya.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/50 group-hover:to-indigo-50/30 transition-all duration-300 rounded-2xl" />

                <div className="relative flex flex-col h-full">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-6">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  {item.isButton ? (
                    <button
                      onClick={item.action}
                      type="button"
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-slate-700 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 transition-all group/btn"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className={`w-full inline-flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${item.gradient} hover:opacity-90 shadow-sm transition-all group/btn`}
                    >
                      <span>{item.actionText}</span>
                      <div className="flex items-center gap-1">
                        {item.isExternal && <ExternalLink className="w-3 h-3 opacity-70" />}
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </div>
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
