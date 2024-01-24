import React, {useState} from 'react'

const EditTodoFrom = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handelSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handelSubmit}>
        <input 
        type='text' 
        value={value}
        className='todo-input'
        placeholder='Update task?'
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoFrom
