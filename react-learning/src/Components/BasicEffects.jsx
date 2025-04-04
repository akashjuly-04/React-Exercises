import React,{useEffect} from 'react'

const BasicEffects = () => {
  
   useEffect(()=>{
    console.log("Component Mounts")
   },[]) 

  return (
    <div>BasicEffects</div>
  )
}

export default BasicEffects