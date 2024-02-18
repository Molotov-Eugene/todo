import { useState } from "react";

const getNextId = (function() {
  let id = 0;
  return function() {
    return id++;
  }
})();

export default initialState => {
  const [tasksList, setTasksList] = useState([]);


  const addTask = (taskText) => {
    const newTask = { id: getNextId(), text: taskText, isDone: false };
    setTasksList([newTask, ...tasksList]);
  }

  const removeTask = (id) => {
    const newTasksList = tasksList.filter(task => task.id != id);
    setTasksList(newTasksList);
  }

  const toggleTaskStatus = (id) => {
    const taskIndex = tasksList.indexOf(tasksList.find(task => task.id == id));
    tasksList[taskIndex].isDone = !tasksList[taskIndex].isDone;
    setTasksList(tasksList);
  }

  return {
    tasksList,
    addTask,
    removeTask,
    toggleTaskStatus,
  }
}
