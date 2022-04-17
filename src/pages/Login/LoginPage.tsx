import { Button, TextField, Container, Box, Alert } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../../assets/clinica-logo.png";
import axios from "../../api/axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAuth } from "../../hooks/useAuth";

const LOGIN_URL = "/auth/login";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  // const { authState } = useContext(AuthContext);
  // const { email, accessToken } = authState;
  // const { login } = useContext(AuthContext);

  const { email, accessToken, login } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: any) => {
    console.log(data);
    const { email: userEmail, password } = data;
    //llamar a la api
    try {
      const response = await axios.post(LOGIN_URL, {
        userEmail,
        password,
      });

      console.log("response", response);

      if (response) {
        //extraemos el token
        const token = response?.data?.token;

        //cambiamos el state
        login(userEmail, token);

        console.log(email, " ", accessToken);
      }

      navigate("/dashboard");

      //console.log(JSON.stringify(response?.data));
    } catch (error) {
      console.log(error);
    }

    //navigate("/dashboard");
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
