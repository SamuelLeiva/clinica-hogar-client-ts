import { Button, TextField, Container, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../../assets/clinica-logo.png";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    //llamar a la api
    navigate("/dashboard");
  };

  return (
    <>
      <Container maxWidth="xs">
        <h1>Bienvenido a</h1>

        <Box mb={3}>
          <img src={logo} alt="Logo de la clínica" />
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={2}>
            <TextField
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
              })}
              variant="outlined"
              label="email"
              fullWidth
              autoComplete="email"
              autoFocus
            />
            {errors.email && (
              <Alert severity="error">Ingrese un email válido</Alert>
            )}
          </Box>
          <Box mb={2}>
            <TextField
              {...register("password", { required: true })}
              variant="outlined"
              label="contraseña"
              fullWidth
              type="password"
            />
            {errors.password && (
              <Alert severity="error">Este campo no puede estar vacío</Alert>
            )}
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>
        </form>
      </Container>
    </>
  );
};

export default LoginPage;
