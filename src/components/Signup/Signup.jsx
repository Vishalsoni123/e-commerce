import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='form'>
    <h1>Signup Please</h1>
    <form action="submit">
      <label htmlFor="" >User Name </label><br />
      <input type="text" /><br /><br />
      <label htmlFor=""> User Email</label><br />
      <input type="Email" /><br /><br />
      <label htmlFor="" > Contact Number </label><br />
      <input type="number" /><br /><br />
      <Link to={'/Otppage'}><button>Submit</button></Link>
    </form>
  </div>
  )
}

export default Signup
