'use strict';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Lock,
  ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || '#';

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-slate-400 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Kolom 1: Profil Portal */}
          <div className="space-y-4 lg:col-span-1">
            <Link href="#beranda" className="inline-block">
              <Image
                src="/logo.png"
                alt="Logo PERAK Konsel"
                width={160}
                height={50}
                className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Portal Layanan Publik Digital Penerbitan dan Pencetakan Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1 / Kartu Kuning) bagi masyarakat Kabupaten Konawe Selatan.
            </p>
            {/* Admin link */}
            <a
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal Admin PERAK</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Kolom 2: Layanan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Pendaftaran Kartu Kuning (AK-1)', href: '#layanan' },
                { label: 'Cek Status Pengajuan', href: '#cek-status' },
                { label: 'Persyaratan Dokumen', href: '#persyaratan' },
                { label: 'Alur Pelayanan Digital', href: '#alur' },
                { label: 'Statistik Pelayanan', href: '#statistik' },
                { label: 'Tanya Jawab (FAQ)', href: '#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors inline-flex items-center gap-1 group">
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Portal Terkait */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Portal Terkait
            </h4>
            <ul className="space-y-2.5 text-xs">
              {[
                { label: 'Kementerian Ketenagakerjaan RI', href: 'https://kemnaker.go.id' },
                { label: 'SIAPkerja Kemnaker', href: 'https://siapkerja.kemnaker.go.id' },
                { label: 'Pemerintah Kab. Konawe Selatan', href: 'https://konaweselatankab.go.id' },
                { label: 'BPS Kab. Konawe Selatan', href: 'https://konselkab.bps.go.id' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 text-slate-600 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Instansi Pengelola
            </h4>
            <div className="space-y-3 text-xs">
              <p className="font-semibold text-slate-200 text-sm leading-tight">
                Dinas Transmigrasi dan Tenaga Kerja<br />Kabupaten Konawe Selatan
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Kompleks Perkantoran Pemkab Konsel, Andoolo, Sulawesi Tenggara 93811</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>(0401) 319-2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>disnakertrans@konaweselatankab.go.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sen–Jum: 08.00–15.30 WITA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} Pemerintah Kabupaten Konawe Selatan. Seluruh hak cipta dilindungi undang-undang.</p>
            <p className="text-[11px] text-slate-600">
              Data pencari kerja dilindungi sesuai peraturan perundang-undangan perlindungan data pribadi.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-500 text-xs">
            <a href="#tentang" className="hover:text-white transition-colors">Tentang PERAK</a>
            <span className="text-slate-700">•</span>
            <a href="#faq" className="hover:text-white transition-colors">Pusat Bantuan</a>
            <span className="text-slate-700">•</span>
            <a
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Petugas Disnakertrans
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
