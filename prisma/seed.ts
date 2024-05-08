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
