import React, { useRef } from 'react'

function Signup() {
       const fname=useRef()
       const mobile=useRef()
       const email=useRef()
       const dob=useRef()
       const user=useRef()
       const pass=useRef()
       function adduser(){
        const newuser={}
        // newuser['username']=username.current.value 
        // newuser['password']=password.current.value
        console.log(typeof dob.current.value)
       }
  return (
    <div className='container'>
        <input placeholder='Full Name'></input>
        <input placeholder='Mobile'></input>
        <input placeholder='email' type="email"></input>
        <input ref={dob} placeholder='date of birth' type="date"></input>
        <input ref={user} name="username" placeholder="username"></input>
        <input ref={pass} name="password" placeholder="password"></input>
        <button onClick={adduser}>Submit</button>
    </div>
  )
}

export default Signup