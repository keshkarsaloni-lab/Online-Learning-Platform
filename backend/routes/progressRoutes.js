const express = require("express");

const router = express.Router();

const {
  updateProgress,
  getMyProgress,
} = require("../controllers/progressController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/update",
  authMiddleware,
  updateProgress
);

router.get(
  "/my-progress",
  authMiddleware,
  getMyProgress
);

module.exports = router;