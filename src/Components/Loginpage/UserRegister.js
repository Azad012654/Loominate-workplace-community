import React from 'react'
// import './UserRegister.css';
import './UserRegister.css';
import {Modal} from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const UserRegister = () => {

  const avatar =[
    'https://gmail.loominate.app/static/media/avatar1.c1ae5e66.png',
    'https://gmail.loominate.app/static/media/avatar2.9555ff10.png',
    'https://gmail.loominate.app/static/media/avatar3.9d063941.png',
    'https://gmail.loominate.app/static/media/avatar4.c2d5bd71.png',
    'https://gmail.loominate.app/static/media/avatar5.95134f95.png',
    'https://gmail.loominate.app/static/media/avatar6.ecbd59eb.png',
    'https://gmail.loominate.app/static/media/avatar7.71317072.png',
    'https://gmail.loominate.app/static/media/avatar9.740e86ee.png',
    'https://gmail.loominate.app/static/media/avatar10.fbb0add0.png',
    'https://gmail.loominate.app/static/media/avatar11.f3713fd6.png',
    'https://gmail.loominate.app/static/media/avatar12.1dcaabee.png',
    'https://gmail.loominate.app/static/media/avatar13.86350798.png',
    'https://gmail.loominate.app/static/media/avatar14.b79ef3ff.png',
    'https://gmail.loominate.app/static/media/avatar15.43ae6bcb.png',
    'https://gmail.loominate.app/static/media/avatar8.9199c4e1.png'

  ]
  const receivedEmail = useSelector((state) => state.email);
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Logo, setLogo]=useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel=()=>{
    setIsModalOpen(false)
  }

  const handleUsernameChange = (event)=>{
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event)=>{
    setPassword(event.target.value);
  }

  const handleLogoChange = (avatars) => {
    setLogo(avatars)
  }

  const handleCreateAccount = async() =>{
    try{
      console.log(Username)
      console.log(Password)
      console.log(Logo)
    await axios.post('http://localhost:3001/user-registration',
    { email : receivedEmail,
      username : Username,
      password : Password,
      logo : Logo  
    }
    );
    console.log("User Data Send Successfully")
  } catch(error){
    console.log("erro detected")
  }

  }
  return (
    <div className='main'>
        <div className='logo'>
            <img src='https://gmail.loominate.app/static/media/terms-monster.8eee51cb.png' width="288px" height="215px" alt="monster_logo" ></img>
        </div>
        <div className='userRegister'>
            <h1>Setup Your Profile</h1>
            
            <div className="usernameinput">
            <h2>Create or generate Username</h2><svg onClick={showModal} viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
            </div>
            <Modal id="modal" onCancel={handleCancel} closable={false} footer={null}  title="Tips" open={isModalOpen}  height="400px" width="750px" style={{fontWeight:"bold"}} >
            <ol>
            <li>Be careful not include any words that may give away your identity if you wish to remain pseudonymous.</li>
            <li>Usernames cannot be changed for the first 30 days.</li>
            <li>You will be able to toggle between posting with your Username or as 'Anonymous'.</li>
            </ol>
            </Modal>
            <input className='input1' type='text' name="username" value={Username} onChange={handleUsernameChange}></input>
            <span className='pt-3'>Username is available</span>

            <h2>Password</h2>
            <input className='pt-3' type='password' name="pass" value={Password} onChange={handlePasswordChange}></input>

            
            <h3 style={{fontWeight:'bold', paddingTop:'30px', fontSize:'25px'}}>Choose an Avatar</h3>
            
            <div className='flex flex-wrap justify-between pt-7'>{
                  avatar.map((avatars, index) => {
                     return <img src={avatars} key={index} alt='avatar' width="90px" height="90px"
                     onClick={() => handleLogoChange(avatars)}
                      style={{
                      cursor: 'pointer',
                      border: avatars === Logo ? '2px solid blue' : 'none'
          }}></img>
                  })
                }
                </div>
            <div className='foot_buttons'>
                <button className='backbutton'>
                <svg  width="30" height="30" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M334.080 469.333l152.747-153.173-60.16-60.16-256 256 256 256 60.16-60.16-152.747-153.173h519.253v-85.333h-519.253z" ></path></svg>
                </button>
                <button className='createbutton' onClick={handleCreateAccount} disabled={!Logo}>Create Account</button>
            </div>
            </div>
        </div>
    
  )
}
