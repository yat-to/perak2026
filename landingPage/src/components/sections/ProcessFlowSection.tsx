'use strict';
import React from 'react';
import {
  UserPlus,
  FileSpreadsheet,
  FileSearch,
  CheckCircle2,
  Printer,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function ProcessFlowSection() {
  const steps = [
    {
      num: '01',
      title: 'Daftar Akun',
      desc: 'Buat akun pencari kerja dengan memasukkan NIK dan identitas diri yang valid sesuai KTP Kabupaten Konawe Selatan.',
      icon: UserPlus,
      color: 'blue',
    },
    {
      num: '02',
      title: 'Lengkapi Data',
      desc: 'Isi riwayat pendidikan, keterampilan kerja, serta unggah dokumen persyaratan (KTP, Ijazah, Pas Foto) secara jelas.',
      icon: FileSpreadsheet,
      color: 'indigo',
    },
    {
      num: '03',
      title: 'Verifikasi Petugas',
      desc: 'Petugas Disnakertrans Konsel melakukan pengecekan keabsahan dokumen kependudukan dan akademik pemohon.',
      icon: FileSearch,
      color: 'amber',
    },
    {
      num: '04',
      title: 'Pengajuan Disetujui',
      desc: 'Setelah verifikasi dinyatakan valid, nomor registrasi AK-1 diterbitkan dan disahkan secara elektronik dengan QR Code.',
      icon: CheckCircle2,
      color: 'emerald',
    },
    {
      num: '05',
      title: 'Cetak Kartu Kuning',
      desc: 'Unduh file PDF resmi dan cetak mandiri Kartu Kuning Anda. Kartu berlaku selama 2 tahun untuk melamar pekerjaan.',
      icon: Printer,
      color: 'teal',
    },
  ];

  return (
    <section id="alur" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            5 Langkah Mudah Memperoleh Kartu Kuning
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Proses transparan dari awal hingga akhir tanpa calo dan tanpa pungutan biaya, cukup dari ponsel atau laptop/komputer Anda.
          </p>
        </div>

        {/* Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Step Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Progress Indicator Dots */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Tahap {idx + 1} dari 5</span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white border border-blue-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Sudah menyiapkan dokumen yang dibutuhkan?
            </h4>
            <p className="text-xs text-slate-600">
              Lihat panduan berkas KTP, Ijazah, dan Pas Foto untuk menghindari status berkas ditolak/perlu perbaikan.
            </p>
          </div>
          <a
            href="#persyaratan"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-colors"
          >
            <span>Cek Kelengkapan Berkas</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
