import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const certsDir = path.join(process.cwd(), 'public', 'certificates');
    
    if (!fs.existsSync(certsDir)) {
      // Return empty if directory doesn't exist yet
      return NextResponse.json({ certificates: [] });
    }
    
    const files = fs.readdirSync(certsDir);
    // Filter for image files
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp|pdf)$/i.test(file));
    
    // Map to public URLs
    const certificates = imageFiles.map(file => `/certificates/${file}`);
    
    return NextResponse.json({ certificates });
  } catch (error) {
    console.error("Error reading certificates:", error);
    return NextResponse.json({ certificates: [] });
  }
}
