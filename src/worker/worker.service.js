const { workerModel } = require("./worker.model");

const createWorkerIntoDB = async (workerData) => {
  const result = await workerModel.create(workerData);
  return result;
};
// getting all the workers
const getWorkerFromDB = async () => {
  const workers = await workerModel.find();
  return workers;
};

// get single worker

const getSingleWorkerFromDB = async (id) => {
  const worker = await workerModel.findOne({ _id: id });

  return worker;
};

const workerServices = {
  createWorkerIntoDB,
  getWorkerFromDB,
  getSingleWorkerFromDB,
};
module.exports = {
  workerServices,
};
