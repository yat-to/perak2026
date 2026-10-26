'use strict';
import React from 'react';
import { Clock, Phone, ShieldCheck, Zap } from 'lucide-react';

export default function TopAnnouncement() {
  return (
    <aside
      aria-label="Pengumuman Resmi"
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs border-b border-blue-700/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Kiri: Status Resmi */}
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-blue-100">
            <Zap className="w-3 h-3 text-amber-300" />
            LAYANAN AKTIF
          </span>
          <span className="text-blue-200 hidden sm:inline">
            Penerbitan Kartu Kuning (AK-1) — Resmi & 100% Gratis
          </span>
          <span className="text-blue-200 sm:hidden text-[11px]">
            Kartu Kuning — Gratis
          </span>
        </div>

        {/* Kanan: Jam & Helpdesk */}
        <div className="flex items-center gap-4 text-blue-300 text-[10px] sm:text-[11px]">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Sen–Jum: 08:00–15:30 WITA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-emerald-300" />
            <span>Helpdesk: (0401) 319-2026</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
