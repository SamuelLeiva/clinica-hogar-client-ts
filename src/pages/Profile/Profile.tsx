import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { MY_PROFILE_URL } from "../../constants/server_uris";
import { useAuth } from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useRefreshToken from "../../hooks/useRefreshToken";

const Profile = () => {
  //const { accessToken } = useAuth();

  const { refresh } = useRefreshToken();

  const [profile, setProfile] = useState({});
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProfile = async () => {
      try {
        const response = await axios.get(MY_PROFILE_URL, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setProfile(response); //extraer las propiedades de data y ponerlas en profile
      } catch (err) {
        console.error(err);
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

  // const fetchProfile = async (signal: any, isMounted: Boolean) => {
  //   const response = await axios.get(MY_PROFILE_URL, {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });

  //   isMounted && setProfile({
  //     name: response.data.firstName,
  //       lastNames: response.data.lastNameF + " " + response.data.lastNameM,
  //       phoneNumber: response.data.phoneNumber,
  //       document: response.data.document,
  //       birthday: response.data.birthday,
  //   })

  // try {
  //   const response = await axiosPrivate.get(
  //     MY_PROFILE_URL, {
  //       signal
  //     }
  //   )

  //   console.log('response :>> ', response);

  //   isMounted && setProfile({
  //     name: response.data.firstName,
  //     lastNames: response.data.lastNameF + " " + response.data.lastNameM,
  //     phoneNumber: response.data.phoneNumber,
  //     document: response.data.document,
  //     birthday: response.data.birthday,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   navigate('/')
  // }

  //   console.log("profile", profile);
  // };

  return (
    <>
      <button onClick={() => refresh()}>Refresh</button>
      <br />
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
              {/* Nombre: <b>{profile.name}</b> */}
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
              {/* Apellidos: <b>{profile.lastNames}</b> */}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">
              {/* Documento: <b>{profile.document}</b> */}
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
              {/* <b>{profile.birthday.replace("T00:00:00.000Z", "")}</b> */}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">
              {/* Núm. de teléfono: <b>{profile.phoneNumber}</b>*/}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
