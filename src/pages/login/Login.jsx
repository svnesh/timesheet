import { useContext } from "react";
import { useState } from "react"
import LoginForm from "../../components/login/LoginForm"
import { Context } from "../../context/context";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import "./login.scss";

export default function Login() {

  const navigate = useNavigate();
  const { dispatch, isfetching } = useContext(Context);

  const [values, setValues] = useState({
      email: "",
      password: ""
  })
  //const [error, setError] = useState(false);

  const inputs = [
    {
        id:1,
        name: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errorMessage: "Email or password is not valid",
        required:true
    },
    {
        id:2,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMessage: "Email or password is not valid",
        required:true
    },
  ]

  const handleChange = (e) =>{
    setValues({...values, [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    //setError(false);
    dispatch({type: "LOGIN_START"});

    await axios.post("api/users/login/", {
      user:{
        email: values.email,
        password: values.password,
      }
    },{
        withCredentials: true,
        headers: {'Content-Type': 'application/json'}
    })
    .then(response =>{
        const accessToken = response?.data?.user?.token;
        const username = response?.data?.user?.username;
        const resPay = {
            email: values.email,
            //password: values.password,
            username,
            accessToken,
        }
        dispatch({type: "LOGIN_SUCCESS", payload: resPay});
        navigate('/home');
    })
    .catch(err =>{
        //setError(false);
        dispatch({type: "LOGIN_FAILURE"});
    })
  };

  return (
    <div className='login'>
      <div className="logindiv">
        <p className="logintitle">Login</p>
        <form className="loginform" onSubmit={handleSubmit}>
          {inputs.map((input) =>(                
            <LoginForm key={input.id} {...input} values={values[input.name]} onChange={handleChange}></LoginForm>
          ))}
          <button className="loginbutton" disabled={isfetching}>Login</button>
        </form>
        <div className="registerbutton">
            New user? <a href="/register" className="registerlink">Register</a>
        </div>
      </div>                
    </div>
  )
}
