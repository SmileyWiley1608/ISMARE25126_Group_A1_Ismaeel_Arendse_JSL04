JSL04 Challenge
Overview
This project is my implementation of a Kanban-style task management board, built with HTML, CSS, and JavaScript. It focuses on DOM manipulation, modal functionality, responsive layout, and live task management — offering a more advanced, visual, and interactive version of basic JavaScript task handling.

Through this, I aimed to:

Design a responsive and visually polished user interface

Allow users to add, edit, and organize tasks using a dynamic modal

Implement real-time DOM updates for task changes

Show live task counts per status category

Practice responsive design and front-end project structure

Features Covered
I built functionality to:

Display tasks grouped by status: To Do, Doing, and Done

Dynamically update tasks on the page as they are added or edited

Open a modal form with inputs for title, description, and status

Add new tasks or edit existing ones by clicking on them

Track and display task counts in each column

Create a responsive layout for mobile, tablet, and desktop users

Style everything with modern fonts, shadows, and color-coded status dots

Structure
The project consists of:

✅ A semantic HTML layout for the full Kanban interface

🎨 A CSS stylesheet using variables, media queries, and modern layout tools like Flexbox and Grid

⚙️ A JavaScript script that manages task state, DOM interaction, and modal behavior

HTML
The HTML is structured around a main Kanban board layout:

html
Copy
Edit

<div class="column-div" data-status="todo">
  <div class="column-head-div">
    <span class="dot" id="todo-dot"></span>
    <h4 class="columnHeader">TODO (4)</h4>
  </div>
  <div class="tasks-container">
    <div class="task-div">Launch Epic Career 🚀</div>
    <!-- ... -->
  </div>
</div>
There are three columns: todo, doing, and done.

Each task is placed inside its corresponding column dynamically.

A modal is included in the HTML for adding or editing tasks.

CSS
The styling is responsive and modular, using custom variables and modern layout techniques:

css
Copy
Edit
:root {
--primary-color: #ffffff;
--secondary-color: #f4f7fd;
--primary-font-color: #000000;
--secondary-font-color: #828fa3;
--sidebar-width: 300px;
}

.card-column-main {
display: grid;
grid-template-columns: repeat(3, minmax(0, 304px));
gap: 8px;
}
The task board uses a CSS Grid for columns.

Media queries are used to:

Stack columns vertically on mobile

Hide the sidebar on smaller screens

Adjust font sizes and spacing for readability

Task cards have consistent spacing, shadows, and rounded corners:

css
Copy
Edit
.task-div {
background-color: var(--primary-color);
border-radius: 12px;
box-shadow: var(--primary-box-shadow);
padding-left: 15px;
font-weight: bold;
cursor: pointer;
}
JavaScript
The JavaScript handles all task functionality:

js
Copy
Edit
const tasks = [
{ id: 1, title: "Launch Epic Career 🚀", description: "Epic journey begins", status: "todo" },
// ...
];
A task array stores all data.

Tasks are rendered into columns using a renderTasks() function.

The modal form allows adding new tasks or editing existing ones:

js
Copy
Edit
function openAddModal() {
modalHeader.textContent = "Add Task";
modal.classList.remove("hidden");
}
Clicking a task opens it in edit mode.

Clicking the Add Task button opens an empty modal.

When tasks are saved, the array and DOM update instantly.

Task counts update automatically using updateColumnHeaders().

How to Use This Project
Open the project in your browser (via Live Server or direct file path).

Click the “Add Task” button (top-right or floating depending on screen size).

Fill in the modal with a title, description, and status.

Click a task to edit it directly.

All updates will reflect immediately and the column headers will show updated task counts.

License
This project is for educational use only and is part of a front-end JavaScript learning challenge.
