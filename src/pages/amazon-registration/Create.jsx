import React from 'react'
import './Create.css'
// import { AiFillCaretDown} from './react-icons/ai';

function Create() {
  return (
    <div className='create'>
      <div className="create__logo">
        <img src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" alt="" />
      </div>
      <div className="create__accaunt">
        <ul>
          <li className='create__li'><h1>Create accaunt</h1></li>
          <li className='create__li'>
            <p>Your name</p>
            <input type="text" />
          </li>
          <li className='create__li'>
            <p>Mobil number or email</p>
            <input type="text" />
          </li>
          <li className='create__li'>
            <p>Password</p>
            <input type="password" placeholder='At least 6 characters' />
            <h5 className='char'>Passwords must be at least 6 characters.</h5>
          </li>
          <li className='create__li'>
            <p>Re-enter password</p>
            <input type="text" />
          </li>
          <li className='create__li'>
            <div className="create__footer"><p>Continue</p></div>
          </li>
          <li className='create__li'>
            <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </li>
          <li className='create__li'><p className='al'>Already have an account?Sign-In  <br/>
            Buying for work?Create a free business account </p></li>
        </ul>
      </div>
    </div>
  );
}

export default Create