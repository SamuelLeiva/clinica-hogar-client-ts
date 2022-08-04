import { useEffect, useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import axios from "../../services/axios";
import { SPECIALITY_URL } from "../../constants/server_uris";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";

const SelectSpeciality = () => {
  const { addSpecialityData, changePage } = useAppointmentCreation();

  const [specialities, setSpecialities] = useState([]);

  const getSpecialities = async () => {
    const response = await axios.get(SPECIALITY_URL);
    setSpecialities([...response.data]);
  };

  const addSpecialityAndChange = (specialityId: string) => {
    addSpecialityData(specialityId);
    changePage(2);
  };

  useEffect(() => {
    getSpecialities();
  }, []);

  return (
    <>
      <Typography variant="h3">Elija un servicio para su cita:</Typography>
      <Grid
        container
        my={5}
        mx="auto"
        width="50%"
        columnSpacing={1}
        rowSpacing={2}
      >
        {specialities &&
          specialities.map((sp) => {
            return (
              <Grid item xs={12} lg={6} width="45%">
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {sp.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        addSpecialityAndChange(sp._id);
                      }}
                    >
                      Seleccionar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default SelectSpeciality;
