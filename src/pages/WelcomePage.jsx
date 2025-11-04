import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../api/api";

const WelcomePage = () => {
  const [userName, setUserName] = React.useState("");
  const Navigate = useNavigate();
  // useEffect(async () => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     Navigate("/login");
  //     return;
  //   }
  //   const response = await axios.get(`${API_URL}/c, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   });
  //   if (response.status === 200) {
  //     const userData = response.data;
  //     setUserName(userData.name);
  //   }
  //   console.log(response);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Emotion Tracker
        </h1>
        <p className="text-gray-700 mb-6 text-lg">
          {userName ? `Hello, ${userName}!` : "Hello!"}
        </p>
        <p className="text-gray-600">
          Track your emotions and gain valuable insights into your mood
          patterns.
        </p>
        <button
          className="mt-8 bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
          onClick={() => alert("Navigate to emotion tracking page")}
        >
          Start Tracking
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
