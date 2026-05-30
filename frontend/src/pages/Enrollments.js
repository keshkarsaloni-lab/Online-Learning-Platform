import React, { useEffect, useState } from "react";

import axios from "axios";

const Enrollments = () => {

  const [progressData, setProgressData] = useState([]);

  useEffect(() => {

    fetchProgress();

  }, []);

  const fetchProgress = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(

        "http://localhost:5000/api/progress/my-progress",

        {
          headers: {
            authorization: token,
          },
        }

      );

      console.log(res.data);

      setProgressData(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">

        My Enrollments

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {progressData.map((item) => (

          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg p-5"
          >

            <h2 className="text-2xl font-bold mb-3">

              {item.course.title}

            </h2>

            <p className="mb-3">

              Progress:
              {" "}
              {item.progressPercentage}%

            </p>

            <div className="w-full bg-gray-300 rounded-full h-5">

              <div
                className="bg-green-600 h-5 rounded-full"
                style={{
                  width:
                    `${item.progressPercentage}%`,
                }}
              >

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default Enrollments;