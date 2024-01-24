import React, {useState} from 'react'

const TodoFrom = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handelSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handelSubmit}>
        <input 
        type='text' 
        value={value}
        className='todo-input'
        placeholder='What is the task?'
        onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoFrom
