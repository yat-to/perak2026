'use client';

import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  ArrowRight,
  User,
  Tag,
  Eye,
  Filter,
} from 'lucide-react';
import { BeritaInfo, KategoriInfo } from '../../types';
import { BERITA_LIST } from '../../data/mockData';
import { formatDateId } from '../../utils/formatters';

interface NewsSectionProps {
  onOpenNewsDetail: (news: BeritaInfo) => void;
}

const CATEGORIES: KategoriInfo[] = [
  'Semua',
  'Pengumuman',
  'Pelayanan',
  'Lowongan Kerja',
  'Pelatihan',
];

export default function NewsSection({ onOpenNewsDetail }: NewsSectionProps) {
  const [selectedCat, setSelectedCat] = useState<KategoriInfo>('Semua');

  const filteredNews =
    selectedCat === 'Semua'
      ? BERITA_LIST
      : BERITA_LIST.filter((b) => b.kategori === selectedCat);

  return (
    <section id="informasi" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold border border-blue-200">
              <Newspaper className="w-3.5 h-3.5" />
              Pusat Informasi Ketenagakerjaan
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Informasi, Pengumuman & Bursa Kerja
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Update terkini seputar pelayanan Kartu Kuning, pembukaan lowongan pekerjaan di Konawe Selatan, dan program pelatihan vokasi daerah.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCat === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-200/70 text-slate-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={news.gambar}
                    alt={news.judul}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-xs text-white">
                      {news.kategori}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{formatDateId(news.tanggal)}</span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {news.judul}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {news.ringkasan}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenNewsDetail(news)}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors group/btn"
                >
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
