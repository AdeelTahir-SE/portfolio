import { NextResponse } from 'next/server';
import { getPortfolioData, savePortfolioData } from '@/lib/dataUtils';

export async function GET() {
  const data = getPortfolioData();
  return NextResponse.json({ projects: data.projects });
}

export async function POST(request) {
  try {
    const project = await request.json();
    const data = getPortfolioData();
    
    const newProject = {
      ...project,
      id: Date.now().toString()
    };
    
    data.projects.push(newProject);
    
    if (savePortfolioData(data)) {
      return NextResponse.json({ success: true, project: newProject });
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
    data.projects = data.projects.filter(p => p.id !== id);
    
    if (savePortfolioData(data)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
