'use strict';
import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  ExternalLink,
  Headset,
} from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_HELPDESK;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Halo Helpdesk PERAK Konsel, saya ingin bertanya seputar pendaftaran/cetak Kartu Kuning (AK-1)...'
  )}`;

  const contactItems = [
    {
      icon: Building2,
      label: 'Instansi Penanggung Jawab',
      value: 'Dinas Transmigrasi dan Tenaga Kerja (Disnakertrans) Pemerintah Kabupaten Konawe Selatan',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-700',
    },
    {
      icon: MapPin,
      label: 'Alamat Kantor',
      value: 'Kompleks Perkantoran Pemkab Konawe Selatan, Kelurahan Potoro, Kecamatan Andoolo, Sulawesi Tenggara 93811',
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-700',
    },
    {
      icon: Phone,
      label: 'Telepon / Fax',
      value: '(0401) 319-2026',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-700',
    },
    {
      icon: Mail,
      label: 'Email Resmi',
      value: 'disnakertrans@konaweselatankab.go.id',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-700',
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      value: 'Sen–Kam: 08.00–15.30 WITA  |  Jum: 08.00–16.00 WITA',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-700',
    },
  ];

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="section-badge">
            <Headset className="w-3.5 h-3.5" />
            Hubungi Kami
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bantuan &{' '}
            <span className="text-blue-600">Lokasi Kantor</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Butuh bantuan pengajuan atau perbaikan data? Tim Helpdesk siap melayani Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Kiri: Kartu Kontak */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-4">
                Informasi Kantor Pengelola
              </h3>

              <div className="space-y-4">
                {contactItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Icon className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide mb-0.5">{item.label}</p>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-5 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl flex items-center justify-between gap-4 shadow-lg shadow-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Chat via WhatsApp</h4>
                  <p className="text-xs text-emerald-100">Terhubung langsung dengan petugas helpdesk.</p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs text-emerald-800 bg-white hover:bg-emerald-50 active:scale-95 shadow-sm transition-all"
              >
                <span>Chat WA</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Kanan: Peta */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
              <div className="p-5 border-b border-slate-100 bg-white">
                <h4 className="text-sm font-bold text-slate-900">
                  Lokasi Kantor Disnakertrans Konawe Selatan
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Andoolo, Kabupaten Konawe Selatan, Sulawesi Tenggara
                </p>
              </div>

              <div className="h-72 sm:h-80 w-full bg-slate-100">
                <iframe
                  title="Peta Lokasi Disnakertrans Konawe Selatan"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d774.7084860946895!2d122.28074042789112!3d-4.336996780929595!2m3!1f0!2f4.2470004779637804e-7!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1790739493389!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">Rute: Kompleks Perkantoran Pemkab Konsel</span>
                <a
                  href="https://maps.google.com/?q=Dinas+Ketenagakerjaan+Konawe+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  <span>Buka di Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
