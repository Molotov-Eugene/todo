import trashIcon from '../assets/svg/trash.svg';
export const TaskItem = ({ task, removeTask }) => {

  return (
    <div key={task.id} className='task'>
      <div className='checkBoxWrapper'>
        <input type='checkbox' className='taskCheckbox' />
      </div>
      <p className='taskText'>{task.text}</p>
      <button onClick={() => removeTask(task.id)} className='removeButton'><img src={trashIcon} alt='remove task' className='trashIcon' /></button>
    </div>
  )
}

