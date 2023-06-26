import { MongoClient } from "mongodb";
import dotenv from "dotenv"; // env파일 사용

dotenv.config();
const url = process.env.MONGODB_URL; // .env파일 mongodb url 내용 가져오기
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
