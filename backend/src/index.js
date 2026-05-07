require("dotenv").config();

const app = require("../src/app.js");

const connectDB = require("../src/config/db.js");

let isConnected = false;

module.exports = async (req, res) => {
  try {
    if (!isConnected) {
      await connectDB();

      isConnected = true;
    }

    return app(req, res);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};
