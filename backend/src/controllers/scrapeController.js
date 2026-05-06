const scrapeStories = require("../services/scraperService");

const scrapeNow = async (req, res) => {
  try {
    await scrapeStories();

    res.json({
      message: "Scraping completed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  scrapeNow,
};
