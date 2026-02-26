import { Box, Container, Grid, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#728156",
        color: "#000000ff",
        mt: 0,
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                mb: 1,
              }}
            >
              MyCourses
            </Typography>
            <Typography variant="body2" sx={{ color: "#000000ff" }}>
              Learn. Build. Grow your career with industry-ready courses.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Quick Links
            </Typography>
            <Link href="#" underline="none" color="inherit" display="block">
              Courses
            </Link>
            <Link href="#" underline="none" color="inherit" display="block">
              About
            </Link>
            <Link href="#" underline="none" color="inherit" display="block">
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Legal
            </Typography>
            <Link href="#" underline="none" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="#" underline="none" color="inherit" display="block">
              Terms & Conditions
            </Link>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
            © {new Date().getFullYear()} MyCourses. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
