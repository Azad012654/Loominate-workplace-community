import React from 'react'
import './SignUp.css';
import  { useState } from 'react';
import axios from 'axios'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
 const SignUp = () => {
  const email = useSelector((state) => state.email);
  console.log(email);
  //Toast Message
  
  const [otp, setOtp] = useState('');
  const navigate =useNavigate();

  const showToastMessage = () => {
    toast.success('Email Verified !', {
        position: toast.POSITION.TOP_CENTER
    });
  };

  const showToastMessage2 = () => {
    toast.success('Wrong OTP, Try Again', {
        position: toast.POSITION.TOP_CENTER
    });
  };
  //Toast end here

  // Functions
  
  const handleVerifyOTP = async()=>{
    try{
     const response = await axios.get('http://localhost:3001/verifyOTP');
     const userOTP = response.data.OTP;
     if(parseInt(otp)===userOTP){
      console.log("Verified");
      showToastMessage();
      setTimeout(()=>{navigate('/userregistration')}, 4000);
      
     } else {
      showToastMessage2();
      console.log("WrongOTP")
     }
    } catch(err){
        console.log(err)
    }
  };

  return (
    
    <div id='main_container' style={{backgroundColor:'antiquewhite'}}>
    <div className='logo2'>
      <img src='https://gmail.loominate.app/static/media/mons-with-pot.58ac9558.svg' 
      width="288px" height="215px" alt='logo2'></img>
      </div>
      <div className='OTP'>
        
          {/* <div id="buttons">
            <button width="10px" height="10">Button1</button><button>Button2</button><button>Button3</button><button>Button4</button>
          </div> */}<div className='info'>
            <div>
          <h1>Enter Verification Code</h1>
          </div>
          <div>
          <p>Please type in the 4-digit code sent to your work email. If it does not appear in your Inbox, please check your Updates, Quarantined or Spam folders.</p>
          </div>
          </div>
          <div id='otpinput'>
          <OtpInput id="inputotp"
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
          </div>
          
          
          < button id="btn1" className='rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%' onClick={handleVerifyOTP}>Verify</button>
          
        </div>
        <ToastContainer />
      </div>
  )
}

export default SignUp


