const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const { workerRouter } = require("./src/worker/worker.route");

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());
// routes
app.use("/api/v1/worker", workerRouter);

// database
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
   app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
     console.log("Connected to the database and server is running");
   });
  } catch (err) {
    console.log(err);
  }
}
main();
