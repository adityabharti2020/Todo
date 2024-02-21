import { PrismaClient } from "@prisma/client";

const globelForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globelForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });
if (process.env.NODE_ENV != "production") globelForPrisma.prisma = prisma;
