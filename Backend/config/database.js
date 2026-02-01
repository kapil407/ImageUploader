import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();
const database = async () => {
  await mongoose.connect(`${process.env.MONGO_URL}/imageUploader`);
};
export default database;
