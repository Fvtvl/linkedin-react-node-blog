import { MongoClient } from 'mongodb';

let db;

async function connectToDb(callback) {
  const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.guujc5p.mongodb.net/?retryWrites=true&w=majority`
  );

  await client.connect();

  db = client.db('react-blog-db');
  callback();
}

export { db, connectToDb };
