/*jshint esversion: 6 */

/**
 * Retrieves the necessary elements from the DOM and initializes the task list application.
 * Sets the current weekday, month, day, and year in the respective HTML elements.
 * Sets focus to the task input field.
 */

// Select the elements
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

/**
 * Displays the current weekday, month, day, and year.
 * Retrieves the current date using the Date object.
 * Formats the date using the specified options for month, day, and year.
 */

const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};
const dayOptions = {
    weekday: "long"
};
const today = new Date();

// Set the current weekday
dayElement.innerHTML = today.toLocaleDateString("en-US", dayOptions);

// Set the current date
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Sets focus to the task input field
taskInput.focus();

/**
 * Adds a task to the task list when the user enters a task in the field and presses the button.
 * If the task input field is empty, displays an alert message.
 * After adding the task, clears the task input field and saves the updated task list.
 * Tutorial by @EasyTutorialsVideo on YouTube
 * Link: [https://www.youtube.com/watch?v=G0jO8kUrg-I]
 */
function addTask() {
    if (taskInput.value === '') {
        alert("Please write a task in the field");
    } else {
        // Create a new list item for the task
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        // Append the task to the task list
        taskList.appendChild(li);
        // Create a delete button for the task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // Append the delete button to the task
        li.appendChild(span);
    }
    // Clear the task input field
    taskInput.value = "";
    // Save the updated task list
    saveData();
}

/**
 * Handles the "Enter" key press event to add a task.
 * Calls the addTask function when the "Enter" key is pressed.
 */
document.getElementById("task-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

/**
 * Toggles the visibility of the popup window.
 * Adds or removes the "active" class to the popup text element, which controls its visibility.
 * When the "active" class is added, the popup window is displayed.
 * When the "active" class is removed, the popup window is hidden.
 */
function showPopup() {
    document.getElementById("popup-text").classList.toggle("active");
}

/**
 * Marks a task as done or deletes a task when clicked.
 * If the clicked element is a list item, toggles the "checked" class to mark it as done.
 * If the clicked element is the delete button, removes the corresponding task from the task list.
 * After modifying the task list, saves the updated task list.
 */
taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        // Toggle the "checked" class to mark the task as done or undone
        event.target.classList.toggle("checked");
        // Save the updated task list
        saveData();
    } else if (event.target.tagName === "SPAN") {
        // Remove the task when the delete button is clicked
        event.target.parentElement.remove();
        // Save the updated task list
        saveData();
    }
}, false);

/**
 * Stores the task list in the local storage.
 * Saves the inner HTML content of the task list element as the "data" item in the local storage.
 */
function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

/**
 * Displays the stored task list on page load.
 * Retrieves the stored task list from the local storage and sets it as the inner HTML content of the task list element.
 */
function showList() {
    taskList.innerHTML = localStorage.getItem("data");
}

// Call the showList function to display the task list on page load
showList();