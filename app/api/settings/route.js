import { NextResponse } from 'next/server';
import { getPortfolioData, savePortfolioData } from '@/lib/dataUtils';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = getPortfolioData();
  return NextResponse.json({ settings: data.settings || {} });
}

export async function POST(request) {
  try {
    const newSettings = await request.json();
    const data = getPortfolioData();
    
    data.settings = { ...data.settings, ...newSettings };
    
    if (savePortfolioData(data)) {
      return NextResponse.json({ success: true, settings: data.settings });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save settings" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
