import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
// import express from "express";

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONGOOSE_URI}/${DB_NAME}`
    );
    console.log("Manish");
    console.log(
      `\n  MongoDB Connect !! DB Host: ${connectionIntance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default connectDB;

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGOOSE_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT,()=>{
//         console.log(`app lesting ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// })();
