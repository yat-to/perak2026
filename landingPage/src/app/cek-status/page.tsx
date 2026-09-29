'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import StatusCheckerSection from '@/components/sections/StatusCheckerSection';
import PrintPreviewModal from '@/components/common/PrintPreviewModal';
import { PengajuanDetail } from '@/types';

export default function CekStatusPage() {
  const [printCardData, setPrintCardData] = useState<PengajuanDetail | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const handlePrint = (data: PengajuanDetail) => {
    setPrintCardData(data);
    setIsPrintModalOpen(true);
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

      <StatusCheckerSection onPrintCard={handlePrint} />

      <PrintPreviewModal
        data={printCardData}
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />
    </div>
  );
}
