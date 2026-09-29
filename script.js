const newTaskButton = document.getElementById("new-task-button");
const taskModal = document.getElementById("task-modal");
const closeModalButton = document.getElementById("close-modal-button");
const cancelButton = document.getElementById("cancel-button");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-button");
const taskCounter = document.getElementById("task-counter");

let currentFilter = "all";
let tasks = [];

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    tasks = JSON.parse(savedTasks);
}

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        button.classList.add("active");

        renderTasks();
    });
});

function renderTasks() {

    taskList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();

    const filteredTasks = tasks.filter(function (task) {

        const matchesSearch =
            task.title.toLowerCase().includes(searchText) ||
            task.description.toLowerCase().includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "todo" && !task.completed) ||
            (currentFilter === "completed" && task.completed);

        return matchesSearch && matchesFilter;
    });

    if (filteredTasks.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    taskCounter.textContent = `${filteredTasks.length} ${filteredTasks.length === 1 ? "task" : "tasks"}`;

    filteredTasks.forEach(function (task) {

        const taskItem = document.createElement("li");

        taskItem.classList.add("task-item");

        if (task.completed) {
            taskItem.classList.add("completed");
        }

        let dueDateClass = "";
        if (task.dueDate && !task.completed) {
            const today = new Date().toISOString().split("T")[0];
            if (task.dueDate < today) {
                dueDateClass = "overdue";
            }
        }

        taskItem.innerHTML = `
            <input
                type="checkbox"
                class="task-checkbox"
                ${task.completed ? "checked" : ""}
            >
            <div class="task-content">
                <h3 class="task-title">
                    ${task.title}
                </h3>
                <p class="task-description">
                    ${task.description}
                </p>
                <div class="task-meta">
                    <span class="${dueDateClass}">
                        Due: ${task.dueDate || "No date"}
                    </span>
                    <span class="task-priority priority-${task.priority}">
                        Priority: ${task.priority}
                    </span>
                </div>
            </div>
            <button
                type="button"
                class="delete-button"
                aria-label="Delete task"
            >
                Delete
            </button>
        `;

        const checkbox = taskItem.querySelector(".task-checkbox");

        checkbox.addEventListener("change", function () {

            task.completed = checkbox.checked;

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            renderTasks();
        });

        const deleteButton = taskItem.querySelector(".delete-button");

        deleteButton.addEventListener("click", function () {

            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            renderTasks();
        });

        taskList.appendChild(taskItem);
    });
}

newTaskButton.addEventListener("click", function () {
    taskModal.classList.remove("hidden");
});

closeModalButton.addEventListener("click", function () {
    taskModal.classList.add("hidden");
});

cancelButton.addEventListener("click", function () {
    taskModal.classList.add("hidden");
});

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-due-date").value;
    const priority = document.getElementById("task-priority").value;

    const task = {
        id: Date.now(),
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    renderTasks();

    taskForm.reset();
    taskModal.classList.add("hidden");
});

searchInput.addEventListener("input", function () {
    renderTasks();
});

renderTasks();