import type { Metadata } from "next";
import "./globals.css";
import TopAnnouncement from "@/components/common/TopAnnouncement";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "PERAK Konsel — Portal Layanan Digital Kartu Kuning (AK-1) Kabupaten Konawe Selatan",
  description:
    "Layanan digital resmi pendaftaran dan pencetakan Kartu Kuning (AK-1) bagi pencari kerja di Kabupaten Konawe Selatan. Dikelola oleh Dinas Transmigrasi dan Tenaga Kerja Kab. Konawe Selatan.",
  keywords: [
    "PERAK Konsel",
    "Kartu Kuning Konawe Selatan",
    "AK-1 Konawe Selatan",
    "Disnakertrans Konsel",
    "Pencari Kerja Konsel",
    "Lowongan Kerja Konawe Selatan",
    "Pelayanan Publik Konsel",
  ],
  authors: [{ name: "Dinas Transmigrasi dan Tenaga Kerja Kabupaten Konawe Selatan" }],
  openGraph: {
    title: "PERAK Konsel — Layanan Digital Kartu Kuning (AK-1)",
    description:
      "Portal pendaftaran dan pencetakan mandiri Kartu Kuning bagi masyarakat Kabupaten Konawe Selatan. Cepat, transparan, dan 100% gratis.",
    siteName: "PERAK Konsel",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <TopAnnouncement />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
