'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import RequirementsSection from '@/components/sections/RequirementsSection';
import SyaratDetailModal from '@/components/modals/SyaratDetailModal';

export default function PersyaratanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="py-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <RequirementsSection onOpenDetailModal={() => setIsModalOpen(true)} />

      <SyaratDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
