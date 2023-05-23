/*jshint esversion: 6 */

// Select the elements
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Show today's date
const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};
const dayOptions = {
    weekday: "long"
};
const today = new Date();

dayElement.innerHTML = today.toLocaleDateString("en-US", dayOptions);
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add focus to the form
taskInput.focus();

// Function to add a task to the To-do list
function addTask() {
    if (taskInput.value === '') {
        alert("Please write a task in the field");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = "";
    saveData();
}

// Event listener for "Enter" key press
document.getElementById("task-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Event listener for marking task as done or deleting task
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to store the tasks
function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

// Function to display the stored task list
function showList() {
    taskList.innerHTML = localStorage.getItem("data");
}

// Call the showList function to display the task list on page load
showList();