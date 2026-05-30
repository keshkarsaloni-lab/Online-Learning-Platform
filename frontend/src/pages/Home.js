import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="text-center pt-20 px-4">

        <h1 className="text-5xl font-bold text-blue-700 mb-6">
          Online Learning Platform
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          Learn modern skills, enroll in courses,
          and get smart recommendations.
        </p>

        <Link to="/courses">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
            Explore Courses
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Home;