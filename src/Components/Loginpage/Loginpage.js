import React, { useState } from 'react'
import './Loginpage.css';
import {Modal} from 'antd';
import { useNavigate } from 'react-router-dom';
import {setEmail} from '../../Redux/emailSlice';
import { useDispatch } from 'react-redux';
export const Loginpage = () => {
  const [changeButton, setchangeButton]=useState(false);
  const [changeButton2, setchangeButton2]=useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const [email,setemail] = useState('');
  const [message,setmessage]=useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [username,setusername] = useState("");
  // const [password, setpassword]=useState("");
  dispatch(setEmail(email))
  const handleEmailChange = (event) =>{
    setemail(event.target.value)
    
  }

  const handleEmailSubmit = async(event)=>{
    console.log("Email Sent")
    event.preventDefault();
    const response = await fetch('http://localhost:3001/register',{
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({ email: email })
    }) 
    
    const data = await response.json();
    const message = data.Message;
    if(message){
      console.log("Email Id already present")
      setmessage(message)
    } else {
      navigate("/signup");  
    }
  }

  const isEmailValid = email !== '';
  const handleFormChange = () =>{
    setchangeButton(true)
    setchangeButton2(false)
  }

  const handleFormChange2 = () =>{
    setchangeButton(false)
    setchangeButton2(true)
  }
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setIsModalOpen(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const showModal3 = () => {
    setIsModalOpen3(true);
  };

  const handleOk3 = () => {
    setIsModalOpen3(false);
  };

  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };

  

  return (
    <div className="background">
      
      <div className='imagecontainer'>
        <div className='textContainer'>
        <h1 className='message1'>Loominate</h1>
        <h1 className='message2'>Your Workplace Community !</h1>
        </div>
        <img className='image1' src='https://soombo.loominate.app/static/media/new3monsters.afd23f01.png' alt="loominate-logo"></img>
        </div>
        <div className='componentContainer'>
         <div className="button_container"> 
          <button id='btn1' onClick={handleFormChange2}>Sign In</button><button id='btn2' onClick={handleFormChange}>Signup</button>
         </div>
         
         { changeButton &&(

          // SIGN UP FORM
          <form className='signin'> 
           <h1>Join Your Collegue</h1><br></br><br></br>
           
          <label>Work email</label> <br></br><br></br>
          <input type="text" placeholder='Example : yourname@refactoracademy.com'  required value={email} onChange={handleEmailChange}></input>
          <br></br><br></br>

                     {/* Modals*/}
          <div className="modals">
           
           <div className='para'>
          <p>🧙‍♂️ Your work email is only used to confirm which space you belong to.</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="info" width="30px" height="30px" onClick={showModal}><path d="M50.5 84.6c18.8 0 34.1-15.3 34.1-34.1S69.3 16.4 50.5 16.4 16.4 31.7 16.4 50.5s15.3 34.1 34.1 34.1zm0-63.4c16.1 0 29.3 13.1 29.3 29.3S66.6 79.8 50.5 79.8 21.2 66.6 21.2 50.5s13.2-29.3 29.3-29.3z"></path><path d="M44.8 65.5c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h15.8c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4h-5.5V44.3c0-1.3-1.1-2.4-2.4-2.4h-7.9c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h5.5v18.8h-5.5z" ></path><circle cx="49.4" cy="34" r="3.9"></circle></svg>
          </div>
          <Modal  title="🧙‍♂️ Colleagues Only" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} height="350px" width="800px" >
          <p>Loominate is a place for coworkers of the same organization. We group colleagues into the same private space (eg. acme.loominate.app) based on the work email used during sign-up (@acme.com).</p>
          <br></br>
          <p>All users go through the same verification process.</p>
          <br></br>
          <p>Note: Loominate is an independent, employee-driven platform and is not affiliated to your company or organization.</p>
          </Modal>
          
          <br></br>
          <div className='para'>
          <p>🔐 Your identity is protected</p><svg  style={{ display: "inline-block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="info" width="30px" height="30px" onClick={showModal2}><path d="M50.5 84.6c18.8 0 34.1-15.3 34.1-34.1S69.3 16.4 50.5 16.4 16.4 31.7 16.4 50.5s15.3 34.1 34.1 34.1zm0-63.4c16.1 0 29.3 13.1 29.3 29.3S66.6 79.8 50.5 79.8 21.2 66.6 21.2 50.5s13.2-29.3 29.3-29.3z" ></path><path d="M44.8 65.5c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h15.8c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4h-5.5V44.3c0-1.3-1.1-2.4-2.4-2.4h-7.9c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h5.5v18.8h-5.5z" ></path><circle cx="49.4" cy="34" r="3.9"></circle></svg>
          </div>

          <Modal  title="🔐 Safety" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
          <p>Your work email is immediately one-way hashed and held separately from the account that you are about to create.</p>
          <br></br>
          <p>This means that there is no way for your organization to trace your username or activity back to your work email.</p>
          <br></br>
          <p>Our secure system provides the true psychological safety required for colleagues to speak openly and honestly.</p>
          </Modal>
          <br></br>
          
          <div className='para'>
          <p>🦄 Just be yourself... and get rewarded for it!</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="info" width="30px" height="30px" onClick={showModal3}><path d="M50.5 84.6c18.8 0 34.1-15.3 34.1-34.1S69.3 16.4 50.5 16.4 16.4 31.7 16.4 50.5s15.3 34.1 34.1 34.1zm0-63.4c16.1 0 29.3 13.1 29.3 29.3S66.6 79.8 50.5 79.8 21.2 66.6 21.2 50.5s13.2-29.3 29.3-29.3z" ></path><path d="M44.8 65.5c-1.3 0-2.4 1.1-2.4 2.4 0 1.3 1.1 2.4 2.4 2.4h15.8c1.3 0 2.4-1.1 2.4-2.4 0-1.3-1.1-2.4-2.4-2.4h-5.5V44.3c0-1.3-1.1-2.4-2.4-2.4h-7.9c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4h5.5v18.8h-5.5z" ></path><circle cx="49.4" cy="34" r="3.9"></circle></svg>
          </div>
          
          <Modal title="🦄 The only place to just be yourself" open={isModalOpen3} onOk={handleOk3} onCancel={handleCancel3}>
        <p>Loominate is an alias-based platform where staff can...</p>
          <li>Connect across hierarchies and divisions to trade battle stories and exchange thoughts on company issues.</li>
          <br></br>
          <li>Get honest answers about layoffs, mental health, salaries, and career progression.</li>
          <br></br>
          <li>Have a voice and be counted by joining staff campaigns and petitions - bring light to widespread concerns or make a brilliant staff idea go viral so that leaders sit up and listen!</li>
          <br></br>
          <li>Be vulnerable - speak up on your struggles and get upvoted support from colleagues who have been through it.</li>
          <br></br>
          <li>Most importantly, earn rewards and reputation for creating a kinder, more joyful workplace. Join to see how!</li>
        </Modal>
          </div>
         <br></br><br></br>
         <button type='submit' className='signup_btn' disabled={!isEmailValid} onClick={handleEmailSubmit}>Verify</button>
         <div>
         <span className='spanMessage'>{message}</span>
         </div>
         
        </form> )}
         { changeButton2 &&(

          //Sign In Form
           <form action='#'  className='signin'>
           <h1 className="form_caption">soombo Coworker's Community</h1>
           <br></br>
           <label>Username :</label> <br></br>
           <input type="text" placeholder='your Pseudoname'  required></input>
           <br></br><br></br>
           <label>Pasword :</label><br></br>
          <input type='password' placeholder='your password' required ></input><br></br>
          <br></br>
          <a id="forgetpass" href="#">Forget Password ?</a>
          <br></br><br></br><br></br><br></br>
          <button type='submit' className='signup_btn'>Next</button>
          
         </form>
         )
          }
        </div>
    </div>
  )
}

