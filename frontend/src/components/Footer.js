import React from "react";

const Footer = () => {

  return (

    <footer className="bg-black text-white mt-16">

      <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>

          <h1 className="text-3xl font-bold text-blue-500 mb-4">
            LearnHub
          </h1>

          <p className="text-gray-400">
            Learn modern skills online with high quality courses
            and improve your career journey.
          </p>

        </div>

        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">

            <li>Home</li>

            <li>Courses</li>

            <li>Dashboard</li>

            <li>Profile</li>

          </ul>

        </div>

        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <p className="text-gray-400">
            Email: support@learnhub.com
          </p>

          <p className="text-gray-400">
            Phone: +91 9876543210
          </p>

        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-gray-400">

        © 2026 LearnHub. All Rights Reserved.

      </div>

    </footer>

  );

};

export default Footer;