'use strict';
import React from 'react';
import {
  Building2,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Award,
} from 'lucide-react';

export default function AboutSection() {
  const commitments = [
    {
      title: '100% Bebas Biaya (Gratis)',
      desc: 'Tidak ada biaya retribusi atau pungutan liar dalam seluruh rangkaian proses permohonan Kartu Kuning.',
    },
    {
      title: 'Aman & Terverifikasi',
      desc: 'Setiap kartu dilengkapi QR Code dengan validasi tanda tangan elektronik resmi pejabat Disnakertrans Konsel.',
    },
    {
      title: 'Akses Dari Mana Saja',
      desc: 'Masyarakat dari seluruh kecamatan di Konawe Selatan dapat mengajukan tanpa harus datang dan mengantre di kantor dinas.',
    },
    {
      title: 'Transparansi Status',
      desc: 'Pelacakan real-time untuk setiap berkas pengajuan tanpa ada yang terlewat atau tertunda secara sepihak.',
    },
  ];

  return (
    <section id="tentang" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Kolom Kiri: Penjelasan Portal */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
              <Building2 className="w-3.5 h-3.5" />
              Mengenal PERAK Konsel
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transformasi Digital Pelayanan Ketenagakerjaan Konawe Selatan
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>PERAK</strong> (<em>Pelayanan Elektronik Registrasi Antar Kerja</em>) adalah inovasi portal layanan publik digital resmi milik <strong>Dinas Transmigrasi dan Tenaga Kerja Pemerintah Kabupaten Konawe Selatan</strong>.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Fokus utama portal ini adalah mempermudah para pencari kerja di seluruh pelosok Konawe Selatan untuk mendapatkan <strong>Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1 / Kartu Kuning)</strong> secara cepat, tertib, dan mandiri guna melengkapi persyaratan melamar pekerjaan di instansi pemerintah maupun perusahaan swasta.
            </p>

            {/* Tujuan & Fungsi Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wide">
                  <Target className="w-4 h-4" />
                  <span>Tujuan PERAK</span>
                </div>
                <p className="text-xs text-slate-600">
                  Memotong birokrasi, menghemat waktu serta ongkos transportasi masyarakat dalam mengurus dokumen ketenagakerjaan.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wide">
                  <Sparkles className="w-4 h-4" />
                  <span>Fungsi Layanan</span>
                </div>
                <p className="text-xs text-slate-600">
                  Pintu masuk satu data ketenagakerjaan daerah dan jembatan penghubung informasi pasar kerja di Sulawesi Tenggara.
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Nilai Komitmen Pelayanan */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                Maklumat Pelayanan
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Komitmen Kami Kepada Masyarakat
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Dikelola oleh Dinas Transmigrasi dan Tenaga Kerja Kab. Konawe Selatan
              </p>
            </div>

            <div className="space-y-4">
              {commitments.map((c, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{c.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Banner Disnakertrans Pengelola */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-black flex items-center justify-center text-sm shrink-0">
                KS
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">
                  Pemerintah Kabupaten Konawe Selatan
                </p>
                <p className="text-slate-500">
                  Dinas Transmigrasi dan Tenaga Kerja (Disnakertrans)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
