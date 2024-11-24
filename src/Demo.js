import React, { useState } from 'react'

export default function Demo() {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [password,setPassword]=useState('')

 const logValues=()=>{

  if(email.includes('@')){
console.log('email very')
  }
  if(password.length>=6){
    if(password.length>0 && password[0].toUpperCase()===password[0]){
      console.log('2nd case')
    }
    console.log("pass 1st case")
  }
  
    console.log(name,email,password)

  

 }
  const resetVlaues=()=>{
    setEmail('')
    setName('')
    setPassword('')

  }
  return (
    <div>
      {/* //for display purpose */}
    
      {/* {email}{name}{password} */}
      {/* <form> */}


      {/* emai should have @
      password contaion 6 letters and 1st letr uppercase */}
        <div>
        <label for="username">User Name</label>
        <input  type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
      <div>
        <label for="email">User Email</label>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div>
        <label for="password">password</label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </div>

        <button onClick={()=>{resetVlaues()}}>Reset</button>
        <button onClick={()=>{logValues()}}>submit</button>
        



      {/* </form> */}
      
    </div>
  )
}



//  username Email, password,