import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Link,
} from "@mui/material";
import { GitHub, LinkedIn, Language } from "@mui/icons-material";

const AboutPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "90vh",
          maxHeight: "fit content",
          width: "full",
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            width: "90%",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            backgroundColor: "secondary.main",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginBottom: 1,
              color: "text.primary",
            }}
          >
            Hi, I'm SAURABH GALGALE.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginBottom: "16px", color: "text.primary" }}
          >
            I am a software engineer with over 3.5 years of experience in
            building robust, scalable, and intuitive web applications. My
            expertise lies in modern web technologies, crafting seamless user
            experiences, and delivering high-quality solutions that align with
            client needs.
          </Typography>

          <Typography
            variant="h6"
            sx={{ marginBottom: 1, color: "text.primary" }}
          >
            Core Skills
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Frontend Development: React.js, Vue.js, and modern UI libraries like
            Material-UI, Element Plus and Tailwind css.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            State Management: Redux, RTK and Context API using composables for
            efficient app state handling.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Data Management: Expertise in integrating APIs using Axios,
            fetching, transforming (using transformer functions), and rendering
            complex datasets.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Performance Optimization: Minimizing loops, optimizing algorithms,
            and reducing time complexity in applications.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Backend Development: Node.js, Express.js, and REST/GraphQL API
            design.
          </Typography>

          <Divider sx={{ margin: "10px 0" }} />

          <Typography
            variant="h6"
            sx={{ marginBottom: 1, color: "text.primary" }}
          >
            Notable Achievements
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Designed and implemented a multi-module production planning system
            with dynamic state management.
          </Typography>
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            Developed advanced filtering and search features with optimized
            performance for large datasets.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginTop: "16px", marginBottom: "20px" }}
          >
            My commitment to coding excellence is backed by my focus on
            continuous learning and adopting best practices in software
            development.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Link
              href="https://github.com/Saurabh-Galgale"
              target="_blank"
              color="inherit"
            >
              <GitHub sx={{ fontSize: "40px", color: "text.primary" }} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/saurabh-galgale/"
              target="_blank"
              color="inherit"
            >
              <LinkedIn sx={{ fontSize: "40px", color: "text.primary" }} />
            </Link>
            <Link
              href="https://saurabhgalgale.vercel.app/"
              target="_blank"
              color="inherit"
            >
              <Language sx={{ fontSize: "40px", color: "text.primary" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
