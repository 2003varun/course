import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";

import member1 from "../assets/team1.jpg";
import member2 from "../assets/team2.jpg";
import member3 from "../assets/team3.jpg";
import background from "../assets/background.jpg";

const team = [
  {
    name: "Varun Kumar",
    role: "General Manager",
    desc: "Experienced engineer professional focused on team performance.",
    image: member1,
    bg: "#f3dede",
  },
  {
    name: "Miss Sridevi",
    role: "Junior Manager",
    desc: "A blend of leadership, operational, and interpersonal skills.",
    image: member2,
    bg: "#e6e9f2",
  },
  {
    name: "Mr Shashank",
    role: "Team Lead",
    desc: "Providing constructive feedback and mentoring employees.",
    image: member3,
    bg: "#e9f2ef",
  },
];

function About() {
  return (
    <Box
      sx={{
        backgroundImage: `url(/{background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: 8,
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(214, 198, 194, 0.88)",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          {/* Title */}
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            About Us
          </Typography>

          <Typography
            align="center"
            sx={{ color: "text.secondary", mb: 6 }}
          >
            We build careers by empowering people with digital skills
          </Typography>

          {/* Right side stats text */}
          <Typography
            align="right"
            sx={{ color: "text.secondary", mb: 4 }}
          >
            We Transform Lives by Empowering People Via Digital Skills.
            <br />
            <strong>8M+</strong> Careers Advanced
            <br />
            <strong>1,500+</strong> Live classes per month
            <br />
            <strong>400+</strong> Courses
          </Typography>

          {/* Team cards */}
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: member.bg,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: 3,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  {/* Text */}
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                      {member.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", mb: 1 }}
                    >
                      {member.role}
                    </Typography>

                    <Typography variant="body2">
                      {member.desc}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
