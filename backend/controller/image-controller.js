import grid from "gridfs-stream";
import { GridFSBucket } from "mongodb";
import mongoose from "mongoose";
const url = "http://localhost:8000";
const conn = mongoose.connection;
let gfs, gridFSBucket;
conn.once("open", () => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});
export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(404).json("File not found");
  }

  const imageUrl = `${url}/file/${req.file.filename}`;
  return res.status(200).json(imageUrl);
};

export const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFSBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
