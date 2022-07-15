import React from "react";
// import { FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
import { Link } from "react-router-dom";



const SignUp = () => {
  return (
    <div className="main">
    
  <div className="topic">
        <h3>Sign Up</h3>
        </div>

<form action="" method=""> 
    
        <div className="select">
    
        <h6><Link to="/" className="link">Phone</Link></h6>
    
        <h6><Link to="/" className="link">Email</Link></h6>
    
        </div>
    
        <div className="inputs">
        
    
        <div className="label">
        <label>Phone</label>
        </div>
    
            <div className="input-box"> 
              <input type="text" placeholder="Phone" required></input>
              </div>
    
    
        
        <div className="label">
        <label>Password</label>
        </div>
    
      <div className="input-box">
      <input type="password" placeholder="Password" required></input>
      </div>
      
        </div>
    
        <div className="check">
        <input type="checkbox"/><span>I have read and agree to the <Link to="" className="lin">Terms of Use</Link></span>
        </div>
        
    
    
        <div className="but">
        
        <button className="btn">Sign Up</button>
        
        
        </div>
    </form>  
  
  </div>
  );
}

export default SignUp