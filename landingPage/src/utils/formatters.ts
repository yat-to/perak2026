import { StatusPengajuanType } from '../types';

/**
 * Mask NIK to preserve citizen privacy:
 * Example: 7405011204980001 -> 740501******0001
 */
export function maskNik(nik: string): string {
  if (!nik) return '-';
  const clean = nik.replace(/\D/g, '');
  if (clean.length < 10) return '******';
  const prefix = clean.slice(0, 6);
  const suffix = clean.slice(-4);
  return `${prefix}******${suffix}`;
}

/**
 * Mask citizen full name:
 * Example: Muhammad Rizky Pratama -> M******* R**** P******
 */
export function maskName(name: string): string {
  if (!name) return '-';
  const parts = name.trim().split(/\s+/);
  return parts
    .map((part) => {
      if (part.length <= 2) return part[0] + '*';
      return part[0] + '*'.repeat(part.length - 1);
    })
    .join(' ');
}

/**
 * Format date to standard Indonesian format: e.g. "28 September 2026"
 */
export function formatDateId(dateString: string): string {
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(d);
  } catch {
    return dateString;
  }
}

/**
 * Format numbers with Indonesian thousands separator: e.g. 1.482
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('id-ID').format(num);
}

/**
 * Get color styling based on application status
 */
export function getStatusStyle(status: StatusPengajuanType): {
  bg: string;
  text: string;
  border: string;
  badge: string;
  iconBg: string;
} {
  switch (status) {
    case 'diterima':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
        badge: 'bg-blue-100 text-blue-800 border-blue-200',
        iconBg: 'bg-blue-500 text-white',
      };
    case 'verifikasi':
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200',
        badge: 'bg-amber-100 text-amber-800 border-amber-200',
        iconBg: 'bg-amber-500 text-white',
      };
    case 'perlu_perbaikan':
      return {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-200',
        badge: 'bg-orange-100 text-orange-800 border-orange-200',
        iconBg: 'bg-orange-500 text-white',
      };
    case 'disetujui':
    case 'siap_cetak':
    case 'selesai':
      return {
        bg: 'bg-emerald-50',
        text: 'text-emerald-700',
        border: 'border-emerald-200',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        iconBg: 'bg-emerald-600 text-white',
      };
    case 'ditolak':
      return {
        bg: 'bg-rose-50',
        text: 'text-rose-700',
        border: 'border-rose-200',
        badge: 'bg-rose-100 text-rose-800 border-rose-200',
        iconBg: 'bg-rose-600 text-white',
      };
    default:
      return {
        bg: 'bg-slate-50',
        text: 'text-slate-700',
        border: 'border-slate-200',
        badge: 'bg-slate-100 text-slate-800 border-slate-200',
        iconBg: 'bg-slate-500 text-white',
      };
  }
}
