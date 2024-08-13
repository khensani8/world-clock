let johannesburgElement = document.querySelector("#johannesburg");
let johannesburgDateElement = johannesburgElement.querySelector(".date");
let johannesburgTimeElement = johannesburgElement.querySelector(".time");

// Function to update the time
function updateJohannesburgTime() {
  let johannesburgTime = moment().tz("Africa/Johannesburg");
  johannesburgDateElement.innerHTML = johannesburgTime.format("Do MMMM YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

setInterval(updateJohannesburgTime);
