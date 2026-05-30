import React, { useEffect, useState } from "react";

import axios from "axios";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

const CourseDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [course, setCourse] = useState(null);

  useEffect(() => {

    fetchCourse();

  }, [id]);

  const fetchCourse = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/api/courses/${id}`
      );

      setCourse(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  const enrollNow = async () => {

    try {

      const token =
        localStorage.getItem("token");

      if (!token) {

        alert("Please login first");

        navigate("/login");

        return;

      }

      const res = await axios.post(

        "http://localhost:5000/api/enrollments",

        {
          courseId: course._id,
        },

        {
          headers: {
            authorization: token,
          },
        }

      );

      alert(res.data.message);

      navigate("/enrollments");

    } catch (error) {

      console.log(error);

      alert("Enrollment Failed");

    }

  };

  const updateProgress = async () => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.post(

        "http://localhost:5000/api/progress/update",

        {
          courseId: course._id,
          completedLessons: 5,
        },

        {
          headers: {
            authorization: token,
          },
        }

      );

      alert("Progress Updated");

    } catch (error) {

      console.log(error);

      alert("Progress Update Failed");

    }

  };

  if (!course) {

    return (
      <h1 className="text-center mt-10 text-3xl font-bold">
        Loading...
      </h1>
    );

  }

  return (

    <div className="p-10 flex justify-center bg-gray-100 min-h-screen">

      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[500px] card-hover">

        <img
          src={
            course.title.includes("Python")
              ? "/images/course2.jpg"
              : course.title.includes("Machine")
              ? "/images/course3.jpg"
              : "/images/course1.jpg"
          }
          alt={course.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">

          <h1 className="text-4xl font-bold mb-4">

            {course.title}

          </h1>

          <p className="text-gray-600 mb-4">

            {course.description}

          </p>

          <p className="font-semibold mb-2">

            Instructor: {course.instructor}

          </p>

          <p className="text-blue-600 font-bold text-2xl mb-5">

            ₹ {course.price}

          </p>

          <button
            onClick={enrollNow}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 mr-3"
          >

            Enroll Now

          </button>

          <button
            onClick={updateProgress}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >

            Update Progress

          </button>

        </div>

      </div>

    </div>

  );

};

export default CourseDetails;