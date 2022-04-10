import express from "express";
import morgan from "morgan";
import path from "path";
const app = express();
//middlerares
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "/public")));

export default app;
