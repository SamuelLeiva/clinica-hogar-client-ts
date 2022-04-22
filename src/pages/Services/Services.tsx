import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ServicesPage = () => {
  return (
    <>
      <Typography variant="h2" mt={2}>
        Elija el tipo de cita:
      </Typography>
      <Grid container my={5}>
        <Grid item xs={12} md={6}>
          <Box bgcolor="lightpink" border="solid" p={2} mx={10} my={5}>
            Citas virtuales
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box bgcolor="lightpink" border="solid" p={2} mx={10} my={5}>
            Citas presenciales
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesPage;
