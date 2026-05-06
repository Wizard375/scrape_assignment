const express = require("express");

const {
  getStories,
  getSingleStory,
  toggleBookmark,
  getBookmarks,
} = require("../controllers/storyController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getStories);

router.get("/bookmarks/me", protect, getBookmarks);

router.get("/:id", getSingleStory);

router.post("/:id/bookmark", protect, toggleBookmark);

module.exports = router;
