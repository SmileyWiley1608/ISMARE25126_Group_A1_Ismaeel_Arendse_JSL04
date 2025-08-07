# 🧩 JSL05 — Responsive Kanban Task Board

## 🔍 Overview

**JSL04** is a fully responsive Kanban task board built with **HTML**, **CSS**, and **JavaScript**. Designed for real-time interactivity and clean user experience, this project features dynamic task management, modal-based CRUD operations, and responsive layout adaptation across desktop, tablet, and mobile screens. It emphasizes both functionality and modern UI aesthetics.

---

## 🛠️ Codebase Enhancements

This version includes refined, human-friendly comments across all source files to boost readability and maintainability:

- 📝 HTML: Clear descriptions highlight the purpose of key structural elements, improving navigation for new developers.
- 🎯 JavaScript: Major logic blocks and functions are explained with concise, natural-language summaries for better understanding.
- 💅 CSS: Section headers now describe layout intentions and styling roles, making the design flow easier to follow.

These updates enhance the overall developer experience by making the code more self-explanatory and collaborative.
---

## ✨ Features

- ✅ **Three Status Columns**  
  Organize tasks into **To Do**, **Doing**, and **Done**, each with color-coded status indicators.

- 🧩 **Live Task Rendering**  
  Tasks render immediately upon creation or update — no page reloads.

- ✍️ **Modal Form for Add/Edit**  
  A modal interface allows users to create or edit tasks with fields for **title**, **description**, and **status**.

- 🔁 **Edit Tasks Instantly**  
  Clicking any task opens it in the modal for quick editing.

- 🔢 **Dynamic Task Counts**  
  Each column header shows the live count of tasks within it.

- 📱 **Fully Responsive Layout**  
  Adapts seamlessly from 3-column layout (desktop) to 2 or 1 (tablet/mobile).

- 🎨 **Modern UI Styling**  
  Smooth shadows, rounded corners, consistent color themes, and subtle transitions enhance UX.

---

## 🧱 Project Structure

### 🗂 HTML

- **Sidebar**: Includes a logo and board navigation.
- **Header**: Displays the board name and “Add Task” button.
- **Columns**: Each column (`.column-div`) contains filtered tasks by status.
- **Modal**: Reusable modal for adding or editing tasks.

```html
<div class="column-div" data-status="todo">
  <div class="column-head-div">
    <span class="dot" id="todo-dot"></span>
    <h4 class="columnHeader">TODO (4)</h4>
  </div>
  <div class="tasks-container" id="todo-tasks">
    <!-- Tasks dynamically inserted here -->
  </div>
</div>
```

---

### 🎨 CSS

- **Custom Variables**: Theme colors, spacing, and fonts are defined with `--primary-color`, `--secondary-color`, etc.
- **Layout**: Uses **Flexbox** and **CSS Grid** for structure.
- **Responsive Design**: Media queries ensure optimal display on all screen sizes.
- **Task Cards**: Styled with hover effects, box shadows, and smooth transitions.
- **Modal**: Includes a blurred overlay, responsive width, and organized form layout.

```css
.card-column-main {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 304px));
  gap: 8px;
}
```

---

### ⚙️ JavaScript

Handles the full logic layer:

- **Task Data**: Tasks are stored in an array with `id`, `title`, `description`, and `status`.
- **Rendering**: `renderTasks()` updates the DOM based on task data.
- **Modal Control**:
  - Add Mode: Clears fields for new entry.
  - Edit Mode: Loads existing data into the form.
- **Save Logic**:
  - Adds a new task with a unique ID.
  - Edits modify the existing object.
- **Header Updates**: `updateColumnHeaders()` dynamically updates the task counts.

```js
function renderTasks() {
  todoContainer.innerHTML = "";
  doingContainer.innerHTML = "";
  doneContainer.innerHTML = "";

  tasks.forEach((task) => {
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
```

---

## 🧪 How to Use

1. Open the project in your browser (via Live Server or direct file path).
2. Click **“Add Task”** to open the modal.
3. Enter the task's **title**, **description**, and **status**.
4. Click **Save** — the task will appear in the appropriate column.
5. Click on any existing task to edit it.
6. Task counts update automatically per column.

---

## 📄 License

This project was built for learning and practice purposes as part of a front-end JavaScript challenge. It showcases DOM manipulation, responsive UI design, and interactive component logic using vanilla JS, HTML, and CSS.
