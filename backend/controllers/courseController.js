const Course = require("../models/Course");

const createCourse = async (req, res) => {

  try {

    const course = await Course.create(req.body);

    res.status(201).json({
      message: "Course Created Successfully",
      course,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const getCourses = async (req, res) => {

  try {

    const courses = await Course.find();

    res.status(200).json(courses);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const getSingleCourse = async (req, res) => {

  try {

    const course = await Course.findById(req.params.id);

    if (!course) {

      return res.status(404).json({
        message: "Course Not Found",
      });

    }

    res.status(200).json(course);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  createCourse,
  getCourses,
  getSingleCourse,
};