import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm(){
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        checkbox: false,
    });
    const [errors, setErrors] = useState({
        name: null,
        username: null,
        email: null,
        mobile: null,
        checkbox: null,
    });
    const handleChange = (e) =>{
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const handleSignUp = () => {
        let isErrors = false;
        if(formValues.name.trim().length === 0 ){
            setErrors((prev)=>({...prev, name: "Name is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev, name: null}));
        }
        if(formValues.username.trim().length === 0 ){
            setErrors((prev)=>({...prev, username: "UserName is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev, username: null}));
        }
        if(formValues.email.trim().length === 0 ){
            setErrors((prev)=>({...prev, email: "Email is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev, email: null}));
        }
        if(formValues.mobile.trim().length === 0 ){
            setErrors((prev)=>({...prev, mobile: "Mobile is required"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev, mobile: null}));
        }
        if(formValues.checkbox === false ){
            setErrors((prev)=>({...prev, checkbox: "Please accept the terms and conditions!"}));
            isErrors = true;
        }else{
            setErrors((prev) => ({...prev, checkbox: null}));
        }
        console.log(isErrors, "isErrors");
        if(!isErrors){
            alert("Successfully Registered!");
            navigate("/movies");
        }
    };
    return (
        <>
            <input type="text" placeholder="Name" value={formValues.name} onChange={handleChange} name="name"/>
            {errors.name ? <p style={{color:"red"}}>{errors.name}</p> : <></>}
            <input type="text" placeholder="UserName" value={formValues.username} onChange={handleChange} name="username"/>
            {errors.username ? <p style={{color:"red"}}>{errors.username}</p> : <></>}
            <input type="email" placeholder="Email" value={formValues.email} onChange={handleChange} name="email"/>
            {errors.email ? <p style={{color:"red"}}>{errors.email}</p> : <></>}
            <input type="text" placeholder="Mobile" value={formValues.mobile} onChange={handleChange} name="mobile"/>
            {errors.mobile ? <p style={{color:"red"}}>{errors.mobile}</p> : <></>}
            <input type="checkbox" id="checkbox" name="checkbox" value={formValues.checkbox} onChange={handleChange}/>
            <label htmlFor="checkbox">Share my registration with data with SuperApp</label>
            {errors.checkbox ? <p style={{color:"red"}}>{errors.checkbox}</p> : <></>}
            <button onClick={handleSignUp}>Sign Up</button>
        </>
    );
}