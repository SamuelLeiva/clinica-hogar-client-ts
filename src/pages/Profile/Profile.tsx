import { Box, Grid, Typography } from "@mui/material";
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
        isMounted && setProfile(response.data); //extraer las propiedades de data y ponerlas en profile
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
              Nombre: <b>{ profile.firstName }</b>
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
              Apellidos: <b>{ `${profile.lastNameF} ${profile.lastNameM}`}</b>
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
      </Grid>
    </>
  );
};

export default Profile;
