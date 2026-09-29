'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  FileCheck2,
  Search,
  Lock,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Alur', href: '#alur' },
  { name: 'Cek Status', href: '#cek-status' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const adminUrl = 'https://adminperak.konaweselatankab.go.id/';
  const registerUrl = 'https://adminperak.konaweselatankab.go.id/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identitas Pemda */}
          <Link href="#beranda" className="flex items-center group py-1">
            <Image
              src="/logo.png"
              alt="Logo PERAK Konsel"
              width={165}
              height={52}
              className="h-12 sm:h-18 w-auto object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-700 hover:bg-blue-50/70 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Cek Status Secondary Button */}
            <a
              href="#cek-status"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-blue-700 bg-slate-100/80 hover:bg-blue-50 rounded-xl transition-all border border-slate-200"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Cek Status</span>
            </a>

            {/* Daftar Kartu Kuning Primary CTA */}
            <a
              href={registerUrl}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-sm shadow-blue-500/20 rounded-xl transition-all"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Daftar Kartu Kuning</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#cek-status"
              className="sm:inline-flex hidden items-center gap-1 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 rounded-lg"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cek</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50/80 rounded-xl transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
            <a
              href={registerUrl}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors text-center"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Daftar Kartu Kuning (AK-1)</span>
            </a>

            <a
              href="#cek-status"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-center"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Cek Status Pengajuan</span>
            </a>

            <a
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors text-center"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Login Admin PERAK</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
