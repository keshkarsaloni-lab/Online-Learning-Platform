import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold">

        LearnHub

      </h1>

      <div className="flex gap-5 items-center">

        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        {token ? (

          <>

            <Link to="/dashboard">

              Dashboard

            </Link>

            <Link to="/enrollments">

              Enrollments

            </Link>

            <Link to="/profile">

              Profile

            </Link>

            <button
              onClick={logout}
              className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
            >

              Logout

            </button>

          </>

        ) : (

          <>

            <Link to="/login">

              Login

            </Link>

            <Link to="/register">

              Register

            </Link>

          </>

        )}

      </div>

    </nav>

  );

};

export default Navbar;