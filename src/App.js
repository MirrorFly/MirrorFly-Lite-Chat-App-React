import './App.css';
import { ChatApp } from "mirrorfly-uikit/dist"
import "mirrorfly-uikit/dist/assets/scss/bundle.css"
import { useState } from 'react';
import React from 'react';

function App() {
  const [number,setNumber] = useState("")
  const [isLogin,setisLogin] = useState(false)
  const licenceKey = ""  //use your license key

  React.useEffect(()=>{
    setNumber(localStorage.getItem("Number"))
    if(localStorage.getItem("Number"))
    {setisLogin(true)
    }
  },[])

  const logOut=()=>{
    localStorage.setItem("Number","");
    setisLogin(false)
    setNumber('')
  }

  const validateNumber = (e)=>{
    if(number !== ''){
    setisLogin(true)
    localStorage.setItem("Number",number);
    }}

return (
    <>
   {!isLogin && <form className="form" onSubmit={validateNumber}>
   <div className="login">
  <div class="imgcontainer">
  </div>
          <label className="label">Enter your phone Number: </label>
          <input
            type="text"
            name="phonenumber"
            id="Uname"
            className="input"
            placeholder="PhoneNumber"
            value={number}
            onChange={(e) =>{setNumber(e.target.value)}}
          /><br/><br/>
        <button type="submit" id="log">
          Login
        </button>
        </div>
      </form>
      }
      
      {isLogin && 
      
      <ChatApp
      width="100%" // custom width for parent container
      height ="100%"
      licenseKey={licenceKey}  
      userIdentifier={number} 
      isLogout={logOut}
      enableDeviceSize={true}
      isCallEnabled = {false} 
       />
      }
    
    </>
    );
}

export default App;