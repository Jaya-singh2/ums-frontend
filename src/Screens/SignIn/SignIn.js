
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  let Navigate = useNavigate();
  const [role, setRole]=useState('')

  const handleLogin=()=>{
      if(role==='student'){
        Navigate("/student-dashboard");
        return;
      }
      if(role==='faculty'){
        Navigate("/faculty-dashboard");
        return;
      }
      if(role==='admin'){
        Navigate("/admin/dashboard");
        return;
      }
  }
  
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        {/* Icon */}
        <div className="fadeIn first mt-20 mb-20">
          <img src="/Assests/images/logo-wide.png" id="icon" alt="User Icon" />
        </div>
        {/* Login Form */}
        <form style={{textAlign:'center'}}>
          <input
            type="text"
            id="login"
            className="fadeIn second loginInput"
            name="login"
            placeholder="username"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third loginInput"
            name="login"
            placeholder="password"
          />
          <select  className="fadeIn third loginInput" onChange={(e)=>{localStorage.setItem('role',e.target.value);setRole(e.target.value)}}>
            <option value=''>Select Role</option>
            <option value='student'>Student</option>
            <option value='faculty'>Faculty</option>
            <option value='admin'>Admin</option>
          </select>
          <input
            type="button"
            className="fadeIn fourth loginBtn"
            defaultValue="Sign In"
            onClick={handleLogin}
          />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="/#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
