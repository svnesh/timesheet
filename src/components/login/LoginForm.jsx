import { useState } from "react";
import "./loginform.scss"

export default function LoginForm(props) {

    const [focused, setFocused] = useState(false);
    const { label, id, errorMessage, onChange, ...inputProps } = props
    
    const handleBlur = (e) =>{
        setFocused(true);
    }

  return (
    <div className="formInput">
        <label>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleBlur} focused={focused.toString()}></input>
        <span>{errorMessage}</span>
    </div>
  )
}
