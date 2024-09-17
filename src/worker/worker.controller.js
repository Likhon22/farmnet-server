const { workerServices } = require("./worker.service");

const createWorker = async (req, res) => {
  try {
    const worker = req.body;

    const result = await workerServices.createWorkerIntoDB(worker);
    res.status(200).json({
      success: true,
      message: "Worker created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};
const getWorker = async (req, res) => {
  try {
    const result = await workerServices.getWorkerFromDB();
    res.status(200).json({
      success: true,
      message: "All workers retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

// get single worker

const getSingleWorker = async (req, res) => {
  try {
    const result = await workerServices.getSingleWorkerFromDB(
      req.params.workerId
    );
    // if (!result) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Worker not found",
    //   });
    // }
    res.status(200).json({
      success: true,
      message: "Worker retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err,
    });
  }
};

const workerController = {
  createWorker,
  getWorker,
  getSingleWorker,
};
module.exports = {
  workerController,
};
