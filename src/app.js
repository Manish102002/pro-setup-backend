import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParse from "cookie-parse";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_CORS,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParse());

app.use;

export { app };
