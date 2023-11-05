import multer from "multer";

import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
dotenv.config();
const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
  url: `mongodb://${userName}:${passWord}@ac-khcfsrr-shard-00-00.j3voajt.mongodb.net:27017,ac-khcfsrr-shard-00-01.j3voajt.mongodb.net:27017,ac-khcfsrr-shard-00-02.j3voajt.mongodb.net:27017/?ssl=true&replicaSet=atlas-hgl6m5-shard-0&authSource=admin&retryWrites=true&w=majority`,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});

export default multer({ storage });
