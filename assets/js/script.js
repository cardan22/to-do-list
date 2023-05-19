// Select the elements

const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


// Function to add task to the list

function addTask() {
    if (taskInput.value === '') {
        alert("Please write a task in the field")
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
}

// Show todays date

const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};
const day = {
    weekday: "long"
};
const today = new Date();

dayElement.innerHTML = today.toLocaleDateString("en-US", day);
dateElement.innerHTML = today.toLocaleDateString("en-US", options);