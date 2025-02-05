import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Ścieżka zapisu plików
const uploadDir = path.join(process.cwd(), "public/images/blog");

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = path.extname(file.name);
    const newFilename = `${Date.now()}${ext}`;
    const filePath = path.join(uploadDir, newFilename);

    // Zapisujemy plik
    fs.writeFileSync(filePath, new Uint8Array(buffer));

    return NextResponse.json({ filename: newFilename }, { status: 200 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { filename } = await req.json();

    if (!filename) {
      return NextResponse.json({ error: "No filename provided" }, { status: 400 });
    }

    const filePath = path.join(uploadDir, filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return NextResponse.json({ message: "File deleted" }, { status: 200 });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
