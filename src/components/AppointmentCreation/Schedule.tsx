import { useEffect, useState } from "react";

import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";
import { getMedic } from "../../services/medic/medicServices";
import SelectDay from "../molecules/SelectDay";
import SelectHour from "../molecules/SelectHour";

const Schedule = () => {
  const { medicId } = useAppointmentCreation();

  //const [medic, setMedic] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [daySchedule, setDaySchedule] = useState([]);
  const [scheduleLoading, setScheduleLoading] = useState(true);
  const [dateData, setDateData] = useState({
    year: 2022,
    month: 0,
    dayNumber: 20,
    day: 0,
  });
  const [hour, setHour] = useState("");

  //metodo que traiga los horarios del medico
  const fetchMedicSchedule = async () => {
    try {
      const medicData = await getMedic(medicId);
      //console.log("medicData :>> ", medicData);
      //setMedic(medicData);
      setSchedule(medicData.schedule);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchMedicSchedule();
  }, []);

  useEffect(() => {
    console.log("schedule :>> ", schedule);
  }, [schedule]);

  return (
    <>
      <SelectDay
        schedule={schedule}
        setDaySchedule={setDaySchedule}
        dateData={dateData}
        setDateData={setDateData}
        setScheduleLoading={setScheduleLoading}
      ></SelectDay>
      {!scheduleLoading && (
        <SelectHour
          daySchedule={daySchedule}
          dateData={dateData}
          hour={hour}
          setHour={setHour}
        ></SelectHour>
      )}
    </>
  );
};

export default Schedule;
