import express, { json } from "express";
import { port } from "./config/config.js";
import { config } from "dotenv";
import { connectDb } from "./connectdb/db.js";
import cors from "cors";

let expressApp = express();
config();

expressApp.use(cors());
expressApp.use(json());

connectDb();

expressApp.listen(port, () => {
  console.log(`The port is listening at ${port}`);
});
