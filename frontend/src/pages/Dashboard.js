import React from "react";

const Dashboard = () => {

  return (

    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-5xl font-bold text-blue-700 mb-10">

        Student Dashboard

      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-blue-600">

            Total Courses

          </h2>

          <p className="text-4xl font-bold mt-4">

            3

          </p>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-green-600">

            Enrollments

          </h2>

          <p className="text-4xl font-bold mt-4">

            2

          </p>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-purple-600">

            Progress

          </h2>

          <p className="text-4xl font-bold mt-4">

            50%

          </p>

        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">

          <h2 className="text-2xl font-bold text-red-600">

            Recommendations

          </h2>

          <p className="text-4xl font-bold mt-4">

            5

          </p>

        </div>

      </div>

      <div className="mt-12 bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold text-blue-700 mb-5">

          Welcome Back 👋

          <div className="mt-12">

  <h2 className="text-3xl font-bold text-blue-700 mb-8">

    Recommended Courses

  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="course"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold mb-2">

          React Mastery

        </h3>

        <p className="text-gray-600 mb-3">

          Learn React from beginner to advanced.

        </p>

        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">

          Explore

        </button>

      </div>

    </div>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
        alt="course"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold mb-2">

          Node.js Bootcamp

        </h3>

        <p className="text-gray-600 mb-3">

          Build powerful backend applications.

        </p>

        <button className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">

          Explore

        </button>

      </div>

    </div>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">

      <img
        src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
        alt="course"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold mb-2">

          Machine Learning

        </h3>

        <p className="text-gray-600 mb-3">

          Master AI and ML concepts with projects.

        </p>

        <button className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700">

          Explore

        </button>

      </div>

    </div>

  </div>

</div>

        </h2>

        <p className="text-gray-600 text-lg">

          Continue your learning journey and improve your skills with LearnHub.

        </p>

      </div>

    </div>

  );

};

export default Dashboard;