import { useEffect, useRef, useState } from "react"
import { TaskList } from "../components/taskList";

const getNextId = (function() {
  let id = 0;
  return function() {
    return id++;
  }
})();

export const ToDoPage = () => {

  const [input, setInput] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })


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

  const inputHandler = ({ target: { value } }) => {
    setInput(value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(input)
    setInput('')
  }

  return (
    <>
      <header>
        <h1>ToDo App</h1>
      </header>
      <main>
        <form onSubmit={(e) => onSubmit(e)}>
          <div id='addTask'>
            <input type='text' id='taskInput' name='taskInput' onChange={(e) => inputHandler(e)} value={input} ref={inputRef} placeholder='Add new task...' />
            <button type='submit' id='addButton' disabled={!input}> Add </button>
          </div>
        </form>
        <div id='taskList'>
          <TaskList tasksList={tasksList} removeTask={removeTask} toggleTaskStatus={toggleTaskStatus}/>
        </div>
      </main>
    </>
  )
}
