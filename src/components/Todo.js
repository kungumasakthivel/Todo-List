import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p 
      onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? 'completed task' : 'task'}`}
      >{task.task}</p>
      <div>
        <FontAwesomeIcon
        className='task'
        icon={faPenToSquare} 
        onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon 
        className='task'
        icon={faTrash}
        onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  )
}

export default Todo
