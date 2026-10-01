export type StatusPengajuanType =
  | 'diterima'
  | 'verifikasi'
  | 'perlu_perbaikan'
  | 'disetujui'
  | 'siap_cetak'
  | 'selesai'
  | 'ditolak';

export interface TimelineStep {
  step: number;
  title: string;
  date: string;
  status: 'completed' | 'current' | 'pending';
  desc?: string;
}

export interface PengajuanDetail {
  id?: number;
  nomorPengajuan: string;
  nikMasked: string;
  nama?: string;
  namaMasked: string;
  pdfUrl?: string;
  pdfFileName?: string;
  email?: string;
  hp?: string;
  tempatLahir?: string;
  tanggalLahir?: string;
  jenisKelamin?: string;
  alamat?: string;
  foto?: string;
  tanggalPengajuan: string;
  tanggalUpdate: string;
  status: StatusPengajuanType;
  statusLabel: string;
  statusColor: string;
  catatanPetugas?: string;
  pendidikanTerakhir?: string;
  kecamatan?: string;
  nomorAk1?: string;
  masaBerlaku?: string;
  canPrint: boolean;
  timeline: TimelineStep[];
}

export interface StatistikData {
  totalPenerbitan: number;
  pengajuanTahunIni: number;
  terverifikasi: number;
  persentaseVerifikasi: number;
  dalamProses: number;
  rataRataHari: number;
  terakhirDiperbarui: string;
  bulanan: { bulan: string; jumlah: number; disetujui: number }[];
  pendidikan: { label: string; jumlah: number; persentase: number; color: string }[];
  kecamatan: { nama: string; jumlah: number }[];
}

export type KategoriInfo =
  | 'Semua'
  | 'Pengumuman'
  | 'Pelayanan'
  | 'Lowongan Kerja'
  | 'Pelatihan'
  | 'Bursa Kerja';

export interface BeritaInfo {
  id: string;
  slug: string;
  judul: string;
  kategori: Exclude<KategoriInfo, 'Semua'>;
  tanggal: string;
  ringkasan: string;
  konten: string[];
  gambar: string;
  penulis: string;
  dibaca: number;
  lampiran?: { nama: string; ukuran: string; url: string }[];
}

export interface FaqItem {
  id: string;
  pertanyaan: string;
  jawaban: string;
  kategori: 'Umum' | 'Persyaratan' | 'Proses' | 'Pencetakan' | 'Kendala';
}

export interface DokumenSyarat {
  id: string;
  nama: string;
  wajib: boolean;
  format: string;
  maxSize: string;
  deskripsi: string;
  ketentuan: string[];
  contoh?: string;
  iconName: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
