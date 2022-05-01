import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { MY_PROFILE_URL } from "../../constants/server_uris";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    lastNames: "",
    phoneNumber: "",
    document: "",
    birthday: "",
  });

  const fetchProfile = async () => {
    const authData = JSON.parse(localStorage.getItem("hogar-auth"));
    console.log("authData", authData);
    const response = await axios.get(MY_PROFILE_URL, {
      headers: {
        Authorization: authData.accessToken,
      },
    });

    setProfile({
      name: response.data.firstName,
      lastNames: response.data.lastNameF + " " + response.data.lastNameM,
      phoneNumber: response.data.phoneNumber,
      document: response.data.document,
      birthday: response.data.birthday,
    });

    console.log("profile", profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <Typography variant="h2" mt={2}>
        Mi perfil:
      </Typography>
      <Grid container my={5} mx="auto" width="70%">
        <Grid item xs={6} width="45%">
          <Box
            bgcolor="lightpink"
            borderBottom="2px solid"
            p={2}
            mt={5}
            mb={1}
            mx={1}
          >
            <Typography align="left">
              Nombre: <b>{profile.name}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box
            bgcolor="lightpink"
            borderBottom="2px solid"
            p={2}
            mt={5}
            mb={1}
            mx={1}
          >
            <Typography align="left">
              Apellidos: <b>{profile.lastNames}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">
              Documento: <b>{profile.document}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">N° de HC:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">
              Fecha de Nacimiento:{" "}
              <b>{profile.birthday.replace("T00:00:00.000Z", "")}</b>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">
              Núm. de teléfono: <b>{profile.phoneNumber}</b>
            </Typography>
          </Box>
        </Grid>
        {/* <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Email:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Contraseña:</Typography>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Profile;
