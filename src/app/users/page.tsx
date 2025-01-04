import { Typography, Box } from "@mui/material";
import MultiStepForm from "./components/MultiStepForm";

export default function EmployeeFormPage() {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          backgroundColor: "secondary.main",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            Add new user in the System
          </Typography>
          <MultiStepForm />
        </Box>
      </Box>
    </Box>
  );
}
