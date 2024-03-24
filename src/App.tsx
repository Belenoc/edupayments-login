import { CssBaseline } from "@mui/material";
import LoginForm from "./components/LoginForm.tsx/LoginForm";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <LoginForm />
        </ThemeProvider>
      </>
    </>
  );
}

export default App;
