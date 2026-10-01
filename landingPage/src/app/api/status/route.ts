import { NextRequest, NextResponse } from 'next/server';
import { checkStatusPengajuan } from '@/services/api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  if (!query) {
    return NextResponse.json(
      { success: false, message: 'Parameter query nomor pengajuan / NIK diperlukan.' },
      { status: 400 }
    );
  }

  const result = await checkStatusPengajuan(query);
  return NextResponse.json(result);
}
