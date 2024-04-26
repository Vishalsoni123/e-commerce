import React from 'react'
import './Otppage.css'

function Otppage() {
  return (
    <>
    <div className='maindiv'>
        <h1>OTP VERFICATION</h1>
    <form action="">
        <label htmlFor="otpverify">Enter OTP sent to your phone:</label><br />
        <input type="text"  placeholder='Enter OTP' /><br />
        <button>Verify OTP Code</button>


    </form>
    </div>
    </>
  )
}

export default Otppage
