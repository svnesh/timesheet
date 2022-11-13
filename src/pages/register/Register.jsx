import axios from "axios"
import RegisterForm from "../../components/register/RegisterForm";
import { useState } from "react"
import "./register.scss";

export default function Register() {

  const [values, setValues] = useState({
    email:'',
    username:'',
    password:''
})
  const [error, setError] = useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(false);
    try{
        const res = await axios.post("api/users/register/",{
            user:{
              email:values.email,
              username:values.username,
              password:values.password,
            }
        });
        res.data && window.location.replace("/Login");
    }catch(err){
        setError(true);
    }
  }

  const onChange = (e) =>{
    setValues({ ...values, [e.target.name]: e.target.value});
  }

  const inputs = [
    {
        id:1,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address",
        label: "Email",
        required: true
    },
    {
        id:2,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage: "Username should be 3-16 character length",
        label: "Username",
        pattern: "^[a-zA-Z0-9]{3,16}$",
        required: true
    },
    {
        id:3,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Password should be minimum 8-20 character with 1 letter, 1 number and 1 special character",
        label: "Password",
        pattern: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
        required: true
    },
  ]
  return (
    <div className='register'>
        <div className="registerdiv">
        <span className="registertitle">Register</span>
        <form className="registerform" onSubmit={handleSubmit}>
          {inputs.map((input) => (
              <RegisterForm key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button>Submit</button>
          {error && <p style={{color:"red"}}>Something went wrong!</p>}
        </form>
        <div className="loginbutton">
            Already registered? <a href="/Login" className="loginlink">Login</a>
        </div>        
        </div>
    </div>
  )
}
