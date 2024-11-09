import React from 'react'
import './Landing.css';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const navigatebtn = ()=>{
        navigate('/surveypage');
    }

  return (
    <>
    <h2>Code Inbound LLP Survey Form</h2>
    <hr/>

    <div className='centre_btn'>
        <button id="cen_btn" onClick={navigatebtn}>Start Survey</button>
    </div>
   
    </>
  )
}

export default Landing
