import Express from "express";
import cors from "cors";
import Connection from "./database/db.js";
import route from "./routes/route.js";
import bodyParser from "body-parser";

const app = Express();
Connection();
const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT} `);
});
