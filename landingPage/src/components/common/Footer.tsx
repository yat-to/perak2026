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
  Shield,
  FileText,
  Lock,
  HeartHandshake,
} from 'lucide-react';

export default function Footer() {
  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

  return (
    <footer className="bg-slate-800 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Kolom 1: Profil Portal */}
          <div className="space-y-4">
            <Link href="#beranda" className="inline-block bg-white p-2.5 rounded-xl shadow-xs hover:opacity-95 transition-opacity">
              <Image
                src="/logo.png"
                alt="Logo PERAK Konsel"
                width={180}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Portal Layanan Publik Digital Penerbitan dan Pencetakan Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1 / Kartu Kuning) bagi masyarakat Kabupaten Konawe Selatan.
            </p>
          </div>

          {/* Kolom 2: Navigasi Layanan Publik */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#layanan" className="hover:text-blue-400 transition-colors">
                  Pendaftaran Kartu Kuning (AK-1)
                </a>
              </li>
              <li>
                <a href="#cek-status" className="hover:text-blue-400 transition-colors">
                  Cek Status Pengajuan
                </a>
              </li>
              <li>
                <a href="#persyaratan" className="hover:text-blue-400 transition-colors">
                  Persyaratan Dokumen
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-blue-400 transition-colors">
                  Alur Pelayanan Digital
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Tautan Eksternal Resmi */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Portal Terkait
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://kemnaker.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>Kementerian Ketenagakerjaan RI</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://siapkerja.kemnaker.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>SIAPkerja Kemnaker</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://konaweselatankab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>Pemerintah Kab. Konawe Selatan</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://konselkab.bps.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <span>BPS Kabupaten Konawe Selatan</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={adminUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 font-medium"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Portal Admin PERAK</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak Instansi Pengelola */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Instansi Pengelola
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="font-semibold text-slate-200">
                Dinas Transmigrasi dan Tenaga Kerja Kabupaten Konawe Selatan
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>
                  Kompleks Perkantoran Pemerintah Daerah Kab. Konawe Selatan, Andoolo, Sulawesi Tenggara 93811
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>(0401) 319-2026 / 0812-4567-8901</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>disnakertrans@konaweselatankab.go.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Senin – Jumat: 08.00 – 15.30 WITA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Privasi & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Pemerintah Kabupaten Konawe Selatan. Seluruh hak cipta dilindungi undang-undang.
            </p>
            <p className="mt-1 text-[11px] text-slate-600">
              Data pencari kerja dilindungi sesuai ketentuan peraturan perundang-undangan perlindungan data pribadi dan privasi kependudukan.
            </p>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <a href="#tentang" className="hover:text-white transition-colors">
              Tentang PERAK
            </a>
            <span>•</span>
            <a href="#faq" className="hover:text-white transition-colors">
              Pusat Bantuan
            </a>
            <span>•</span>
            <a
              href={adminUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              Petugas Disnakertrans
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
