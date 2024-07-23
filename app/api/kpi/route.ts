import { NextResponse } from 'next/server';
import { items } from '../../../utils/data';

export async function GET() {
  return NextResponse.json({ data: items });
}
