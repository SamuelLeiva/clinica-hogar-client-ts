const getDayName = (index: number) => {
  switch (index) {
    case 0:
      return "Domingo";
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miércoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sábado";
  }
};

const getMonthName = (index: number) => {
  switch (index) {
    case 0:
      return "Enero";
    case 1:
      return "Febrero";
    case 2:
      return "Marzo";
    case 3:
      return "Abril";
    case 4:
      return "Mayo";
    case 5:
      return "Junio";
    case 6:
      return "Julio";
    case 7:
      return "Agosto";
    case 8:
      return "Setiembre";
    case 9:
      return "Octubre";
    case 10:
      return "Noviembre";
    case 11:
      return "Diciembre";
  }
};

const getLastDays = () => {
  //devuelve un arreglo con los ultimos 7 dias o los que se necesiten
  const actualDate = new Date();
  let days = [];

  //pusheando dia actual
  days.push({
    day: actualDate.getDay(),
    month: actualDate.getMonth(),
    number: actualDate.getDate(),
  });

  //for para llenar un arreglo con 14 fechas
  for (let index = 0; index < 13; index++) {
    actualDate.setDate(actualDate.getDate() + 1);
    days.push({
      day: actualDate.getDay(),
      month: actualDate.getMonth(),
      number: actualDate.getDate(),
    });
  }

  //transformando los dias
  days.forEach((element) => {
    element.day = getDayName(element.day);
    element.month = getMonthName(element.month);
  });

  return days;
};

export { getLastDays };
