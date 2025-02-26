import React from 'react'
import { RightOutlined } from "@ant-design/icons";

const Register = () => {
  return (
    <div className='register'>
        <p className='register-caption'>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className='email-form'>
            <input className='email' type="email" placeholder='Email Address' />
            <button className='get-started-btn'>Get Started <RightOutlined /> </button>
        </div>
    </div>
  )
}

export default Register