# Portal Layanan Digital PERAK Konsel (Landing Page)

Portal Layanan Publik Digital **Penerbitan dan Pencetakan Kartu Tanda Bukti Pendaftaran Pencari Kerja (AK-1 / Kartu Kuning)** bagi masyarakat Kabupaten Konawe Selatan, dikelola oleh **Dinas Transmigrasi dan Tenaga Kerja Pemerintah Kabupaten Konawe Selatan**.

---

## 📌 Konsep & Filosofi Portal

Website ini dirancang khusus sebagai **Portal Pelayanan Publik Pemerintah**, bukan dashboard database internal:
- **Fokus Utama**: Menjawab kebutuhan pencari kerja dalam alur: **Daftar → Verifikasi → Disetujui → Cetak Kartu Kuning**.
- **Perlindungan Privasi**: Tidak menampilkan data kependudukan sensitif (NIK lengkap, No. KK, kontak pribadi, alamat detail, dokumen internal).
- **Pemisahan Sistem**:
  - `PUBLIC PORTAL (/)`: Pintu masuk masyarakat umum untuk informasi, pendaftaran, pelacakan berkas, dan cetak mandiri.
  - `USER / PENDAFTAR (/dashboard)`: Area pendaftar untuk melengkapi dokumen.
  - `ADMIN PERAK (/admin atau port 3000 /login)`: Khusus petugas pengelola Disnakertrans untuk verifikasi berkas, penerbitan nomor AK-1, manajemen master data, dan pelaporan.

---

## 🚀 Fitur Utama Halaman Beranda

1. **Top Announcement**: Banner resmi pemberitahuan layanan 100% GRATIS dan jam pelayanan kantor.
2. **Navbar**: Logo resmi PERAK Konsel, navigasi responsif, mobile drawer, tombol "Daftar Kartu Kuning", "Cek Status", serta tautan "Login Admin".
3. **Hero Section**: Headline utama *"Urus Kartu Kuning Lebih Mudah dengan PERAK"*, dual CTA, trust badges (Resmi, Cepat, Gratis, Mandiri), dan preview kartu AK-1.
4. **Quick Service (Layanan Utama)**: 4 kartu layanan (Pendaftaran, Cek Status, Cetak Mandiri, Informasi Persyaratan).
5. **Alur Pelayanan (Stepper 01-05)**: 01 Daftar → 02 Lengkapi Data → 03 Verifikasi → 04 Disetujui → 05 Cetak Kartu Kuning.
6. **Persyaratan Dokumen**: Rincian berkas (KTP Konsel, Kartu Keluarga, Ijazah Terakhir, Pas Foto Formal, Sertifikat Keahlian) lengkap dengan spesifikasi format dan modal pop-up detail.
7. **Cek Status Pengajuan (Privacy-Safe)**: Input nomor pengajuan atau NIK dengan live query, status stepper progress, catatan verifikator, serta tombol cetak kartu langsung jika disetujui.
8. **Statistik Pelayanan**: Metrik pelayanan riil (Total Terbit, Pengajuan Tahun Ini, Rasio Terverifikasi, Rata-rata Waktu Verifikasi) serta grafik tren bulanan, sebaran pendidikan, dan per kecamatan.
9. **Informasi & Bursa Kerja**: Update pengumuman kedinasan, info lowongan kerja lokal, dan pelatihan vokasi BLK.
10. **FAQ (Tanya Jawab)**: Accordion interaktif untuk 9+ pertanyaan umum seputar AK-1 dengan pencarian instan.
11. **Tentang PERAK**: Profil inovasi pelayanan, tujuan, fungsi, dan maklumat komitmen pelayanan Disnakertrans Konsel.
12. **Kontak & Lokasi Kantor**: Alamat kantor di Andoolo, peta Google Maps, jam kerja, telepon kedinasan, dan hotline WhatsApp helpdesk.
13. **Pratinjau & Cetak Kartu Kuning (AK-1)**: Modal cetak dokumen digital resmi berformat standar AK-1 dengan kode QR validasi keabsahan dokumen.

---

## 🛠️ Teknologi & Stack

- **Framework**: Next.js 16 (App Router)
- **Library UI**: React 19
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icon Pack**: Lucide React
- **Backend Integrasi**: REST API FastAPI & fallback mock data service

---

## 📦 Menjalankan Aplikasi

### 1. Masuk ke direktori `landingPage`:
```bash
cd landingPage
```

### 2. Konfigurasi Environment:
Pastikan file `.env.local` telah dikonfigurasi:
```env
NEXT_PUBLIC_APP_NAME="PERAK Konsel"
NEXT_PUBLIC_API_URL="http://localhost:8000/api/v1"
NEXT_PUBLIC_ADMIN_URL="http://localhost:3000/login"
NEXT_PUBLIC_REGISTER_URL="/daftar"
NEXT_PUBLIC_WHATSAPP_HELPDESK="6281234567890"
```

### 3. Jalankan Mode Development:
```bash
npm run dev
```
Aplikasi akan berjalan pada:
```
http://localhost:3001
```
*(Port 3001 disiapkan agar tidak bertabrakan dengan portal admin di port 3000).*

### 4. Build untuk Production:
```bash
npm run build
npm run start
```

---

## 🏛️ Hak Cipta & Pengelola

Dikelola secara resmi oleh:
**Dinas Transmigrasi dan Tenaga Kerja Pemerintah Kabupaten Konawe Selatan**
Kompleks Perkantoran Pemerintah Daerah Kab. Konawe Selatan, Andoolo, Sulawesi Tenggara 93811.
