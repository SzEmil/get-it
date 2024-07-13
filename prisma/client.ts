import { PrismaClient } from "@prisma/client";
import { fieldEncryptionExtension } from "prisma-field-encryption";

const prismaClientSingleton = () => {
  return new PrismaClient().$extends(
    fieldEncryptionExtension({
      encryptionKey: process.env.PRISMA_FIELD_ENCRYPTION_KEY,
    }),
  );
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

// The Prisma Client is created as a singleton in Next.js dev mode to avoid creating additional instances of the Prisma Client. This is because Next.js dev mode does not cache the instance, and instead creates a new one on each request. This can quickly exhaust database connections, as each Prisma Client instance holds its own connection pool.
