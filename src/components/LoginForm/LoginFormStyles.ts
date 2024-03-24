import { Button, Grid, TextField, styled } from "@mui/material";

// Styled components
export const LoginButton = styled(Button)({
  background: "#46BA7C",
  marginTop: "20px",
  padding: "20px",
  borderRadius: "20px",
});

export const GridContainer = styled(Grid)({
  display: "flex",
  marginBottom: "10vh",
  justifyContent: "center",
  alignItems: "center",
});

export const FormContainer = styled(Grid)({
  border: "1.5px solid #f2d707",
  borderRadius: "20px",
});

export const Field = styled(TextField)({
  marginBottom: "30px",
});
