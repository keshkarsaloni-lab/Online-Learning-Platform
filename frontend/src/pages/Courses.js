import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/courses"
      );

      setCourses(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (
      <h1 className="text-center mt-10 text-3xl font-bold">
        Loading Courses...
      </h1>
    );

  }

  return (

    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">

        All Courses

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {courses.map((course) => (

          <div
            key={course._id}
            className="card-hover bg-white shadow-lg rounded-lg overflow-hidden"
          >

            <img
              src={
                course.title.includes("Python")
                  ? "/images/course2.jpg"
                  : course.title.includes("Machine")
                  ? "/images/course3.jpg"
                  : "/images/course1.jpg"
              }
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold mb-2">

                {course.title}

              </h2>

              <p className="text-gray-600 mb-3">

                {course.description}

              </p>

              <p className="font-semibold mb-2">

                Instructor: {course.instructor}

              </p>

              <p className="text-blue-600 font-bold text-xl">

                ₹ {course.price}

              </p>

              <Link to={`/course-details/${course._id}`}>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">

                  View Details

                </button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Courses;