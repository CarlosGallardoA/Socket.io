import { saveTask, deleteTask, getTaskById, updateTask } from "./sockets.js";
const taskList = document.querySelector("#tareas");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
let saveId = "";
const taskUI = (task) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="card card-body rounded-0 animate__animated animate__fadeInUp mb-2">
      <div class="d-flex justify-content-between">
          <h1 class="card-title h3">${task.title}</h1>
          <div>
              <button class="btn btn-secondary update" data-id="${task._id}"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="btn btn-danger delete" data-id="${task._id}"><i class="fa-solid fa-trash"></i></button>
          </div>
      </div>
      <p>${task.description}</p>
  </div> `;
  const btnDelete = div.querySelector(".delete");
  const btnUpdate = div.querySelector(".update");
  btnDelete.addEventListener("click", async (e) => {
    deleteTask(btnDelete.dataset.id);
  });
  btnUpdate.addEventListener("click", async (e) => {
    getTaskById(btnUpdate.dataset.id);
  });

  return div;
};
export const filterForm = (task) => {
  title.value = task.title;
  description.value = task.description;
  saveId = task._id;
};
export const formSubmit = (e) => {
  e.preventDefault();
  if (saveId) {
    updateTask(saveId, title.value, description.value);
  } else {
    saveTask(title.value, description.value);
  }
  title.value = "";
  description.value = "";
  saveId = "";
};
export const renderTask = (tasks) => {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    taskList.append(taskUI(task));
  });
};
export const appendTask = (task) => {
  taskList.append(taskUI(task));
};
