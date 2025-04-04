import React, { useState,useEffect } from 'react'

const CounterEffects = () => {

    const [count,setCount]=useState(0)

    useEffect(()=>{
      
        document.title=`Count:${count}`
    },[count])

  return (
    <div>
       <h3>Count:{count}</h3>
       <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  )
}

export default CounterEffects