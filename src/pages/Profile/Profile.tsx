import { Box, Grid, Typography } from "@mui/material";

const Profile = () => {
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
            <Typography align="left">Nombre:</Typography>
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
            <Typography align="left">Apellidos:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Documento:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">N° de HC:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Fecha de Nacimiento:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Núm. de teléfono:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Email:</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} width="45%">
          <Box bgcolor="lightpink" borderBottom="2px solid" p={2} mb={1} mx={1}>
            <Typography align="left">Contraseña:</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
