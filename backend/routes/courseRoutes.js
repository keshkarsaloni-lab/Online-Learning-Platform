const express = require("express");

const router = express.Router();

const {
  createCourse,
  getCourses,
  getSingleCourse,
} = require("../controllers/courseController");

router.post("/", createCourse);

router.get("/", getCourses);

router.get("/:id", getSingleCourse);

module.exports = router;