import { Db, MongoClient } from "mongodb";
import mongoose from "mongoose";

const MONGO_URI: any = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGODB_DB;

let cachedClient: MongoClient;
let cachedDb: Db;

let { mongo }: any = global;
let cached = mongo;

if (!cached) {
  cached = mongo = { conn: null, promise: null };
}

// export async function mongoDBConnection() {
//   // check the cached.
//   if (cachedClient && cachedDb) {
//     // load from cache
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }
//   if (cached.conn) {
//     return cached.conn;
//   }

//   // set the connection options
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // check the MongoDB URI
//   if (!MONGO_URI) {
//     throw new Error("Define the MONGO_URI environmental variable");
//   }
//   // check the MongoDB DB
//   if (!MONGO_DB) {
//     throw new Error("Define the MONGO_DB environmental variable");
//   }

//   // Connect to cluster
//   let client = new MongoClient(MONGO_URI);
//   await client.connect();
//   let db = client.db(MONGO_DB);
//   console.log(` YEA!!! MongoDB ATLAS CONNECTED, ${db} is connected as well`);

//   // set cache
//   cachedClient = client;
//   cachedDb = db;

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   };
// }

// For Mongoose Option
export const mongooseConnection = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MONGOOSE CONNECTION ROUTE IS ON`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
