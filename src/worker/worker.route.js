const { Router } = require("express");
const { workerController } = require("./worker.controller");

const workerRouter = Router();

// create worker
workerRouter.post("/create-worker", workerController.createWorker);
// get workers
workerRouter.get("/", workerController.getWorker);
// get single worker
workerRouter.get("/:workerId", workerController.getSingleWorker);
module.exports = {
  workerRouter,
};
