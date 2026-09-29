import { NextResponse } from 'next/server';
import { STATISTIK_MOCK } from '@/data/mockData';

export async function GET() {
  // If FastAPI is running, can fetch from process.env.NEXT_PUBLIC_API_URL + '/statistik'
  // otherwise returns current official statistics
  return NextResponse.json({
    success: true,
    data: STATISTIK_MOCK,
    message: 'Data statistik pelayanan berhasil diambil.',
  });
}
