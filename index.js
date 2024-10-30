import express from "express";
import mongoose from "mongoose";

// create an express app
const app = express();

// connect to database
await mongoose.connect(process.env.MONGO_URI);


// use middlewares
app.use(express.json());

// listen to incoming request

app.listen(3005, () => {
    console.log("App is listening on port 3005")
});