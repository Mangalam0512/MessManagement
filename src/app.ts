// import modules
import express from "express";
import dotenv from "dotenv";
import homeRouter from "./routes/home";
import userRouter from "./routes/user";

// read
dotenv.config();
const port: number = Number(process.env.PORT);

// initialize express app
const app: express.Application = express();

// add middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/home", homeRouter);
app.use("/user", userRouter);

// use listen function to start the server
app.listen(port, () => {
    console.log("server started on port 5000");
});

// js -> callbacks, promises, modules, shorthand functions, slice, splice, map, find, filter
// app -> initialize, use(<>), listen()
// get, post, delete, put, patch