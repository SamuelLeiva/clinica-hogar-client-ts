import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const ServicesPage = () => {
  return (
    <>
      <Typography variant="h2" mt={2}>
        Elija el tipo de cita:
      </Typography>
      <Grid
        container
        my={5}
        mx="auto"
        width="50%"
        columnSpacing={1}
        rowSpacing={2}
      >
        <Grid item xs={12} lg={6} width="45%">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Cita virtual
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Agendar cita</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} width="45%">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Cita presencial
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Agendar cita</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ServicesPage;
