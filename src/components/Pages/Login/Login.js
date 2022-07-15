import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa"
import Footer from "../../Footer/Footer"
import "./Login.css";
//#6c0358b

const Login = () => {
    return (

<div className="all">
     <div className="main">

     <div className="container">
     
     <div className="form">
      
     <h3>LOG IN</h3>

      <form action="" method="POST">

      <p><label >USERNAME</label></p>

      <p><input type="text" maxlength="20" required></input></p>


      <p><label >PASSWORD</label></p>


      <p><input type="password" maxlength="6" required></input></p>


      <p className="rem"><input type="checkbox" className="chk"></input><span>KEEP ME SIGNED IN</span></p>

      <p><button className="btn">LOG IN</button></p>

      <p className="or">Or Continue With</p>

      <div className="continue">

      <p><button className="btns"><FaApple/>&nbsp;APPLE</button></p>

      <p><button className="btns"><FaGoogle/>&nbsp;GOOGLE</button></p>

      </div>

      <hr/>

      <p ><Link to="" className="for">Forgot Your Password ?</Link></p>

      </form>
      </div>

      <div className="rimg">
      <img src="./b.png" alt=""/>
      
      </div>
      </div>
     </div>

     <Footer/>
</div>
    );
}

export default Login