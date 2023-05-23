/*jshint esversion: 6 */

// Select the elements

const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

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


// Add focus point to form

document.getElementById("task-input").focus();

// Function to add a task to the To-do list

document.getElementById("task-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

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

// Mark task as done or delete task

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to store the tasks

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showList() {
    taskList.innerHTML = localStorage.getItem("data");
}

showList();