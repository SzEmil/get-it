import { NextResponse } from 'next/server';
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
    // Verify if the user has access to the course
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

    // Serve the image from the public folder using a URL instead of fs
    const imageUrl = `/assets/coursesAssets/${courseId}/${imageName}`;
    
    return NextResponse.redirect(imageUrl); // Proxy the image URL
  } catch (error) {
    console.error('Error serving file:', error);
    return NextResponse.json({ error: 'Error serving file' }, { status: 500 });
  }
}
