'use client';

import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Award,
  FileCheck2,
  Clock,
  TrendingUp,
  GraduationCap,
  MapPin,
  RefreshCw,
  Building2,
  Calendar,
} from 'lucide-react';
import { StatistikData } from '../../types';
import { STATISTIK_MOCK } from '../../data/mockData';
import { formatNumber } from '../../utils/formatters';

interface StatisticsSectionProps {
  initialData?: StatistikData;
}

export default function StatisticsSection({
  initialData = STATISTIK_MOCK,
}: StatisticsSectionProps) {
  const [data, setData] = useState<StatistikData>(initialData);
  const [activeTab, setActiveTab] = useState<'bulanan' | 'pendidikan' | 'kecamatan'>(
    'bulanan'
  );
  const [loading, setLoading] = useState(false);

  // Cari nilai maksimum bulanan untuk kalkulasi persentase tinggi bar
  const maxBulanan = Math.max(...data.bulanan.map((b) => b.jumlah), 1);
  const maxKecamatan = Math.max(...data.kecamatan.map((k) => k.jumlah), 1);

  return (
    <section id="statistik" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
            <BarChart3 className="w-3.5 h-3.5" />
            Transparansi Kinerja Pelayanan
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Statistik Pelayanan PERAK Konsel
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Data real-time proses permohonan dan penerbitan Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1) di wilayah Kabupaten Konawe Selatan.
          </p>
        </div>

        {/* 4 Kartu Metrik Pelayanan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {/* Total Kartu Diterbitkan */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 shadow-md shadow-blue-950/10 space-y-3">
            <div className="flex items-center justify-between text-blue-300">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Kartu Diterbitkan
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-800/80 flex items-center justify-center">
                <Award className="w-4 h-4 text-amber-400" />
              </div>
            </div>
            <div className="text-3xl font-black tracking-tight text-white">
              {formatNumber(data.totalPenerbitan)}+
            </div>
            <p className="text-[11px] text-blue-200">
              Kartu AK-1 resmi telah diterbitkan dan aktif digunakan
            </p>
          </div>

          {/* Pengajuan Tahun Ini */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Pengajuan Tahun Ini
              </span>
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-blue-600">
                <FileCheck2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black tracking-tight text-slate-900">
              {formatNumber(data.pengajuanTahunIni)}
            </div>
            <p className="text-[11px] text-slate-500">
              Total permohonan masuk sepanjang tahun berjalan
            </p>
          </div>

          {/* Data Terverifikasi */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Data Terverifikasi
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black tracking-tight text-emerald-600">
              {data.persentaseVerifikasi}%
            </div>
            <p className="text-[11px] text-slate-500">
              {formatNumber(data.terverifikasi)} berkas berhasil lolos validasi
            </p>
          </div>

          {/* Rata-rata Waktu Verifikasi */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-slate-500">
              <span className="text-xs font-semibold uppercase tracking-wider">
                Kecepatan Layanan
              </span>
              <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-black tracking-tight text-slate-900">
              {data.rataRataHari} <span className="text-base font-semibold text-slate-500">Hari</span>
            </div>
            <p className="text-[11px] text-slate-500">
              {data.dalamProses} berkas saat ini dalam antrean verifikasi
            </p>
          </div>
        </div>

        {/* Visualisasi Interaktif */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {/* Filter Tab Visualisasi */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-xl w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveTab('bulanan')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'bulanan'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tren Bulanan
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pendidikan')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'pendidikan'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tingkat Pendidikan
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('kecamatan')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === 'kecamatan'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sebaran Kecamatan
              </button>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Data sinkronisasi: <strong>{data.terakhirDiperbarui}</strong></span>
            </div>
          </div>

          {/* Tab 1: Grafik Penerbitan Kartu Bulanan */}
          {activeTab === 'bulanan' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Grafik Jumlah Permohonan & Penerbitan Kartu Kuning per Bulan (Tahun 2026)
              </h3>
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="grid grid-cols-9 gap-2 sm:gap-4 items-end h-56 pt-6 pb-2">
                  {data.bulanan.map((item, idx) => {
                    const heightPercent = Math.round((item.jumlah / maxBulanan) * 100);
                    return (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-end h-full gap-2 group"
                      >
                        <span className="text-[10px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.jumlah}
                        </span>
                        <div className="w-full max-w-[2.5rem] bg-blue-100 rounded-t-lg relative flex flex-col justify-end overflow-hidden" style={{ height: `${heightPercent}%` }}>
                          <div
                            className="w-full bg-blue-600 rounded-t-lg transition-all duration-500 group-hover:bg-blue-700"
                            style={{ height: `${Math.round((item.disetujui / item.jumlah) * 100)}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700">
                          {item.bulan}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-blue-600" />
                    <span>Disetujui / Diterbitkan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-blue-100" />
                    <span>Total Pengajuan Masuk</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Tingkat Pendidikan */}
          {activeTab === 'pendidikan' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Distribusi Pencari Kerja Berdasarkan Jenjang Pendidikan Terakhir
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.pendidikan.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: p.color }}
                        />
                        <span className="text-sm font-bold text-slate-900">
                          {p.label}
                        </span>
                      </div>
                      <span className="text-sm font-extrabold text-slate-900">
                        {p.persentase}%
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${p.persentase}%`,
                          backgroundColor: p.color,
                        }}
                      />
                    </div>

                    <div className="text-[11px] text-slate-500">
                      Total: <strong>{formatNumber(p.jumlah)}</strong> pencari kerja terdaftar
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Sebaran Kecamatan */}
          {activeTab === 'kecamatan' && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Sebaran Pengajuan Kartu AK-1 per Kecamatan di Kabupaten Konawe Selatan
              </h3>
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.kecamatan.map((kec, idx) => {
                    const pct = Math.round((kec.jumlah / maxKecamatan) * 100);
                    return (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-800">
                            {kec.nama}
                          </span>
                          <span className="font-mono font-bold text-blue-700">
                            {kec.jumlah}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-blue-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
