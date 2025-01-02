import { Typography, Box } from "@mui/material";
import MultiStepForm from "./components/MultiStepForm";

export default function EmployeeFormPage() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "full",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box
        sx={{
          width: "85%",
          maxWidth: "85%",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "secondary.main",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Add new user in the System
        </Typography>
        <MultiStepForm />
      </Box>
    </Box>
  );
}
