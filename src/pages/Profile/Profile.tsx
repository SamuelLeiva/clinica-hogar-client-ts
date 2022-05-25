import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MY_PROFILE_URL } from "../../constants/server_uris";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "",
    firstName: "",
    lastNameF: "",
    lastNameM: "",
    document: "",
    birthday: "",
    phoneNumber: "",
  });
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProfile = async () => {
      try {
        const response = await axiosPrivate.get(MY_PROFILE_URL, {
          signal: controller.signal,
        });
        //console.log(response.data);
        isMounted &&
          setProfile({
            email: response.data.email,
            firstName: response.data.firstName,
            lastNameF: response.data.lastNameF,
            lastNameM: response.data.lastNameM,
            document: response.data.document,
            birthday: response.data.birthday,
            phoneNumber: response.data.phoneNumber,
          }); //extraer las propiedades de data y ponerlas en profile
      } catch (err) {
        //console.error(err);
        navigate("/");
      }
    };

    getProfile();

    //cleanup function
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      <Typography variant="h2" mt={2}>
        Mi perfil:
      </Typography>
      <Grid container my={5} mx="auto" width="70%">
        <Grid item xs={12} md={6} width="45%">
          <Box p={2} mt={5} mb={1} mx={1}>
            <Paper sx={{ padding: 2 }}>
              <Typography align="left">
                Nombre: <b>{profile.firstName}</b>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} width="45%">
          <Box p={2} mt={5} mb={1} mx={1}>
            <Paper sx={{ padding: 2 }}>
              <Typography align="left">
                Apellidos: <b>{`${profile.lastNameF} ${profile.lastNameM}`}</b>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} width="45%">
          <Box p={2} mb={1} mx={1}>
            <Paper sx={{ padding: 2 }}>
              <Typography align="left">
                Documento: <b>{profile.document}</b>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        {/* <Grid item xs= {12} md={6} width="45%">
          <Box p={2} mb={1} mx={1}>
            <Paper sx={{ padding: 2 }}>
              <Typography align="left">N° de HC:</Typography>
            </Paper>
          </Box>
        </Grid> */}
        <Grid item xs={12} md={6} width="45%">
          <Box p={2} mb={1} mx={1}>
            <Paper sx={{ padding: 2 }}>
              <Typography align="left">
                Fecha de Nacimiento:{" "}
                <b>{profile.birthday.replace("T00:00:00.000Z", "")}</b>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} width="45%">
          <Box p={2} mb={1} mx={1}>
            <Paper sx={{ padding: 2 }}>
              <Typography align="left">
                Núm. de teléfono: <b>{profile.phoneNumber}</b>
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
