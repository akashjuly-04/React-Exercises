import React,{useState} from 'react'

const Profile = () => {

    const [profile,setProfile]=useState({
        name:"",
        age:""
    })

    const handleChange=(e)=>{
        const {name,value}=e.target
        setProfile((prevProfile)=>({
            ...prevProfile,[name]:value
        }))
    }

  return (
    <div>
        <label>Name:</label>
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder='Enter Your Name..'/>

        <label>Age:</label>
        <input type="Number"  name="age" value={profile.age} onChange={handleChange} placeholder='Enter Your Age..'/>

        <h1>Name:{profile.name}</h1>
        <h2>Age:{profile.age}</h2>
    </div>
  )
}

export default Profile