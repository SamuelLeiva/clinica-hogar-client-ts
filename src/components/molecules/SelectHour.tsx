import { Typography, Stack, Paper, Button } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect } from "react";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";

const SelectHour = ({ daySchedule, dateData, hour, setHour }) => {
  const { addAppointmentDate, changePage } = useAppointmentCreation();

  const addDate = (hour: string) => {
    const date = new Date(
      dateData.year,
      dateData.month,
      dateData.dayNumber,
      parseInt(hour.substring(0, 2)),
      parseInt(hour.substring(3))
    );
    addAppointmentDate(date);
    changePage(5);
  };

  return (
    <>
      <Typography variant="h3" mt={5}>
        Elija la hora de su cita:
      </Typography>
      <Stack
        maxWidth="lg"
        margin="auto"
        spacing={1}
        direction="row"
        mt={2}
        sx={{ overflowX: "auto" }}
      >
        {daySchedule &&
          daySchedule.map((elem) => {
            return (
              <Paper
                component={Button}
                elevation={2}
                disabled={elem.occupied}
                sx={{
                  minWidth: 120,
                  flexDirection: "column",
                  backgroundColor: pink[100],
                }}
                onClick={() => {
                  addDate(elem.hour);
                }}
              >
                <Typography>{elem.hour}</Typography>
              </Paper>
            );
          })}
      </Stack>
    </>
  );
};

export default SelectHour;
