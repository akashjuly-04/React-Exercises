import React,{useState} from 'react'

const Todo = () => {

    const [todos,setTodos]=useState([]);
    const [task,setTask]=useState("");

    const addTodo=()=>{
        setTodos([...todos,task])
        setTask("")
    }

    const deleteTodo=(index)=>{
        const newTodo=todos.filter((_,i)=> i!== index)
        setTodos(newTodo)
    }
  return (
    <div>
        <h2>Todo App</h2>
        <div>
            <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Enter a Task..." />
            <button onClick={addTodo}>Add</button>
        </div>

        <ul>
            {todos.map((todo,index)=> <><li key={index}>{todo}</li><button onClick={()=> deleteTodo(index)}>Delete</button></>
            
            )}
        </ul>

    </div>
  )
}

export default Todo