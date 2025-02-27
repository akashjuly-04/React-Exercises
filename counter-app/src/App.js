import React,{useState} from "react";


function App() {

  const [count,setCount]=useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-xl mb-4">Count:{count}</p>

       <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={()=>setCount(count+1)}>Increment</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded ml-2" onClick={()=>setCount(count-1)}>Decrement</button>
       </div>
    </div>
  );
}

export default App;
