import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //   for (const method of deliveryMethods) {
  //     await prisma.deliveryMethod.upsert({
  //       where: { baselinkerId: method.baselinkerId },
  //       update: method,
  //       create: method,
  //     });
  //   }
};

main()
  .then(() => prisma.$disconnect())
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
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
