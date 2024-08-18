import { PrismaClient } from '@prisma/client';
import { courses } from './initialData/data';

const prisma = new PrismaClient();

const main = async () => {
  for (const course of courses) {
    // Usunięcie zagnieżdżonych obiektów, aby upsert działał poprawnie
    const { videos, Offer, ...courseData } = course;

    // Upsert dla kursu
    await prisma.course.upsert({
      where: { id: course.id },
      update: courseData,
      create: courseData,
    });

    // Upsert dla wideo
    for (const video of videos.create) {
      await prisma.video.upsert({
        where: { id: video.id },
        update: video,
        create: video,
      });
    }

    // Upsert dla oferty
    if (Offer) {
      await prisma.offer.upsert({
        where: { id: Offer.create.id },
        update: Offer.create,
        create: Offer.create,
      });
    }
  }
  const payment = await prisma.payment.create({
    data: {
      userId: 23,
      amount: 9999,
      currency: 'PLN',
      phone: '123123123',
      email: 'emilszymczyk99@gmail.com',
      street: 'street',
      firstName: 'Emil',
      lastName: 'Szymczyk',
      houseNumber: '11',
      postalCode: '10-100',
      city: 'miasto',
      paymentStatus: 'SUCCESS',
      courses: {
        create: [
          {
            courseId: 1,
            courseName: 'Course One',
          },
        ],
      },
    },
  });
};

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function clearDatabase() {
//   // Usunięcie rekordów w odpowiedniej kolejności, aby uniknąć problemów z kluczami obcymi

//   await prisma.user.deleteMany();

//   console.log('All records have been deleted');
// }

// clearDatabase()
//   .catch(e => {
//     console.error(e);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
