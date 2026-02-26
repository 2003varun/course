import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import bBoy from "../assets/python.jpg";
import b1Boy from "../assets/fullstack.jpg";
import b2 from "../assets/dsa.jpeg";
import front from "../assets/front.jpg";
import ml from "../assets/ml.jpg";
import cloud from "../assets/cloud.jpg";
import python from "../assets/python.jpg";
import web from "../assets/web.jpeg";
import images from "../assets/images.jpeg";
import f from "../assets/f.jpg";
function Courses() {

  // 🔹 FIXED UNIQUE IDS
  const courses = [
    {
      id: 1,
      title: "UI/UX Design Basics",
      description: "Design beautiful interfaces and delightful user experiences.",
      price: "$129",
      image: front,
    },
    {
      id: 4,
      title: "Full-Stack Web Development",
      description: "Build complete web apps using React, Node & databases.",
      price: "$129",
      image: b1Boy,
    },
    {
      id: 5,
      title: "Machine Learning Essentials",
      description: "Intro to ML concepts, models and practical exercises.",
      price: "$149",
      image: ml,
    },
	    {
      id: 1,
      title: "UI/UX Design Basics",
      description: "Design beautiful interfaces and delightful user experiences.",
      price: "$129",
      image: f,
    },
    
	    {
      id: 6,
      title: "Python for everybody",
      description: "Learn cloud basics, deployment patterns and CI/CD.",
      price: "$119",
      image: python,
    },
  ];

  // 🔐 ENROLL FUNCTION
  const handleEnroll = async (courseId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to enroll");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ course_id: courseId }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Enrollment failed");
        alert(JSON.stringify(data));
        return;
      }

      alert(data.message); // Enrolled successfully
    } catch (error) {
      console.error(error);
      alert("Backend not reachable");
    }
  };

  return (
       <Box
      sx={{
        p: { xs: 2, md: 4 },
        // width: "100vw",
        minHeight: "100vh",
        backgroundColor:"#b6c99c",// the color of the background of the courses pageof course page 
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "600",
          fontFamily: "'Times New Roman', times, serif",
          
        }}
      >
        Courses focused on building strong foundational skills for career growth
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {courses.map((course) => (
          <Grid
            item
            key={course.id}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                minHeight: 360,
                backgroundColor: "#cfe1bb",
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{ objectFit: "cover", height: 200 }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">
                  {course.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {course.description}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{ fontWeight: 700 }}
                >
                  {course.price}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                <Button
                  size="small"
                  variant="contained"
                  color="warning"
                  onClick={() => handleEnroll(course.id)}
                >
                  Enroll
                </Button>

                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Courses;
