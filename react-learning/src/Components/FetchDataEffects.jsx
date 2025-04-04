import React, { useState,useEffect } from 'react'

const FetchDataEffects = () => {

    const [data,setData]=useState([])

    useEffect(()=>{
        getData();
    },[])

    const getData= async ()=>{
        const res= await fetch("https://jsonplaceholder.typicode.com/posts")
        const datas=await res.json();
        setData(datas)
    }

  return (
    <div>
        
       <ul> {data.map((d,index)=>(
            <li key={index}>{d.title}</li>
        ))}</ul>
    </div>
  )
}

export default FetchDataEffects