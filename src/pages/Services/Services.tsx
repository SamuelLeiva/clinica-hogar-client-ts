import { useAppointmentCreation } from "../../hooks/AppointmentCreation/useAppointmentCreation";

import SelectAppointmentType from "../../components/AppointmentCreation/SelectAppointmentType";
import SelectMedic from "../../components/AppointmentCreation/SelectMedic";
import SelectPatient from "../../components/AppointmentCreation/SelectPatient";
import SelectSpeciality from "../../components/AppointmentCreation/SelectSpeciality";
import Schedule from "../../components/AppointmentCreation/Schedule";
import ConfirmationAndPayment from "../../components/AppointmentCreation/ConfirmationAndPayment";
import { useEffect } from "react";

const ServicesPage = () => {
  //llamar al contexto
  const { page, changePage } = useAppointmentCreation();

  useEffect(() => {
    changePage(0);
  }, []); // TODO: que se reinicie el state de la cita

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <SelectAppointmentType></SelectAppointmentType>;
      case 1:
        return <SelectSpeciality></SelectSpeciality>;
      case 2:
        return <SelectPatient></SelectPatient>;
      case 3:
        return <SelectMedic></SelectMedic>;
      case 4:
        return <Schedule></Schedule>;
      case 5:
        return <ConfirmationAndPayment></ConfirmationAndPayment>;
      default:
        return <div>No hay pasos</div>;
    }
  };

  return <>{PageDisplay()}</>;
};

export default ServicesPage;
