import React from 'react';
import Nav from '../Components/Nav';
import "./home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    return (
        <div>
            <Nav/>
            <h1 className='heading'>Hey there, welcome! Ready to dive in?</h1>
            <p className='p'>Register now and unlock a treasure trove of exclusive content and perks. Already one of us? Great! Log in and let the adventure continue. Don't forget to connect with us on social media for all the latest buss and insider updates. We're thrilled to have you on board and can't wait to hear from you!</p>
            <div className="button-container">
                <button onClick={() => navigate("/register")} className='btn btn-success'>Register now</button>
            </div>
        </div>
    );
};

export default Home;