import {
  Button,
  TextField,
  Container,
  Box,
  Alert,
  Snackbar,
  Link,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import logo from "../../assets/images/clinica-logo.png";

import { useAuth } from "../../hooks/Auth/useAuth";
import { useEffect, useState } from "react";

import { loginService } from "../../services/auth/authServices";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { email, accessToken, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (email && accessToken) navigate("/dashboard/services");
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  //-----------------------logica del snackbar de error---------------
  const [open, setOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //---------------------------------------------------

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    //llamar a la api
    try {
      const response = await loginService(email, password);

      console.log("response", response);

      if (response) {
        //extraemos el token
        const token = response?.data?.accessToken;

        //cambiamos el state del context
        login(email, token);
      }

      navigate("/dashboard");
    } catch (error) {
      if (!error?.response) {
        setErrMessage("El servidor no responde.");
      } else if (
        error.response?.status === 400 ||
        error.response?.status === 401
      ) {
        setErrMessage("Email o contraseña inválidos.");
      } else if (error.response?.status === 500) {
        setErrMessage("Fallo en el servidor.");
      } else {
        setErrMessage("Login fallido.");
      }
      setOpen(true);
      //console.log(error);
    }
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
          <Typography sx={{ fontSize: 13 }}>
            ¿No tiene una cuenta? <Link href="/register">Regístrese aquí</Link>
          </Typography>
          <Button
            sx={{ marginTop: 2 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Ingresar
          </Button>
        </form>
        {/* <Button variant="outlined">Open success snackbar</Button> */}
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            {errMessage}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default LoginPage;
