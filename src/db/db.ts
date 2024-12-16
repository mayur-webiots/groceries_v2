import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () =>{
    return new PrismaClient()
}

declare global {
    var prisma:undefined | ReturnType<typeof prismaClientSingleton>
}

// const db = globalThis.prisma ?? prismaClientSingleton()

// export default db

// if(process.env.NODE_ENV !== 'production') globalThis.prisma=db
// import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  db = global.prisma;
}

export default db;