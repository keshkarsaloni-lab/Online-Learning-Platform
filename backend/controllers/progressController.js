const Progress = require("../models/Progress");

const updateProgress = async (req, res) => {

  try {

    const { courseId, completedLessons } = req.body;

    const totalLessons = 10;

    const progressPercentage =
      (completedLessons / totalLessons) * 100;

    let progress = await Progress.findOne({
      user: req.user.id,
      course: courseId,
    });

    if (progress) {

      progress.completedLessons = completedLessons;

      progress.progressPercentage =
        progressPercentage;

      await progress.save();

    } else {

      progress = await Progress.create({

        user: req.user.id,

        course: courseId,

        completedLessons,

        totalLessons,

        progressPercentage,

      });

    }

    res.status(200).json({
      message: "Progress Updated",
      progress,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

const getMyProgress = async (req, res) => {

  try {

    const progress = await Progress.find({
      user: req.user.id,
    }).populate("course");

    res.status(200).json(progress);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  updateProgress,
  getMyProgress,
};