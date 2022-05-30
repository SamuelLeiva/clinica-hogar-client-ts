import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/Auth/useAuth";
import {
  loginService,
  registerService,
} from "../../services/auth/authServices";

type FormData = {
  email: string;
  password: string;
  password2: string;
  firstName: string;
  lastNameF: string;
  lastNameM: string;
  document: string;
  documentType: string;
  birthday: Date;
  sex: string;
  phoneNumber: string;
};

const RegisterPage = () => {
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

  //---------------------------------------------------------------------
  const onSubmit = async (data: any) => {
    const {
      email,
      password,
      password2,
      firstName,
      lastNameF,
      lastNameM,
      document,
      documentType,
      birthday,
      sex,
      phoneNumber,
    } = data;

    if (password !== password2) {
      setErrMessage("Las contraseñas no coinciden.");
      setOpen(true);
      return console.log("Las contraseñas no coinciden.");
    }
    try {
      const response = await registerService(
        email,
        password,
        firstName,
        lastNameF,
        lastNameM,
        document,
        documentType,
        birthday,
        sex,
        phoneNumber
      );

      console.log("response", response);

      if (response.status === 201) {
        const responseLogin = await loginService(email, password);

        if (responseLogin) {
          const token = responseLogin?.data?.accessToken;

          //cambiamos el state
          login(email, token);

          navigate("/dashboard/services");
        }
      }
    } catch (error) {
      setErrMessage("Ocurrio un error");
      setOpen(true);
    }
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Typography variant="h4">Registro</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container>
            <Grid item xs={12} width="45%">
              <Box mt={3} mb={1} mx={1}>
                <TextField
                  {...register("firstName", {
                    required: true,
                  })}
                  variant="outlined"
                  label="nombres"
                  fullWidth
                  autoComplete="nombres"
                  autoFocus
                />
                {errors.firstName && (
                  <Alert severity="error">
                    Este campo no puede estar vacío
                  </Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("lastNameF", {
                    required: true,
                  })}
                  variant="outlined"
                  label="apellido paterno"
                  fullWidth
                  autoComplete="apellido paterno"
                />
                {errors.lastNameF && (
                  <Alert severity="error">
                    Este campo no puede estar vacío
                  </Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("lastNameM", {
                    required: true,
                  })}
                  variant="outlined"
                  label="apellido materno"
                  fullWidth
                  autoComplete="apellido materno"
                />
                {errors.lastNameM && (
                  <Alert severity="error">
                    Este campo no puede estar vacío
                  </Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <FormControl fullWidth>
                  <InputLabel id="docType-select-label">
                    Tipo Documento
                  </InputLabel>
                  <Select
                    {...register("documentType", {
                      required: true,
                    })}
                    labelId="docType-select-label"
                    id="docType-select"
                    label="Tipo Documento"
                    fullWidth
                  >
                    <MenuItem value={"DNI"}>DNI</MenuItem>
                    <MenuItem value={"PASAPORTE"}>PASAPORTE</MenuItem>
                    <MenuItem value={"CARNET EXTRANJERIA"}>
                      CARNET EXTRANJERIA
                    </MenuItem>
                    <MenuItem value={"RUC"}>RUC</MenuItem>
                  </Select>
                  {errors.sex && (
                    <Alert severity="error">Seleccione un valor</Alert>
                  )}
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("document", {
                    required: true,
                    validate: {
                      correctFormat: (v) =>
                        v.length === 8 || v.length === 11 || v.length === 12,
                    },
                  })}
                  variant="outlined"
                  label="documento de identidad"
                  fullWidth
                />
                {errors.document && (
                  <Alert severity="error">Ingrese un documento válido</Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("birthday", {
                    required: true,
                  })}
                  type="date"
                  variant="outlined"
                  fullWidth
                  autoComplete="fecha de nacimiento"
                />
                {errors.birthday && (
                  <Alert severity="error">Ingrese su fecha de nacimiento</Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <FormControl fullWidth>
                  <InputLabel id="sex-select-label">Sexo</InputLabel>
                  <Select
                    {...register("sex", {
                      required: true,
                    })}
                    labelId="sex-select-label"
                    id="sex-select"
                    label="Sexo"
                    fullWidth
                  >
                    <MenuItem value={"F"}>Femenino</MenuItem>
                    <MenuItem value={"M"}>Masculino</MenuItem>
                  </Select>
                  {errors.sex && (
                    <Alert severity="error">Seleccione un valor</Alert>
                  )}
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /^\d{7}(?:\d{2})?$/i,
                  })}
                  variant="outlined"
                  label="telefono"
                  fullWidth
                  autoComplete="telefono"
                />
                {errors.phoneNumber && (
                  <Alert severity="error">Ingrese un celular válido</Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} mt={3} width="45%">
              <Box mb={1} mx={1}>
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
                />
                {errors.email && (
                  <Alert severity="error">Ingrese un email válido</Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("password", {
                    required: true,
                  })}
                  variant="outlined"
                  label="contraseña"
                  fullWidth
                  autoComplete="contraseña"
                />
                {errors.password && (
                  <Alert severity="error">
                    Este campo no puede estar vacío
                  </Alert>
                )}
              </Box>
            </Grid>
            <Grid item xs={6} width="45%">
              <Box mb={1} mx={1}>
                <TextField
                  {...register("password2", {
                    required: true,
                  })}
                  variant="outlined"
                  label="confirmar contraseña"
                  fullWidth
                  autoComplete="confirmar contraseña"
                />
                {errors.password2 && (
                  <Alert severity="error">
                    Este campo no puede estar vacío
                  </Alert>
                )}
              </Box>
            </Grid>

            <Grid item xs={12} width="45%">
              <Typography sx={{ fontSize: 13 }}>
                ¿Ya está registrado? <Link href="/">Ingrese aquí</Link>
              </Typography>
            </Grid>

            <Button
              sx={{ marginTop: 2 }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
        </form>

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

export default RegisterPage;
