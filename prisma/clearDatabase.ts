import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearDatabase() {
  // Usunięcie rekordów w odpowiedniej kolejności, aby uniknąć problemów z kluczami obcymi
  await prisma.payment.deleteMany();
  await prisma.orderCourse.deleteMany();
  await prisma.video.deleteMany();
  await prisma.offer.deleteMany();
  await prisma.course.deleteMany();
  await prisma.user.deleteMany();

  console.log('All records have been deleted');
}

clearDatabase()
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
