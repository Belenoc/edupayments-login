import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Field,
  FormContainer,
  GridContainer,
  LoginButton,
} from "./LoginFormStyles";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const formFields = [
    {
      id: "user-label",
      label: "Usuario",
      autoComplete: "username",
      adornment: <AccountCircle />,
    },
    {
      id: "password-label",
      label: "Contraseña",
      type: showPassword ? "text" : "password",
      autoComplete: "current-password",
      adornment: (
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      ),
    },
  ];

  return (
    <GridContainer
      theme={theme}
      container
      direction="row"
      style={{
        padding: isMobile ? "0 50px" : "0 150px",
        marginTop: isMobile ? "20vh" : "30vh",
      }}
    >
      <Grid item xs={12} md={6} lg={6} padding="25px">
        <Typography variant="h3" gutterBottom fontWeight="bold">
          ¿Todavía no usas las soluciones de Edupayments?
        </Typography>
        <Typography>
          Te invitamos a que hagas parte de nuestra empresa y puedas tener un
          control más efectivo, rápido y eficaz de las finanzas de tu agencia
          sin cobros excesivos.
        </Typography>
      </Grid>
      <FormContainer item xs={12} md={6} lg={6}>
        <form>
          <Box padding="60px">
            {formFields.map((field) => (
              <Field
                key={field.id}
                fullWidth
                id={field.id}
                label={field.label}
                type={field.type}
                autoComplete={field.autoComplete}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {field.adornment}
                    </InputAdornment>
                  ),
                }}
              />
            ))}
            <LoginButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              LOGIN
            </LoginButton>
          </Box>
        </form>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="30px 20px 10px 20px"
        >
          <Link href="/register">Regístrate aquí</Link>
          <Link href="/recover">¿Olvidaste tu contraseña?</Link>
        </Box>
      </FormContainer>
    </GridContainer>
  );
};

export default LoginForm;
