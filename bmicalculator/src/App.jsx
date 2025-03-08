import React,{ useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight]=useState("")
  const [height,setHeight]=useState("")
  const [bmi,setBmi]=useState(null);
  const [message,setMessage]=useState("")

  const calculateBMI=()=>{
    if(!weight || !height){
      setMessage("Please enter valid weight and height")
      return;
    }
  

  const heightInMeters=height/100;
  const bmiValue=(weight/(heightInMeters*heightInMeters)).toFixed(2);
  setBmi(bmiValue)

  if(bmiValue<18.5){
    setMessage("UnderWeight")
  }else if(bmiValue>=18.5 && bmiValue <24.9){
    setMessage("Normal weight")
  }else if(bmiValue>=25 && bmiValue<29.9){
    setMessage("OverWeight")
  }else{
    setMessage("Obese")
  }
} 

  return (
    <>
      <div className="flex flex-xol items-center justify-center h-screen bg-gray-200 p-4">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className='text-xl font-bold mb-4 text-center'>BMI Calculator</h2>
               <input
                  type="number"
                  placeholder='Weight (Kg)'
                  className="w-full p-2 border rounded mb-2"
                  value={weight}
                  onChange={(e)=>setWeight(e.target.value)}
                />
               <input 
                  type="number"
                  placeholder='Height (cm)'
                  className='w-full p-2 border rounded mb-4'
                  value={height}
                  onChange={(e)=>setHeight(e.target.value)}
               />
               <button
                  className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
                  onClick={calculateBMI}
                >
                  Calculate BMI
                </button>
                {bmi &&(
                  <div className="mt-4 text-center">
                    <p  className="text-lg font-semibold">Your BMI:{bmi}</p>
                    <p  className='text-sm text-gray-600'>Status:{message}</p>
                  </div>
                )}
        </div>

      </div>
       
    </>
  )
}

export default App
