import { NextResponse } from 'next/server';
import { getUserCourses } from '@/lib/actions/user.actions'; // Pobieranie kursów użytkownika
import { auth } from '@clerk/nextjs/server'; // Autoryzacja za pomocą Clerk

export async function GET(
  req: Request,
  { params }: { params: { courseId: string; videoName: string } } // Zmieniamy 'videoName' na 'videoId'
) {
  const { courseId, videoName } = params;
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Sprawdzamy, czy użytkownik ma dostęp do kursu
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

    // Tworzymy link do wideo na Google Drive (po odpowiedniej modyfikacji linku)
    const googleDriveVideoUrl = `https://drive.google.com/file/d/${videoName}/preview`;

    // Zwracamy link URL do wideo z Google Drive
    return NextResponse.json({ videoUrl: googleDriveVideoUrl });
  } catch (error) {
    console.error('Error fetching video:', error);
    return NextResponse.json({ error: 'Error fetching video' }, { status: 500 });
  }
}
