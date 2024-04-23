import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const ServerStart = () => {
  app.listen(PORT, () => {
    console.log("Server is running on 5000 port");
  });
};

ServerStart();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
