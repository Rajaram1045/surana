
//import react from "react";
import reactDom from "react-dom";
import logo from './images/surana Logo.jpeg';
import "./css/login-page.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom";

export default function Home(){
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  //const history = useHistory()

  const onSubmit=(e)=>{
    e.preventDefault()
    if(Username !=='' && Password !==''){
        if(Username === 'admin' && Password === 'admin'){
          Swal.fire({
            icon:"success",
            title:"Login",
            text:"Suceesfully Login"
          })
        }else{
          Swal.fire({
            icon:"warning",
            title:"Oops!",
            text:"Please Enter Correct Password"
          })
        }
 }
 else{
    Swal.fire({
        icon:"warning",
        title:"Oops!",
        text:"Please Fillout All Fields"
    })
 }
}
   return(
       <div>         
           <div className="login-container">
                <div className="box-container">
                    <div className="box">
                        <img src={logo} alt="Avatar" class="avatar" />
                        <Box  component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate  autoComplete="off" >
                          <TextField class="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root text-box"
                            name="user-name" id="outlined-basic"
                            label="Admin ID"
                            variant="outlined" 
                            onChange={(e)=>setUsername(e.target.value)} 
                          />
                          <TextField class="MuiFormControl-root MuiTextField-root css-1u3bzj6-MuiFormControl-root-MuiTextField-root text-box" 
                              name="password" 
                              type="password" 
                              id="filled-basic" 
                              label="Password" 
                              variant="outlined" 
                              onChange={(e)=>setPassword(e.target.value)} 
                          />
                      </Box>
                      <Button id="login-button" variant="contained" type="button"  onClick={onSubmit} >Login</Button>
                    </div>    
                </div>
           </div>
       </div>
   );
}

