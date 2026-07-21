import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Ensure filename is safe (replace spaces with hyphens)
    const filename = file.name.replace(/\s+/g, '-');
    const certsDir = path.join(process.cwd(), 'public', 'certificates');
    
    // Ensure directory exists
    if (!fs.existsSync(certsDir)) {
      fs.mkdirSync(certsDir, { recursive: true });
    }

    const filepath = path.join(certsDir, filename);
    
    // Write file to public/certificates
    fs.writeFileSync(filepath, buffer);

    return NextResponse.json({ success: true, message: 'Uploaded successfully' });
  } catch (error) {
    console.error('Upload Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to upload' }, { status: 500 });
  }
}
