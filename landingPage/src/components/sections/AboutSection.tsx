'use strict';
import React from 'react';
import {
  Target,
  Zap,
  CircleCheck,
  Users,
  Globe,
  BarChart3,
  Info,
} from 'lucide-react';

const COMMITMENTS = [
  {
    icon: CircleCheck,
    title: '100% Bebas Biaya (Gratis)',
    desc: 'Tidak ada biaya retribusi atau pungutan liar dalam seluruh proses permohonan Kartu Kuning.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Globe,
    title: 'Akses Dari Mana Saja',
    desc: 'Masyarakat dari seluruh kecamatan di Konawe Selatan dapat mengajukan tanpa harus datang ke kantor dinas.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: BarChart3,
    title: 'Transparansi Status',
    desc: 'Pelacakan real-time untuk setiap berkas pengajuan tanpa ada yang tertunda secara sepihak.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Zap,
    title: 'Proses Cepat & Aman',
    desc: 'Kartu dilengkapi QR Code dengan validasi tanda tangan elektronik resmi pejabat Disnakertrans Konsel.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Kiri: Penjelasan */}
          <div className="space-y-6">
            <div className="section-badge">
              <Info className="w-3.5 h-3.5" />
              Tentang Portal
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transformasi Digital{' '}
              <span className="text-blue-600">Pelayanan Ketenagakerjaan</span>{' '}
              Konawe Selatan
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>PERAK</strong> (<em>Pelayanan Elektronik Registrasi Antar Kerja</em>) adalah inovasi portal layanan publik digital resmi milik{' '}
              <strong>Dinas Transmigrasi dan Tenaga Kerja Pemerintah Kabupaten Konawe Selatan</strong>.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Portal ini mempermudah para pencari kerja di seluruh pelosok Konawe Selatan untuk mendapatkan{' '}
              <strong className="text-slate-700">Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1 / Kartu Kuning)</strong>{' '}
              secara cepat, tertib, dan mandiri.
            </p>

            {/* Mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wide">
                  <Target className="w-4 h-4" />
                  <span>Tujuan PERAK</span>
                </div>
                <p className="text-xs text-slate-600">
                  Memotong birokrasi dan menghemat waktu masyarakat dalam mengurus dokumen ketenagakerjaan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wide">
                  <Users className="w-4 h-4" />
                  <span>Layanan Untuk</span>
                </div>
                <p className="text-xs text-slate-600">
                  Seluruh pencari kerja di 25 kecamatan di Kabupaten Konawe Selatan, Sulawesi Tenggara.
                </p>
              </div>
            </div>
          </div>

          {/* Kanan: Maklumat */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-7 sm:p-8 shadow-xl shadow-blue-950/20 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                Maklumat Pelayanan
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                Komitmen Kami untuk Masyarakat
              </h3>
            </div>

            <div className="space-y-5">
              {COMMITMENTS.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Icon className={`w-4.5 h-4.5 ${c.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{c.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
