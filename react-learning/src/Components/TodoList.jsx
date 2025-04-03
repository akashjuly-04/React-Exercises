import React, { useState } from 'react'

const TodoList = () => {

    const [todo,setTodo]=useState([])
    const [inputValue,setInputValue]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodo([...todo,inputValue])
        setInputValue("")
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Your Name</label>
        <input 
            type="text" 
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
            placeholder='Enter Todo...'
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((t)=>(
            <li>
                {t}
            </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList