'use client';

import React, { useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import QuickServiceSection from '@/components/sections/QuickServiceSection';
import ProcessFlowSection from '@/components/sections/ProcessFlowSection';
import RequirementsSection from '@/components/sections/RequirementsSection';
import StatusCheckerSection from '@/components/sections/StatusCheckerSection';
import FaqSection from '@/components/sections/FaqSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

import PrintPreviewModal from '@/components/common/PrintPreviewModal';
import SyaratDetailModal from '@/components/modals/SyaratDetailModal';

import { PengajuanDetail } from '@/types';

export default function HomePage() {
  // Modal states
  const [printCardData, setPrintCardData] = useState<PengajuanDetail | null>(null);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  const [isSyaratModalOpen, setIsSyaratModalOpen] = useState(false);

  const handleOpenPrintModal = (data: PengajuanDetail) => {
    setPrintCardData(data);
    setIsPrintModalOpen(true);
  };

  const scrollToStatusSection = () => {
    const el = document.getElementById('cek-status');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection onCheckStatusClick={scrollToStatusSection} />

      {/* 2. Quick Service / Layanan Utama */}
      <QuickServiceSection
        onCheckStatusClick={scrollToStatusSection}
        onOpenSyaratModal={() => setIsSyaratModalOpen(true)}
      />

      {/* 3. Alur Pelayanan (01-05 Stepper) */}
      <ProcessFlowSection />

      {/* 4. Persyaratan Dokumen (Siapkan Persyaratan Anda) */}
      <RequirementsSection
        onOpenDetailModal={() => setIsSyaratModalOpen(true)}
      />

      {/* 5. Cek Status Pengajuan (Privacy-Safe Tracker) */}
      <StatusCheckerSection onPrintCard={handleOpenPrintModal} />

      {/* 6. FAQ (Tanya Jawab) */}
      <FaqSection />

      {/* 7. Tentang PERAK & Maklumat Pelayanan */}
      <AboutSection />

      {/* 8. Kontak & Lokasi Kantor Disnakertrans */}
      <ContactSection />

      {/* Modals */}
      <PrintPreviewModal
        data={printCardData}
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      />

      <SyaratDetailModal
        isOpen={isSyaratModalOpen}
        onClose={() => setIsSyaratModalOpen(false)}
      />
    </>
  );
}
