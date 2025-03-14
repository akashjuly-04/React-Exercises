import React,{useState} from "react";


export default function Question({data,onAnswer}){
    return(
        <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semiofold mb-3">{data.question}</h2>
            <div className="grid gap-2">
                {data.options.map((option,index)=>(
                    <button 
                        key={index}
                        onClick={()=>onAnswer(option)}
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >{option}</button>
                ))}
            </div>
        </div>
    )
}