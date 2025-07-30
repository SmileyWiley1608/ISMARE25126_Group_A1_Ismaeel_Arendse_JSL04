// Task array with initial tasks
const tasks = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Epic journey begins", status: "todo" },
  { id: 2, title: "Conquer React⚛️", description: "Learn React fundamentals", status: "todo" },
  { id: 3, title: "Understand Databases⚙️", description: "Learn about SQL and NoSQL", status: "todo" },
  { id: 4, title: "Crush Frameworks🖼️", description: "Explore popular UI frameworks", status: "todo" },
  { id: 5, title: "Master JavaScript 💛", description: "Become a JS ninja", status: "doing" },
  { id: 6, title: "Never Give Up 🏆", description: "Stay motivated", status: "doing" },
  { id: 7, title: "Explore ES6 Features 🚀", description: "Learn modern JS syntax", status: "done" },
  { id: 8, title: "Have fun 🥳", description: "Enjoy coding", status: "done" },
];

// DOM elements for containers
const todoContainer = document.getElementById("todo-tasks");
const doingContainer = document.getElementById("doing-tasks");
const doneContainer = document.getElementById("done-tasks");

// Modal & form elements
const modal = document.getElementById("task-modal");
const modalTitleInput = document.getElementById("modal-title");
const modalDescInput = document.getElementById("modal-description");
const modalStatusSelect = document.getElementById("modal-status");
const closeModalBtn = document.getElementById("close-modal");
const saveTaskBtn = document.getElementById("save-task");
const modalHeader = document.getElementById("modal-header");

// Buttons
const launchCareerBtn = document.getElementById("launchCareerBtn");
const addTaskBtn = document.getElementById("add-task-btn");

let editingTaskId = null; // null means adding new task

// Render tasks in columns
function renderTasks() {
  todoContainer.innerHTML = "";
  doingContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;
    taskDiv.dataset.taskId = task.id;

    // Click to open edit modal
    taskDiv.addEventListener("click", () => openModal(task.id));

    switch(task.status) {
      case "todo":
        todoContainer.appendChild(taskDiv);
        break;
      case "doing":
        doingContainer.appendChild(taskDiv);
        break;
      case "done":
        doneContainer.appendChild(taskDiv);
        break;
    }
  });

  updateColumnHeaders();
}

// Update counts in headers
function updateColumnHeaders() {
  const todoCount = tasks.filter(t => t.status === "todo").length;
  const doingCount = tasks.filter(t => t.status === "doing").length;
  const doneCount = tasks.filter(t => t.status === "done").length;

  document.getElementById("toDoText").textContent = `TODO (${todoCount})`;
  document.getElementById("doingText").textContent = `DOING (${doingCount})`;
  document.getElementById("doneText").textContent = `DONE (${doneCount})`;
}

// Open modal to add a new task
function openAddModal() {
  editingTaskId = null;
  modalHeader.textContent = "Add Task";
  modalTitleInput.value = "";
  modalDescInput.value = "";
  modalStatusSelect.value = "todo";
  showModal();
}

// Open modal to edit existing task
function openModal(taskId) {
  editingTaskId = taskId;
  modalHeader.textContent = "Edit Task";

  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  modalTitleInput.value = task.title;
  modalDescInput.value = task.description;
  modalStatusSelect.value = task.status;
  showModal();
}

// Show modal & disable page scroll
function showModal() {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Close modal & restore scroll
function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  editingTaskId = null;
}

// Save new or edited task
function saveTask() {
  const title = modalTitleInput.value.trim();
  const description = modalDescInput.value.trim();
  const status = modalStatusSelect.value;

  if (!title) {
    alert("Please enter a task title.");
    return;
  }

  if (!description) {
    alert("Please enter a task description.");
    return;
  }

  if (editingTaskId === null) {
    // Add new task
    const maxId = tasks.length ? Math.max(...tasks.map(t => t.id)) : 0;
    tasks.push({
      id: maxId + 1,
      title,
      description,
      status,
    });
  } else {
    // Edit existing
    const task = tasks.find(t => t.id === editingTaskId);
    if (!task) return;
    task.title = title;
    task.description = description;
    task.status = status;
  }

  renderTasks();
  closeModal();
}

// Event listeners
addTaskBtn.addEventListener("click", openAddModal);
launchCareerBtn.addEventListener("click", openAddModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
saveTaskBtn.addEventListener("click", saveTask);

// Initial render
renderTasks();
document.body.style.overflow = "hidden"; // when modal open
document.body.style.overflow = "";       // when modal close
