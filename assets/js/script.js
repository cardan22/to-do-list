
// Select the elements

const dateElement = document.getElementById("date");
const dayElement = document.getElementById("day");

// Show todays date

const options = { month: 'long', day: 'numeric', year: 'numeric' };
const day = { weekday: "long" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);
dayElement.innerHTML = today.toLocaleDateString("en-US", day);
