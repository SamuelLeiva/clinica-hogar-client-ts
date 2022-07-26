import { Typography, Stack, Paper, Button } from "@mui/material";
import { pink } from "@mui/material/colors";

const SelectHour = ({ daySchedule, dateData, setDateData }) => {
  const selectHour = (hour: any) => {
    setDateData({ ...dateData, hour });
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
                  console.log(elem.hour);
                  selectHour(elem.hour);
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
