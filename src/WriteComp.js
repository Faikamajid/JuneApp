import React, { useState } from 'react'
import app from './firebaseConfig'
import {getDatabase,ref,set,push} from 'firebase/database'

export default function WriteComp() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const saveData=async()=>{
    //making connection to database
    const db=getDatabase(app);
    //creating subfolder in firebase database
    const newDocReference=push(ref(db,'/nature/fruits'))
    set(newDocReference,{
      fruitName:firstName,
      fruitDefinition:lastName

    }).then(()=>alert('data saved sucessfully')).catch((error)=> alert('error',error.message))

  }
  return (
    <div>
      <div>write your details</div>
      <label>First Name</label>
      <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      <label>Last Name</label>
      <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      <button onClick={saveData}> Save Data </button>
    </div>
  )
}
