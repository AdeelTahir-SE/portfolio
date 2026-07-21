import { NextResponse } from 'next/server';
import { getMessagesData, saveMessagesData } from '@/lib/dataUtils';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = getMessagesData();
  return NextResponse.json({ messages: data.messages });
}

export async function POST(request) {
  try {
    const message = await request.json();
    const data = getMessagesData();
    
    const newMessage = {
      ...message,
      id: Date.now().toString(),
      date: new Date().toISOString()
    };
    
    data.messages.push(newMessage);
    
    if (saveMessagesData(data)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save message" }, { status: 500 });
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
    
    const data = getMessagesData();
    data.messages = data.messages.filter(m => m.id !== id);
    
    if (saveMessagesData(data)) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
