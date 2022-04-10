const socket = io();
export const loadTasks = (callback) => {
  socket.on("server:loadtasks", callback);
};
export const saveTask = (title, description) => {
  socket.emit("client:newtask", { title, description });
};
export const onNewTask = (callback) => {
  socket.on("server:newtask", callback);
};
export const deleteTask = (taskId) => {
  socket.emit("client:deletetask", taskId);
};
export const getTaskById = (taskId) => {
  socket.emit("client:gettask", taskId);
};
export const selectedTask = (callback) => {
  socket.on("server:selectedtask", callback);
};
export const updateTask = (id, title, description) => {
  socket.emit("client:updatetask", { id, title, description });
};
