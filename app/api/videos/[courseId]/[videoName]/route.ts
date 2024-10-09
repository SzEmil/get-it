// import { NextResponse } from 'next/server';
// import { getUserCourses } from '@/lib/actions/user.actions'; // Pobieranie kursów użytkownika
// import { auth } from '@clerk/nextjs/server'; // Autoryzacja za pomocą Clerk

// export async function GET(
//   req: Request,
//   { params }: { params: { courseId: string; videoName: string } } // Zmieniamy 'videoName' na 'videoId'
// ) {
//   const { courseId, videoName } = params;
//   const { userId } = auth();

//   if (!userId) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   try {
//     // Sprawdzamy, czy użytkownik ma dostęp do kursu
//     const { data: user } = await getUserCourses(userId);

//     if (!user) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     const hasAccessToCourse = user.courses.some(
//       (course: any) => course.id === parseInt(courseId)
//     );

//     if (!hasAccessToCourse) {
//       return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//     }

//     // Tworzymy link do wideo na Google Drive (po odpowiedniej modyfikacji linku)
//     const googleDriveVideoUrl = `https://drive.google.com/file/d/${videoName}/preview`;

//     // Zwracamy link URL do wideo z Google Drive
//     return NextResponse.json({ videoUrl: googleDriveVideoUrl });
//   } catch (error) {
//     console.error('Error fetching video:', error);
//     return NextResponse.json({ error: 'Error fetching video' }, { status: 500 });
//   }
// }


import path from 'path';
import fs from 'fs';
import { getUserCourses } from '@/lib/actions/user.actions'; // Fetch user courses from your database
import { auth } from '@clerk/nextjs/server'; // Clerk for authentication
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { courseId: string; videoName: string } }
) {
  const { courseId, videoName } = params;
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Check if the user has access to the course
    const { data: user } = await getUserCourses(userId);

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hasAccessToCourse = user.courses.some(
      (course: any) => course.id === parseInt(courseId)
    );

    if (!hasAccessToCourse) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Ścieżka do pliku wideo w folderze public (lub innym katalogu z wideo)
    const videoPath = path.join(
      process.cwd(),
      'public',
      'videos',
      courseId,
      videoName
    );

    // Sprawdzamy, czy plik istnieje
    if (!fs.existsSync(videoPath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Odczyt pliku binarnego
    const videoFile = fs.readFileSync(videoPath);

    // Ustawienie odpowiedniego typu MIME na wideo
    const mimeType = 'video/mp4'; // Zakładam, że są to pliki MP4

    return new NextResponse(videoFile, {
      headers: {
        'Content-Type': mimeType,
        'Content-Disposition': 'inline', // Odtwarzaj wideo w przeglądarce
        'Cache-Control': 'public, max-age=31536000, immutable', // Caching na rok
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Error fetching video:', error);
    return NextResponse.json(
      { error: 'Error fetching video' },
      { status: 500 }
    );
  }
}