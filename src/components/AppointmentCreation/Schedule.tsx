import { Button, Paper, Stack, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { getDayName, getLastDays, getMonthName } from "../../utils/getLastDays";
import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";
import { getMedic } from "../../services/medic/medicServices";
import SelectDay from "../molecules/SelectDay";
import SelectHour from "../molecules/SelectHour";

const Schedule = () => {
  // const { medicId } = useAppointmentCreation();

  // const [medicLoading, setMedicLoading] = useState(true);
  // const [medic, setMedic] = useState(null);
  // const [days, setDays] = useState([]);
  // const [dateData, setDateData] = useState({
  //   year: 2022,
  //   month: 0,
  //   dayNumber: 20,
  //   day: 0,
  //   hour: "",
  // });
  // const [schedule, setSchedule] = useState([]);

  // //metodo que traiga los horarios del medico
  // const fetchMedic = async () => {
  //   try {
  //     const medicData = await getMedic(medicId);
  //     setMedic(medicData);
  //   } catch (error) {
  //     console.log("error :>> ", error);
  //   }
  // };

  // const getSchedule = () => {
  //   const medicSchedule = medic.schedule || {};
  //   //console.log("medicSchedule", medicSchedule);
  //   const daySchedule = medicSchedule.filter((block) => {
  //     return block.day === getDayName(dateData.day);
  //   });
  //   console.log("daySchedule", daySchedule);
  //   setSchedule(daySchedule);
  // };

  // const selectDay = (elem: any) => {
  //   //...dateData,
  //   setTimeout(() => {
  //     setDateData(elem);
  //   }, 500);

  //   //setTimeout(())
  //   getSchedule();
  // };

  // const selectHour = (hour: string) => {
  //   //get hour
  //   //put it on the state
  //   console.log("hour", hour);
  // };

  // useEffect(() => {
  //   setDays(getLastDays());
  //   if (medicLoading) {
  //     fetchMedic().then((res) => {
  //       console.log("res", res);
  //       setMedicLoading(false);
  //     });
  //   }
  // }, [medicLoading]);

  return (
    <>
      <SelectDay></SelectDay>
      <SelectHour></SelectHour>
      {/* <Typography variant="h3" mt={2}>
        Elija el dia de su cita:
      </Typography>

      <Stack
        maxWidth="lg"
        margin="auto"
        spacing={1}
        direction="row"
        mt={2}
        sx={{ overflowX: "auto" }}
      >
        {days &&
          days.map((elem) => {
            return (
              <Paper
                component={Button}
                elevation={2}
                sx={{
                  minWidth: 120,
                  flexDirection: "column",
                  backgroundColor: pink[50],
                }}
                onClick={() => {
                  selectDay(elem);
                }}
              >
                <Typography>{elem.dayNumber}</Typography>
                <Typography>
                  {getDayName(elem.day).substring(0, 3).toUpperCase()}
                </Typography>
                <Typography>{getMonthName(elem.month)}</Typography>
              </Paper>
            );
          })}
      </Stack> */}
      {/* <Typography variant="h3" mt={5}>
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
        {schedule &&
          schedule.map((elem) => {
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
                  selectHour(elem.hour);
                }}
              >
                <Typography>{elem.hour}</Typography>
              </Paper>
            );
          })}
      </Stack> */}
    </>
  );
};

export default Schedule;
