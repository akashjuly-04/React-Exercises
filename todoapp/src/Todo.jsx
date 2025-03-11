import React,{useState} from 'react'


const Todo = () => {

    const [todos,setTodos]=useState([]);
    const [task,setTask]=useState("");
    const [editIndex,setEditIndex]=useState(null);

    const handleAddOrEdit=()=>{
        if(task.trim()==="")return ;

        if(editIndex!==null){
            const updatedTodos=todos.map((todo,index)=>index===editIndex?task:todo)
            setTodos(updatedTodos)
            setEditIndex(null);
        }else{
            setTodos([...todos,task])
        }
        setTask("")
        
    }

    const deleteTodo=(index)=>{
        const newTodo=todos.filter((_,i)=> i!== index)
        setTodos(newTodo)
    }

    const handleEdit=(index)=>{
        setTask(todos[index])
        setEditIndex(index)
    }
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Todo App</h2>


        <div className="flex gap-2 mb-4">
            <input 
                type="text" 
                value={task} 
                onChange={(e)=>setTask(e.target.value)} 
                className="border p-2 w-full rounded"
                placeholder="Enter a Task..." />

            <button 
                onClick={handleAddOrEdit} 
                className={`px-4 py-2 rounded ${
                editIndex!==null? "bg-green-500":"bg-blue-500"}text-white
            }`}>
                {editIndex!==null?"save":"Add"}
            </button> 
        </div>

        <ul>
            {todos.map((todo,index)=> <>
            <li 
                key={index} 
                className="flex justify-between items-center bg-gray-100 p-2 my-2 rounded">
                    {todo}
                     
                    <div className='space-x-2'>
                        <button
                            onClick={()=>handleEdit(index)}
                            className='bg-yellow-500 text-white px-2 py-1 rounded'
                        >Edit</button>
                   <button
                     onClick={()=> deleteTodo(index)}
                     className="bg-red-500 text-white px-2 py-1 rounded"
                     >Delete</button></div> 
                    </li>
                </>
            )}
        </ul>

    </div>
  )
}

export default Todo