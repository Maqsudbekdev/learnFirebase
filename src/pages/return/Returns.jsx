import React from 'react'
import './Returns.css'
import { Link } from 'react-router-dom'


const Returns = () => {
  return (

    <div className='returns'>
      <div className="sign__logo"><img src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png" alt="" /></div>
      <div className="sign">
        <ul>
          <li className='sign__li'><h1>Sign-In</h1></li>
          <li className='sign__li'><h3>Email or mobile phone number</h3></li>
          <li className='sign__li'>
            <input type="text" />
          </li>
          <li className='sign__li'>
            <div className="small">Continue</div>
          </li>
          <li className='sign__li'>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </li>
          <li className='sign__li'>
            <h4>Need help?</h4>
          </li>




        </ul>

        <div className="line">
          <div className="ruter"></div>
          <p>New to Amazon?</p>
          <div className="ruter"></div>
        </div>

      </div>
      <Link to="/create">
        <div className="sign__footer"><p> Create your Amazon accaunt</p></div>
      </Link>
    </div>


  )
}

export default Returns