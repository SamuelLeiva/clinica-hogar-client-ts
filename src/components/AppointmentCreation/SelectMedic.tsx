import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { blue } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";
import axios from "../../services/axios";
import { MEDIC_URL } from "../../constants/server_uris";

const SelectMedic = () => {
  const { specialityId, appointmentType, addMedicData, changePage } =
    useAppointmentCreation();

  const [medics, setMedics] = useState([]);

  const getMedics = async () => {
    const response = await axios.get(`${MEDIC_URL}/speciality/${specialityId}`);
    setMedics([...response.data]);
  };

  const addMedicAndChange = (medicId: string) => {
    addMedicData(medicId);
    changePage(4);
  };

  useEffect(() => {
    getMedics();
  }, []);

  return (
    <>
      <Typography variant="h3">Elija el médico de su preferencia:</Typography>
      <Grid
        container
        my={5}
        mx="auto"
        width="50%"
        columnSpacing={1}
        rowSpacing={2}
      >
        {medics &&
          medics.map((medic) => {
            return (
              <Grid item xs={12} lg={6} width="45%">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Grid container>
                      <Grid item xs={6}>
                        <Avatar
                          sx={{ bgcolor: blue[500], width: 80, height: 80 }}
                        >
                          <PageviewIcon />
                        </Avatar>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          textAlign={"end"}
                          variant="h6"
                          component="div"
                        >
                          {`${medic.firstName} ${medic.lastNameF} ${medic.lastNameM}`}
                        </Typography>
                        <Typography
                          textAlign={"end"}
                          variant="body1"
                          component="div"
                        >
                          {`${medic.speciality.name}`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => addMedicAndChange(medic._id)}
                    >{`Agendar cita ${appointmentType}`}</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default SelectMedic;
