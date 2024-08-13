let johannesburgElement = document.querySelector("#johannesburg");
let johannesburgDateElement = johannesburgElement.querySelector(".date");
let johannesburgTime = moment().tz("Africa/Johannesburg");
let johannesburgTimeElement = johannesburgElement.querySelector("#time");

johannesburgDateElement.innerHTML = johannesburgTime.format("Do MMMM YYYY");
johannesburgTimeElement.innerHTML = johannesburgTime.format(
  "h:mm:ss[<small>]A[</small>]"
);
