import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { getUserCourses } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';

export async function GET(
  req: Request,
  { params }: { params: { courseId: string; imageName: string } }
) {
  const { courseId, imageName } = params;
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Sprawdzenie, czy użytkownik ma dostęp do kursu
    const { data: user } = await getUserCourses(userId);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAccessToCourse = user.courses.some(
      course => course.id === parseInt(courseId)
    );

    if (!hasAccessToCourse) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Budowanie ścieżki do pliku obrazu BEZ encodeURI
    const courseFolderPath = path.join(
      process.cwd(),
      'public/assets/coursesAssets',
      courseId
    );
    const filePath = path.join(courseFolderPath, imageName);
    console.log('Katalog roboczy na produkcji:', process.cwd());
    console.log('Ścieżka do obrazu:', filePath);
    // Wyświetlanie ścieżki dla debugowania
    console.log('Sprawdzam ścieżkę:', filePath);

    // Sprawdzenie, czy folder dla kursu istnieje, jeśli nie - utworzenie go
    if (!fs.existsSync(courseFolderPath)) {
      fs.mkdirSync(courseFolderPath, { recursive: true });
    }

    // Sprawdzenie, czy plik istnieje
    const fileExists = fs.existsSync(filePath);
    console.log('Czy istnieje?', fileExists);

    if (!fileExists) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Odczyt pliku
    const file = fs.readFileSync(filePath);
    const extension = path.extname(filePath).toLowerCase();

    // Ustawienie odpowiedniego typu MIME na podstawie rozszerzenia
    const mimeType =
      {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
      }[extension] || 'application/octet-stream';

    // Zwracanie pliku obrazu z nagłówkami dla obrazu
    return new NextResponse(file, {
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': 'inline', // renderuj jako obraz
        'Cache-Control': 'public, max-age=31536000, immutable', // cache na rok
      },
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'Error reading file' }, { status: 500 });
  }
}