import Task from "./models/Task";

export default (io) => {
  io.on("connection", (socket) => {
    // Send all messages to the client
    const emitTasks = async () => {
      const tasks = await Task.find();
      io.emit("server:loadtasks", tasks);
    };
    emitTasks();

    socket.on("client:newtask", async (data) => {
      const newTask = new Task(data);
      const savedTask = await newTask.save();
      io.emit("server:newtask", savedTask);
    });

    socket.on("client:deletetask", async (taskId) => {
      await Task.findByIdAndDelete(taskId);
      emitTasks();
    });

    socket.on("client:gettask", async (taskId) => {
      const task = await Task.findById(taskId);
      socket.emit("server:selectedtask", task);
    });

    socket.on("client:updatetask", async (updatedTask) => {
      await Task.findByIdAndUpdate(updatedTask.id, {
        title: updatedTask.title,
        description: updatedTask.description,
      });
      emitTasks();
    });

    socket.on("disconnect", () => {
      console.log(socket.id, "disconnected");
    });
  });
};
