import React from 'react'
import {useState} from 'react';
import Redirect from 'react';
function AnimeList () {
        const [user,setUser]=useState({name:"",email:"",password:""});
        let name,value;
        const inputhandle=(e)=>{
            name=e.target.name;
            value=e.target.value;
            setUser({...user,[name]:value});
        }
        const submitdata=()=>{
            console.log("data submitting");
            fetch("http://localhost:3000/create", {
     
                // Adding method type
                method: "POST",
                 
                // Adding body or contents to send
                body: JSON.stringify({
                    user:user
                }),
                 
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
             
            // Converting to JSON
            .then(response => response.json())
             
            // Displaying results to console
            .then(json => console.log(json));
            
        
    
        }
    
                    return (
            <>
              <div class="user_register">
                <form method="POST" action="http://localhost:3000/create" >
                    <label>Full Name</label>
                    <input value={user.name} onChange={inputhandle} name="name" id="name" type="text" />
                    <br />

                    <label>Email Address</label>
                    <input  value={user.email} onChange={inputhandle} name="email" id="email" type="email" />
                    <br />

                    <label>Password</label>
                    <input  value={user.password} onChange={inputhandle} name="password" id="password" type="password" />
                    <br />

                    {/* <div class="checkbox">
                        <input id="send_updates" type="checkbox" />
                        <label for="send_updates">Send me occasional email updates</label>
                    </div> */}

                    {/* <div class="action_btns"> */}
                        
                        {/* <div class="one_half last"><button onClick={submitdata} class="btn btn_red">Register</button></div> */}
                        <input  type="submit" value="Submit"></input>
                        
                    {/* </div> */}
                </form>
            </div>
        
    
            </>
        )

}

export default AnimeList
