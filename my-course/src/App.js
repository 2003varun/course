import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import About from "./pages/About";
import Signup from "./pages/Signup";
function App() {
  const [message, setMessage] = useState("Loading from backend...");
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not connected"));
  }, []);


  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("http://127.0.0.1:5000/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log("Logged in user:", res.data);
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user}/>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Courses user={user} />
              </>
            }
          />
          <Route path="/courses" element={<Courses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />

        {/* Backend status */}
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography variant="body2">{message}</Typography>
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
