import { Box, Typography, Button } from "@mui/material";
import b2 from "../assets/b2.png";

function Banner() {
  return (
    <Box
      sx={{
        height: "60vh",
        backgroundColor: "#88976c",
        // background: "linear-gradient(135deg, #6a11cb, #2575fc)",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0px",
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      {/* Content */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, md: 8 },
        }}
      >
        {/* LEFT TEXT */}
        <Box sx={{ color: "white", maxWidth: "500px" }}>
          <Typography variant="h3" fontWeight="bold">
            Learn Anytime, Anywhere
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>
            Grow your skills with us
          </Typography>

          <Button size="large" variant="contained" color="warning">
            Get Started
          </Button>
        </Box>

        {/* RIGHT IMAGE */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            right: "8%",
            bottom: 0,
            marginBottom: "-20px",
          }}
        >
          <img
            src={b2}
            alt="Hero"
            style={{
              height: "60vh",
              width: "auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
