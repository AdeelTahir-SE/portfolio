import { NextResponse } from 'next/server';
import { getPortfolioData, savePortfolioData } from '@/lib/dataUtils';

export async function GET() {
  const data = getPortfolioData();
  return NextResponse.json({ experiences: data.experiences });
}

export async function POST(request) {
  try {
    const experience = await request.json();
    const data = getPortfolioData();
    
    const newExperience = {
      ...experience,
      id: Date.now().toString()
    };
    
    data.experiences.push(newExperience);
    
    if (savePortfolioData(data)) {
      return NextResponse.json({ success: true, experience: newExperience });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) return NextResponse.json({ success: false, error: "Missing ID" }, { status: 400 });
    
    const data = getPortfolioData();
    data.experiences = data.experiences.filter(e => e.id !== id);
    
    if (savePortfolioData(data)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
