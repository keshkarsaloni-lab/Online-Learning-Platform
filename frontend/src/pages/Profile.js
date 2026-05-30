import React, { useEffect, useState } from "react";

import axios from "axios";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const token = localStorage.getItem("token");

      console.log(token);

      const res = await axios.get(
        "http://localhost:5000/api/auth/profile",
        {
          headers: {
            authorization: token,
          },
        }
      );

      setUser(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  if (!user) {

    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );

  }

  return (

    <div className="flex justify-center items-center h-[80vh]">

      <div className="bg-white shadow-lg rounded-lg p-10 w-[400px]">

        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          My Profile
        </h1>

        <div className="space-y-4">

          <p className="text-xl">
            <span className="font-bold">
              Name:
            </span>{" "}
            {user.name}
          </p>

          <p className="text-xl">
            <span className="font-bold">
              Email:
            </span>{" "}
            {user.email}
          </p>

        </div>

      </div>

    </div>

  );

};

export default Profile;