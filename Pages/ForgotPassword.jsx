import React, { useState } from 'react';
import "./fp.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const[email,setEmail]=useState("")
    const[msg,setMsg]=useState("")
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const payload={email}

        await axios.post("https://backend-day-5-task.onrender.com/api/forgot-password", payload)
        .then((res) => {
            setMsg(res.data.message);
        })
        .catch((err) => {
            console.log(err);
            setMsg("Invalid credentials..!");
            setEmail("")
        });
    
    }
    return (
        <div className=' container p-5 mt-5'>
            <form onSubmit={handleSubmit}>
            <h3 className='text-center mb-2 p-2'>Forgot password</h3>
            <div className="form-group mt-3">
                <label htmlFor='email'><h6>Email:</h6></label>
                <input type="email" required value={email} name="email" className="form-control" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
                                </div>
                                <div className=' one text-center text-muted'>Please wait for a few seconds until notified...</div>
            <div className='text-center'>
            <button className="btn btn-primary btn-block mt-3" type='submit' >Submit</button>
            </div>
            <h6 className='text-center'>{msg}</h6>
            <div className='text-center'>
            <button onClick={()=>navigate("/login")} className='btn btn-warning'>Login</button>
            </div>
            </form>
        </div>
    );
};

export default ForgotPassword;