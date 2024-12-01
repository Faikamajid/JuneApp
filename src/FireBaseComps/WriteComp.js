import React, { useState } from 'react'
import app from "../firebaseConfig"
import {getDatabase,ref,set,push} from 'firebase/database'
import { TextField, Tooltip,Box } from "@mui/material";
import MyButton from '../MaterialUi/Buttons';

export default function WriteComp() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const saveData=async()=>{
    if(firstName!==''   && lastName !==''){
    //making connection to database
    const db=getDatabase(app);
    //creating subfolder in firebase database
    const newDocReference=push(ref(db,'/users'))
    set(newDocReference,{
      firstName:firstName,
      lastName:lastName

    }).then(()=>alert('User Created sucessfully, go to users Section')).catch((error)=> alert('error',error.message))
  }
  else{
    alert('Empty values not allowed')
  }
  }
  return (
  <Box>
      <b>write your details</b>
      <br/> <br/>
      {/* <label>First Name</label>
      <input type='text' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> */}
      <TextField
             id="outlined-helperText"
            variant="outlined"
            label="First Name"
            defaultValue={firstName}
            // helperText="Enter New Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
      <br/> <br/>
      {/* <label>Last Name</label>
      <input type='text' value={lastName} onChange={(e)=>setLastName(e.target.value)}/> */}
      <TextField
             id="outlined-helperText"
            variant="outlined"
            label="Last Name"
            defaultValue={lastName}
            // helperText="Enter New Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
     <br/> <br/>
      <MyButton variant="outlined" text='Add User'  color="secondary" size="large" action={saveData}/>
      {/* <button onClick={saveData}> Add User </button> */}
    
      </Box>
  )
}
