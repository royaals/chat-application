import Express from "express";
import { addUser, getUsers } from "../controller/userController.js";
import {
  newConversation,
  getConversation,
} from "../controller/conversation-controller.js";
import { newMessage, getMessages } from "../controller/message-controller.js";
import { uploadFile ,getImage} from "../controller/image-controller.js";
import upload from "../middleware/upload.js";
const route = Express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);
route.post("/file/upload",upload.single("file"),uploadFile);
route.get('/file/:filename',getImage);

export default route;
