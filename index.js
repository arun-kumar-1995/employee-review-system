import express from "express";
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

const app = express();
// use express router
import appRoute from "./routes/app.routes.js";
app.use("/", appRoute);

const server = app.listen(PORT || 4000, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${PORT}`);
});
