
import react from "react";
import reactDom from "react-dom";
// import logo from './logo.svg';
import "./css/login-page.css";
import logo from './logo.svg';

function Login(){
   return(
       
       <form style={{padding :"5%" }}>
           <div className="container-box>">
       <h3>Sign In</h3>
       <div className="imgcontainer">
           <img src={logo} alt="Avatar" className="avatar" />
       </div>
       <div className="container">
           <label for="uname"><b>Username</b></label>
           <input type="text" placeholder="Enter Username" name="uname" required />
           <label for="psw"><b>Password</b></label>
           <input type="password" placeholder="Enter Password" name="psw" required />
       </div>      
       <button type="submit">Login</button>  
       </div>
       </form>
   );
}

export default Login;