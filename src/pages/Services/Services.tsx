import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import useRefreshToken from "../../hooks/useRefreshToken";

const ServicesPage = () => {
  const { refresh } = useRefreshToken();

  return (
    <>
      <Typography variant="h2" mt={2}>
        Elija el tipo de cita:
      </Typography>
      <Grid container my={5} mx="auto" width="50%" columnSpacing={1} rowSpacing={2}>
        <Grid item xs={12} lg={6} width="45%">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography> */}
              <Typography variant="h5" component="div">
                Cita virtual
              </Typography>
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small">Agendar cita</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} width="45%">
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              {/* <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography> */}
              <Typography variant="h5" component="div">
                Cita presencial
              </Typography>
              {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}
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
