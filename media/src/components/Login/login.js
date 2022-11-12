import React from "react";
import { useRef } from "react";
import "./styles.css" 
import axios from "axios"
 function Login(){
      const user=useRef()
      const pass=useRef()
      async function check(){
        const username=user.current.value 
        const password=pass.current.value 
        const newuser={}
        newuser['username']=username 
        newuser['password']=password
        console.log("so users ",newuser)
        let feed= await axios.post("http://localhost:4000/users/adduser",newuser)
        if(feed){
          console.log("added user to database")
        }
        else{
          console.log("facing problem in adding user to database")
        }
      }
      return(
          <div className="login-container">
              <div className="userdetails">
                    <input ref={user} name="username" placeholder="username"></input>
                    <input ref={pass} name="password" placeholder="password"></input>
              </div>
              <div className="ending">
                 <div className="submit">
                    <button onClick={check}>Submit</button> 
                 </div>
                 <div className="Forgot">
                   <button>Forgot</button>
                 </div>
              </div>
               
          </div>
      )
}
export default Login