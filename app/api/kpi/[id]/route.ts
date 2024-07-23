import { KPIType } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import { items } from '../../../../utils/data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const item = items.find((item: KPIType) => item.id === id);
  return NextResponse.json(item);
}
