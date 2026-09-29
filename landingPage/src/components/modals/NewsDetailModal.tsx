'use strict';
import React from 'react';
import { X, Calendar, User, Tag, Share2, Eye } from 'lucide-react';
import { BeritaInfo } from '../../types';
import { formatDateId } from '../../utils/formatters';

interface NewsDetailModalProps {
  news: BeritaInfo | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsDetailModal({
  news,
  isOpen,
  onClose,
}: NewsDetailModalProps) {
  if (!isOpen || !news) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Modal */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/30 text-blue-300 border border-blue-500/40">
            {news.kategori}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[75vh] space-y-5">
          <h2 className="text-xl font-bold text-slate-900 leading-snug">
            {news.judul}
          </h2>

          <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-3 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {formatDateId(news.tanggal)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {news.penulis}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-slate-400" />
              {news.dibaca} kali dibaca
            </span>
          </div>

          <div className="relative w-full h-56 rounded-xl overflow-hidden bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={news.gambar}
              alt={news.judul}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3.5 text-sm text-slate-700 leading-relaxed">
            {news.konten.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200">
          <span className="text-xs text-slate-500">
            Sumber Resmi: Disnakertrans Kab. Konawe Selatan
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
