import React from "react";

const Greeting=()=>{
    
    const GreetMsg="Hi, Welcome!"
    const d=new Date()

    return(
        <div>
            <h1>{GreetMsg}</h1>
            <p>Date:{d.getDate()}</p>
        </div>
    )
}

export default Greeting
