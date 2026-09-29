'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NewsSection from '@/components/sections/NewsSection';
import NewsDetailModal from '@/components/modals/NewsDetailModal';
import { BeritaInfo } from '@/types';

export default function InformasiPage() {
  const [selectedNews, setSelectedNews] = useState<BeritaInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenNews = (news: BeritaInfo) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <NewsSection onOpenNewsDetail={handleOpenNews} />

      <NewsDetailModal
        news={selectedNews}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
