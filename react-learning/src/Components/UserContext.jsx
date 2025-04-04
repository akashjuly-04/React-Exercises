import { createContext,useState} from "react";
import React from 'react'

const UserContext = createContext()

const Userprovider=({children})=>{
    const [user,setuser]=useState({name:"Akash"})
   
    const updateUser=(newName)=>{
        setuser({name:newName})
    }


    return <UserContext.Provider value={{user,updateUser}}>
        {children}
    </UserContext.Provider>
}

    

export  {UserContext,Userprovider}