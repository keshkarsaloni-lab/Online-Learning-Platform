import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Enrollments from "./pages/Enrollments";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <div className="flex flex-col min-h-screen">

        <Navbar />

        <div className="flex-grow">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/courses" element={<Courses />} />

            <Route
              path="/course-details/:id"
              element={<CourseDetails />}
            />

            <Route path="/enrollments" element={<Enrollments />} />

            <Route path="/profile" element={<Profile />} />

          </Routes>

        </div>

        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;