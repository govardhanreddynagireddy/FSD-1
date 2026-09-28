function showDay() {
  let day = Number(prompt("Enter Day Number (1-7)"));

  let name;

  switch (day) {
    case 1:
      name = "Sunday";
      break;
    case 2:
      name = "Monday";
      break;
    case 3:
      name = "Tuesday";
      break;
    case 4:
      name = "Wednesday";
      break;
    case 5:
      name = "Thursday";
      break;
    case 6:
      name = "Friday";
      break;
    case 7:
      name = "Saturday";
      break;
    default:
      name = "Invalid Day";
  }

  document.getElementById("Demooo").innerHTML = name;
}