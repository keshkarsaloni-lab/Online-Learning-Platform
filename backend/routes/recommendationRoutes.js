const express = require("express");

const router = express.Router();

const {
  getRecommendedCourses,
} = require("../controllers/recommendationController");

router.get(
  "/",
  getRecommendedCourses
);

module.exports = router;