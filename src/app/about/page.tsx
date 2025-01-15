import React from "react";
import { Typography, Box, Divider, Link } from "@mui/material";
import { GitHub, LinkedIn, Language } from "@mui/icons-material";

// Reusable Typography Section Component
const Section = ({ title, children }) => (
  <>
    <Typography
      variant="h5"
      sx={{ marginBottom: 1, color: "text.primary", textAlign: "center" }}
    >
      {title}
    </Typography>
    {children}
    <Divider sx={{ margin: "10px 0" }} />
  </>
);

// Reusable Skill/Achievement Component
const ListItemTextContent = ({ content }) => (
  <Typography
    variant="body1"
    sx={{ color: "text.primary", textAlign: "center" }}
  >
    {content}
  </Typography>
);

const AboutPage = () => {
  const skills = [
    "Frontend Development: React.js, Vue.js, and modern UI libraries like Material-UI, Element Plus and Tailwind CSS.",
    "State Management: Redux, RTK and Context API using composables for efficient app state handling.",
    "Data Management: Expertise in integrating APIs using Axios, fetching, transforming (using transformer functions), and rendering complex datasets.",
    "Performance Optimization: Minimizing loops, optimizing algorithms, and reducing time complexity in applications.",
    "Backend Development: Node.js, Express.js, and REST/GraphQL API design.",
  ];

  const achievements = [
    "Designed and implemented a multi-module production planning system with dynamic state management.",
    "Developed advanced filtering and search features with optimized performance for large datasets.",
  ];

  const links = [
    {
      href: "https://github.com/Saurabh-Galgale",
      icon: <GitHub sx={{ fontSize: "40px", color: "text.primary" }} />,
    },
    {
      href: "https://www.linkedin.com/in/saurabh-galgale/",
      icon: <LinkedIn sx={{ fontSize: "40px", color: "text.primary" }} />,
    },
    {
      href: "https://saurabhgalgale.vercel.app/",
      icon: <Language sx={{ fontSize: "40px", color: "text.primary" }} />,
    },
  ];

  return (
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
          variant="h4"
          sx={{
            marginBottom: 2,
            color: "text.primary",
            textAlign: "center",
          }}
        >
          Hi, I'm SAURABH GALGALE.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "16px",
            color: "text.primary",
            textAlign: "center",
          }}
        >
          I am a software engineer with over 3.5 years of experience in building
          robust, scalable, and intuitive web applications. My expertise lies in
          modern web technologies, crafting seamless user experiences, and
          delivering high-quality solutions that align with client needs.
        </Typography>
        <Divider sx={{ margin: "10px 0" }} />
        <Section title="Core Skills">
          {skills.map((skill, index) => (
            <ListItemTextContent key={index} content={skill} />
          ))}
        </Section>
        <Section title="Notable Achievements">
          {achievements.map((achievement, index) => (
            <ListItemTextContent key={index} content={achievement} />
          ))}
        </Section>
        <Typography
          variant="body1"
          sx={{
            marginTop: "16px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          My commitment to coding excellence is backed by my focus on continuous
          learning and adopting best practices in software development.
        </Typography>
        <Divider sx={{ margin: "10px 0" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {links.map((link, index) => (
            <Link key={index} href={link.href} target="_blank" color="inherit">
              {link.icon}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
