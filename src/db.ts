import mongoose from "mongoose";
import config from "config";

const dbConfig = async () => {
  const DATABASE_URL = config.get("DATABASE_URL") as string;
  try {
    await mongoose.connect(DATABASE_URL).then(() => {
      console.log(`DB connected to ${DATABASE_URL}`);
    });
  } catch (e) {
    console.error(e);
  }
};

export default dbConfig;