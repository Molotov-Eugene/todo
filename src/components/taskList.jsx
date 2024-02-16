import { TaskItem } from "./taskItem"

export const TaskList = ({ tasksList, removeTask, toggleTaskStatus }) => {
  return (
    <>
      { tasksList.map(task => <TaskItem key={task.id} task={task} removeTask={removeTask} toggleTaskStatus={toggleTaskStatus} />)}
    </>
  )
}

