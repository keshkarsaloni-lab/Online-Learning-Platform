const Course = require("../models/Course");

const getRecommendedCourses = async (req, res) => {

  try {

    const courses = await Course.find().limit(3);

    res.status(200).json(courses);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  getRecommendedCourses,
};