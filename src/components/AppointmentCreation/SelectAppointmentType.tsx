import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";

const SelectAppointmentType = () => {
  const { addAppointmentType, changePage } = useAppointmentCreation();

  const addAppointmentTypeAndChange = (appointmentType: string) => {
    addAppointmentType(appointmentType);
    changePage(1);
  };

  return (
    <>
      <Typography variant="h3">Elija el tipo de cita:</Typography>
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
              <Button
                size="small"
                onClick={() => {
                  addAppointmentTypeAndChange("VIRTUAL");
                }}
              >
                Agendar cita
              </Button>
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
              <Button
                size="small"
                onClick={() => {
                  addAppointmentTypeAndChange("PRESENCIAL");
                }}
              >
                Agendar cita
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SelectAppointmentType;
