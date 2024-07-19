import { NextRequest, NextResponse } from 'next/server';
import { items } from '../../data';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const item = items.find((item: { id: any }) => item.id === id);
  return NextResponse.json(item);
}
