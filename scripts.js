// ==============================
// Local Storage Module
// ==============================

/**
 * Get tasks from localStorage, or fallback to default starter tasks
 * @returns {Array} tasks array
 */
function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [
    { id: 1, title: "Launch Epic Career 🚀", description: "Epic journey begins", status: "todo" },
    { id: 2, title: "Conquer React⚛️", description: "Learn React fundamentals", status: "todo" },
    { id: 3, title: "Understand Databases⚙️", description: "Learn about SQL and NoSQL", status: "todo" },
    { id: 4, title: "Crush Frameworks🖼️", description: "Explore popular UI frameworks", status: "todo" },
    { id: 5, title: "Master JavaScript 💛", description: "Become a JS ninja", status: "doing" },
    { id: 6, title: "Never Give Up 🏆", description: "Stay motivated", status: "doing" },
    { id: 7, title: "Explore ES6 Features 🚀", description: "Learn modern JS syntax", status: "done" },
    { id: 8, title: "Have fun 🥳", description: "Enjoy coding", status: "done" },
  ];
}

/**
 * Save current tasks to localStorage
 */
function saveTasksToStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ==============================
// Task State & DOM References
// ==============================

let tasks = loadTasksFromStorage();
let editingTaskId = null;

const todoContainer = document.getElementById("todo-tasks");
const doingContainer = document.getElementById("doing-tasks");
const doneContainer = document.getElementById("done-tasks");

const modal = document.getElementById("task-modal");
const modalTitleInput = document.getElementById("modal-title");
const modalDescInput = document.getElementById("modal-description");
const modalStatusSelect = document.getElementById("modal-status");
const closeModalBtn = document.getElementById("close-modal");
const saveTaskBtn = document.getElementById("save-task");
const modalHeader = document.getElementById("modal-header");

const launchCareerBtn = document.getElementById("launchCareerBtn");
const addTaskBtn = document.getElementById("add-task-btn");

// ==============================
// Task Rendering Module
// ==============================

/**
 * Render tasks in their respective columns
 */
function renderTasks() {
  todoContainer.innerHTML = "";
  doingContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  tasks.forEach(task => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;
    taskDiv.dataset.taskId = task.id;

    taskDiv.addEventListener("click", () => openModal(task.id));

    switch (task.status) {
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

/**
 * Update the header counts for each column
 */
function updateColumnHeaders() {
  const todoCount = tasks.filter(t => t.status === "todo").length;
  const doingCount = tasks.filter(t => t.status === "doing").length;
  const doneCount = tasks.filter(t => t.status === "done").length;

  document.getElementById("toDoText").textContent = `TODO (${todoCount})`;
  document.getElementById("doingText").textContent = `DOING (${doingCount})`;
  document.getElementById("doneText").textContent = `DONE (${doneCount})`;
}

// ==============================
// Modal Management
// ==============================

/**
 * Show modal and prevent background scroll
 */
function showModal() {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

/**
 * Close modal and restore scroll
 */
function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  editingTaskId = null;
}

/**
 * Open modal in "Add Task" mode
 */
function openAddModal() {
  editingTaskId = null;
  modalHeader.textContent = "Add Task";
  modalTitleInput.value = "";
  modalDescInput.value = "";
  modalStatusSelect.value = "todo";
  showModal();
}

/**
 * Open modal to edit an existing task
 * @param {number} taskId
 */
function openModal(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return;

  editingTaskId = taskId;
  modalHeader.textContent = "Edit Task";
  modalTitleInput.value = task.title;
  modalDescInput.value = task.description;
  modalStatusSelect.value = task.status;
  showModal();
}

// ==============================
// Save Task Logic
// ==============================

/**
 * Save a new or edited task
 */
function saveTask() {
  const title = modalTitleInput.value.trim();
  const description = modalDescInput.value.trim();
  const status = modalStatusSelect.value;

  if (!title || !description) {
    alert("Please enter both a title and description.");
    return;
  }

  if (editingTaskId === null) {
    const maxId = tasks.length ? Math.max(...tasks.map(t => t.id)) : 0;
    tasks.push({ id: maxId + 1, title, description, status });
  } else {
    const task = tasks.find(t => t.id === editingTaskId);
    if (!task) return;
    task.title = title;
    task.description = description;
    task.status = status;
  }

  saveTasksToStorage();
  renderTasks();
  closeModal();
}

// ==============================
// Event Listeners
// ==============================

addTaskBtn.addEventListener("click", openAddModal);
launchCareerBtn.addEventListener("click", openAddModal);
closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
saveTaskBtn.addEventListener("click", saveTask);

// ==============================
// Initialize App
// ==============================

renderTasks();
