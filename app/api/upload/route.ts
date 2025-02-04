import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: NextRequest) {
  try {
    // Odczytaj dane z FormData
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Odczytujemy zawartość pliku do Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name);
    const newFilename = `${Date.now()}${ext}`;
    const filePath = path.join(process.cwd(), "public/images/blog", newFilename);

    // Zapisujemy plik
    fs.writeFileSync(filePath, new Uint8Array(buffer));

    return NextResponse.json({ filename: newFilename }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
