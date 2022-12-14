import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "../Backend/config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("database conected...");
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("server running at port 5000"));
