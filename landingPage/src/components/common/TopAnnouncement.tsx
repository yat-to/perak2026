'use strict';
import React from 'react';
import { ShieldCheck, Clock, Phone, Sparkles } from 'lucide-react';

export default function TopAnnouncement() {
  return (
    <aside aria-label="Pengumuman Resmi" className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Banner Kiri: Status Resmi & 100% Bebas Biaya */}
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-[11px] border border-emerald-500/30">
            <Sparkles className="w-3 h-3" />
            100% GRATIS
          </span>
          <span className="text-slate-300">
            Penerbitan Kartu Kuning (AK-1) bebas dari segala bentuk pungutan biaya.
          </span>
        </div>

        {/* Informasi Kanan: Jam Pelayanan & Hotline */}
        <div className="flex items-center gap-4 text-slate-400 text-[11px]">
          <div className="hidden md:flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Senin - Jumat: 08:00 - 15:30 WITA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>Helpdesk Konsel: (0401) 319-2026</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
