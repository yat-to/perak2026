'use strict';
import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export default function ContactSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_HELPDESK;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Halo Helpdesk PERAK Konsel, saya ingin bertanya seputar pendaftaran/cetak Kartu Kuning (AK-1)...'
  )}`;

  return (
    <section id="kontak" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hubungi Disnakertrans Konawe Selatan
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Butuh bantuan pengajuan atau perbaikan data? Tim Helpdesk kami siap melayani Anda melalui loket kedinasan maupun layanan daring.
          </p>
        </div>

        {/* 2 Kolom Layout: Detail Kontak & Peta/Jam Kerja */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Kartu Kontak & WhatsApp CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Informasi Kantor Pengelola
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Instansi Penanggung Jawab</p>
                    <p className="text-slate-600 mt-0.5">
                      Dinas Transmigrasi dan Tenaga Kerja (Disnakertrans) Pemerintah Kabupaten Konawe Selatan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Alamat Kantor</p>
                    <p className="text-slate-600 mt-0.5">
                      Kompleks Perkantoran Pemerintah Daerah Kabupaten Konawe Selatan, Kelurahan Potoro, Kecamatan Andoolo, Sulawesi Tenggara 93811
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Telepon / Fax</p>
                    <p className="text-slate-600 mt-0.5">(0401) 319-2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email Resmi</p>
                    <p className="text-slate-600 mt-0.5">disnakertrans@konaweselatankab.go.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Jam Operasional Layanan</p>
                    <p className="text-slate-600 mt-0.5">
                      Senin – Kamis : 08.00 – 15.30 WITA<br />
                      Jumat : 08.00 – 16.00 WITA (Istirahat Sholat: 11.30 – 13.00 WITA)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Assistance */}
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Konsultasi Cepat via WhatsApp
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Tersambung langsung dengan petugas helpdesk PERAK Konsel.
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-sm transition-all"
              >
                <span>Chat WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Peta Lokasi & Maklumat Pelayanan */}
          <div className="lg:col-span-6 space-y-6">
            {/* Visual Peta Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
              <div className="p-6 border-b border-slate-200 bg-white">
                <h4 className="text-sm font-bold text-slate-900">
                  Lokasi Kantor Disnakertrans Konawe Selatan
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Andoolo, Kabupaten Konawe Selatan, Sulawesi Tenggara
                </p>
              </div>

              {/* Map Canvas / Simulated Interactive Map Container */}
              <div className="h-64 sm:h-72 w-full bg-slate-200 relative flex items-center justify-center p-4">
                <iframe
                  title="Peta Lokasi Kantor Bupati & Disnakertrans Konawe Selatan"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d774.7084860946895!2d122.28074042789112!3d-4.336996780929595!2m3!1f0!2f4.2470004779637804e-7!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1790739493389!5m2!1sen!2sus"
                  className="w-full h-full border-0 rounded-2xl"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>Rute: Kompleks Perkantoran Pemkab Konsel</span>
                <a
                  href="https://maps.google.com/?q=Dinas+Ketenagakerjaan+Konawe+Selatan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Buka di Google Maps</span>
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
