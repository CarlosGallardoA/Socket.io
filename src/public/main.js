import { loadTasks, onNewTask, selectedTask } from "./sockets.js";
import { formSubmit, renderTask, appendTask, filterForm } from "./ui.js";
onNewTask(appendTask);
loadTasks(renderTask);
selectedTask(filterForm);
const taskForm = document.querySelector("#task-form");

taskForm.addEventListener("submit", formSubmit);
