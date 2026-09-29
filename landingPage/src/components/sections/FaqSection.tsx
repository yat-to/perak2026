'use strict';
import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircleQuestion,
  PhoneCall,
} from 'lucide-react';
import { FAQS_LIST } from '../../data/mockData';

export default function FaqSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS_LIST.filter(
    (f) =>
      f.pertanyaan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.jawaban.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Temukan jawaban cepat seputar persyaratan, tata cara pendaftaran, hingga proses pencetakan Kartu Kuning (AK-1).
          </p>
        </div>

        {/* Search Bar FAQ */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari topik pertanyaan (misal: syarat, cetak, verifikasi, biaya)..."
            className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-blue-50/40 border-blue-200 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    type="button"
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-slate-900">
                      {faq.pertanyaan}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.jawaban}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-500">
              Pertanyaan tidak ditemukan. Silakan hubungi Helpdesk Layanan Disnakertrans Konawe Selatan.
            </div>
          )}
        </div>

        {/* Contact Helpdesk Note */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <MessageCircleQuestion className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Pertanyaan Anda belum terjawab?</p>
              <p className="text-slate-500">Petugas Helpdesk siap membantu kendala permohonan Anda.</p>
            </div>
          </div>
          <a
            href="#kontak"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>Hubungi Helpdesk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
