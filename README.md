# To-do List
Link to the website: [To-do List](https://cardan22.github.io/to-do-list/)

![Mockup of To-do List on different devices](/assets/images/readme-images/to-do-mockup.png)

# About
The To-do list is a simple and stylish task management application designed to help users keep track of their tasks and stay organized. With its user-friendly interface, it provides a seamless and easy-to-understand experience for users to easily manage their to-do items.

# UX

## User Demographic
The website is designed for:
* People who want to stay organized.
* People who want an easy to use To-do list.
* People who want to improve time management and reduce stress while handling tasks.

## User stories
* Working Professional: "I want a to-do list that helps me prioritize and manage tasks easily."
* Student: "I need a simple to-do list for tracking assignments and study schedule."
* Parent: "I want a user-friendly To-do list to organize household tasks and appointments."

## User goals
* Easily add tasks in the To-do list.
* Quickly mark tasks as completed to track progress.
* Easily delete tasks that are no longer relevant.
* Access the to-do list from various devices and platforms. 
* Have a clear and intuitive user interface that requires minimal learning effort.

## Design
The To-do list has a modern design with clean lines, simple colors, and easy-to-read fonts. The design is created to be user-friendly, so people can easily move around the app and use it without any problems. The focus is on making it simple and intuitive for users to manage their tasks without any problem.

## Wireframes
* I used Figma to design wireframes, which helped me to create a visual representation of the To-do list.
* The website was completed with only minor differences from the original plan. I made some adjustments, particularly in the header section, to ensure better integration with the overall design of the to-do list.

![Wireframes of To-do List](/assets/images/readme-images/to-do-wireframes.png)

## Colours
I got inspiration from the specific colour palette below and I selected a few colours from this palette and combine them into the To-do list's visual elements.

![Colour palette](/assets/images/readme-images/colours.png)

## Typography
I used Jost font To make the To-do list visually appealing and easy to read. My goal was to create a pleasant and easy-to-read text style that goes well with the overall design.

## Logo
I created a simple logo for the To-do list to strengthen its visual identity. The logo is minimalistic and easy to understand, making it easier for users to recognize and associate with the to-do list.

![To-do List logo](/assets/images/readme-images/to-do-logo.png)

# Features
* Create a task
* Task management
* Delete task

## Existing Features

### Header and logo
* The section displays a logo along with the header text.
* Helps the user to quickly recognize and connect the website with its specific content and purpose.

![Header and logo](/assets/images/readme-images/header.png)

### Date 
* The section displays the current date.
* This helps users identify which tasks are relevant for the day and plan their activities accordingly.

![Todays date](/assets/images/readme-images/date.png)

### Add a task
* The section includes a form and a button for adding tasks.
* Informs the users that they can easily add a task to their To-do list.

![Form to add a task](/assets/images/readme-images/form.png)

### List of tasks
* The section displays all the added tasks with an unchecked button and a delete button (represented by an "x"). If a task is marked as done, a checked button is displayed instead of the unchecked button.
* The user can see all the task and interact with each task by marking it as done or delete it.
* The unchecked button enables users to indicate the completion status of a task, while the delete button allows them to remove tasks from the list.

![List of tasks](/assets/images/readme-images/task.png)

# Technologies Used
* [HTML](https://sv.wikipedia.org/wiki/HTML)
* [CSS](https://sv.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript](https://sv.wikipedia.org/wiki/Javascript)

# Testing

### List of main issues:

#### Footer doesn’t stick to the bottom of the page
* The solution was to add flexbox container and set the CSS poperty for the footer to { margin-top: auto; }.

#### Auto-Zooming on input fields
* The solution was to add the following code to the head (meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"). 

## Validator Testing

#### HTML
* The [W3C HTML Validator](https://validator.w3.org/) was used to validate the HTML code, and it identified missing close tags for the flex-container div and for the botton element. These missing close tags were added to ensure proper HTML structure.

#### CSS
* The CSS code was validated using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/), and no errors were found.

#### JavaScript
* After running the JavaScript code on [jshint.com](https://jshint.com/), I received warnings regarding the use of 'esversion: 6'. To resolve this, I added the comment /*jshint esversion: 6 */ at the top of the JS file.

#### Accessibility (Devtool Lighthouse Report)
* I ran a Lighthouse test on the website, and it received a high score in most areas except for the "Accessibility" section. The reason for this is because auto-zooming on input fields was removed

![Screenshot of Lighthouse Report](/assets/images/readme-images/lighthouse.png)

# Development and Deployment

The development environment used for this project was GitPod. Regular commits and pushes to GitHub were performed to manage version control and track the development stage. A Code Institute-provided template was used to set up the GitPod environment. The live version of the project is deployed at GitHub pages.

To deploy the project, follow the ["Creating your site"](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) instructions provided in GitHub Docs, which involved these steps:
1.	Sign in to [GitHub](https://github.com/).
2.	Find the repository that you want to deploy.
3.	Click on "Settings" at the top of the repository.
4.	Scroll down to the "GitHub Pages" section and click "Check it out here!"
5.	In the "Source" section, select "main" as the branch and "root" as the folder, then click "Save".
6.	The website will be deployed, and the page will automatically refresh to display the link to the live project.

Link to the [deployment site](https://github.com/cardan22/to-do-list)

Link to the [website](https://cardan22.github.io/to-do-list/)

# Credits

## Content
* I used the code from the Love running project for the event listener that captures the "Enter" key press and the function to add focus to the form.
* The box-shadow effect used in the to-do list application was sourced from [getcssscan.com](https://getcssscan.com/css-box-shadow-examples)
* To implement JavaScript for the date a got information and examples from [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
* The icons used were taken from [Google Fonts](https://fonts.google.com/icons)

## Media
* The top mockup in the README was generated using [ami.responsivedesign.is](http://ami.responsivedesign.is/).

[Back to top](#to-do-list)