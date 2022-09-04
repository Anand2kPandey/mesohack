import React from 'react';
import { useState } from 'react';

function AnimeList () {
    const [user,setUser]=useState({email:"",password:""});
    let name,value;
    const inputhandle=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }
    let handlelogin=(e)=>{
        alert("Login Successfull......");
        // const xhttp = new XMLHttpRequest();
        // let params=`email=${user.email}&password=${user.password}`;
        // xhttp.onload = function() {
           
        //     alert(this.responseText);
        // }
        // xhttp.open("POST", "http://localhost:3000/authen");
        // xhttp.send(params);
    //    let res= fetch("http://localhost:3000/authen", {
     
    //             // Adding method type
    //             method: "POST",
                 
    //             // Adding body or contents to send
    //             body: JSON.stringify({
    //                 user:user
    //             }),
                 
    //             // Adding headers to the request
    //             headers: {
    //                 "Content-type": "application/json; charset=UTF-8"
    //             }
    //         })
             
    //         // Converting to JSON
    //         .then(response => response.json())
             
    //         // Displaying results to console
    //         alert(JSON.stringify(res));
    //         if(res.message==true){
    //             alert("Success");
    //         }else{
    //             alert("Failed");
    //         }
         
    }
        return (
            <>
             <div class="user_login">
                <form >
                    <label>Email / Username</label>
                    <input value={user.email} onChange={inputhandle} name="email" type="text" />
                    <br />

                    <label>Password</label>
                    <input value={user.password} onChange={inputhandle} name="password" type="password" />
                    <br />

                    <div class="checkbox">
                        <input id="remember" type="checkbox" />
                        <label for="remember">Remember me on this computer</label>
                    </div>

                    <div class="action_btns">
                        
                        {/* <div class="one_half last"><a href="#" style={{justifyContent:"center",alignItems:"center"}}class="btn btn_red">Login</a></div> */}
                        <button onClick={handlelogin}>Login</button>
                    </div>
                </form>

                <a href="#" class="forgot_password">Forgot password?</a>
            </div>
            </>
        )

}

export default AnimeList
