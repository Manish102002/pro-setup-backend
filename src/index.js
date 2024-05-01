import dotenv from "dotenv";
import connectDB from "./db/index.js";
import mongoose from "mongoose";
import express from "express";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Sever is running at port : ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("error DB connection!! ", err);
  });
