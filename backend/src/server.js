require("dotenv").config();

const app = require("./app");

const connectDB = require("./config/db");

const scrapeStories = require("./services/scraperService");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    // await scrapeStories();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
