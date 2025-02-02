import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/frontstore';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

declare global {
  // Add a custom global variable to avoid multiple connections
  var mongooseCache: MongooseCache;
}

global.mongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function dbConnect() {
  if (global.mongooseCache.conn) return global.mongooseCache.conn;

  if (!global.mongooseCache.promise) {
    global.mongooseCache.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
  }

  global.mongooseCache.conn = await global.mongooseCache.promise;
  return global.mongooseCache.conn;
}
