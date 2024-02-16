import { TaskItem } from "./taskItem"

export const TaskList = ({ tasksList, removeTask }) => {
  return (
    <>
      { tasksList.map(task => <TaskItem key={task.id} task={task} removeTask={removeTask} />)}
    </>
  )
}

