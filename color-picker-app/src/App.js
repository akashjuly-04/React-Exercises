import React,{useState} from 'react';
import './App.css';

function App() {

  const [color,setColor]=useState("#3498db")

  return (
    <div className="flex flex-col items-center justify-center min-h-screen transition-all duration-300" style={{backgroundColor:color}}>
       <h1 className="text-3xl font-bold text-white mb-6">Color Picker App</h1>

       <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} className="w-24 h-24 cursor-pointer border-2 border-white rounded-full shadow-lg"
      />

      <p className='text-xl text-white mt-4 font-semibold'>
        Selected Color: <span className='p-2 bg-white text-black rounded'>{color}</span>
      </p>

    </div>
  );
}

export default App;
