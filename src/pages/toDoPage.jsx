import { useEffect, useRef, useState } from "react"
import { TaskList } from "../components/taskList";
// import { tasksList, addTask, removeTask, toggleTaskStatus } from "../utils/taskHandlers";
import taskHandlers from '../utils/taskHandlers';

export const ToDoPage = () => {
  const { tasksList, addTask, removeTask, toggleTaskStatus } = taskHandlers([])
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const inputHandler = ({ target: { value } }) => {
    setInput(value);
  }

  const addTaskHandler = (e) => {
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
        <form onSubmit={(e) => addTaskHandler(e)}>
          <div id='addTask'>
            <input type='text' id='taskInput' name='taskInput' onChange={(e) => inputHandler(e)} value={input} ref={inputRef} placeholder='Add new task...' />
            <button type='submit' id='addButton' disabled={!input.trim()}> Add </button>
          </div>
        </form>
        <div id='taskList'>
          <TaskList tasksList={tasksList} removeTask={removeTask} toggleTaskStatus={toggleTaskStatus} />
        </div>
      </main>
    </>
  )
}
