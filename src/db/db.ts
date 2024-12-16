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

// import 'dotenv/config';
// import { PrismaClient } from '@prisma/client';
// import { PrismaNeon } from '@prisma/adapter-neon';
// import { Pool, neonConfig } from '@neondatabase/serverless';
// import ws from 'ws';
// neonConfig.webSocketConstructor = ws;
// // To work in edge environments (Cloudflare Workers, Vercel Edge, etc.), enable querying over fetch
// // neonConfig.poolQueryViaFetch = true
// // Type definitions
// // declare global {
// //   var prisma: PrismaClient | undefined
// // }
// const connectionString = `${process.env.DATABASE_URL}`;
// const pool = new Pool({ connectionString });
// const adapter = new PrismaNeon(pool);
// const db = global.prisma || new PrismaClient({ adapter });
// if (process.env.NODE_ENV === 'development') global.prisma = db;
// export default db;

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