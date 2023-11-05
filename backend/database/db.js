import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD;

const Connection = async () => {
  try {
    const URL = `mongodb://${userName}:${passWord}@ac-khcfsrr-shard-00-00.j3voajt.mongodb.net:27017,ac-khcfsrr-shard-00-01.j3voajt.mongodb.net:27017,ac-khcfsrr-shard-00-02.j3voajt.mongodb.net:27017/?ssl=true&replicaSet=atlas-hgl6m5-shard-0&authSource=admin&retryWrites=true&w=majority`;
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("MongoDB connected Sucessfully");
  } catch (err) {
    console.log("error while running Db", err);
  }
};

export default Connection;
