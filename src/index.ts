import * as dotenv from "dotenv";
import { app } from "./app";

const staticPath: string =
  __dirname.substring(0, __dirname.indexOf("dist")) + "public";

dotenv.config();
app.init(staticPath);
