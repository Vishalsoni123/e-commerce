import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    
    <div className='form'>
      <h1>Login Please</h1>
      <form action="submit">
        <label htmlFor="" >User Id</label><br />
        <input type="text" /><br /><br />
        <label htmlFor="">Password</label><br />
        <input type="password" /><br /><br />
        <button>Submit</button>
       <Link to={'/Signup'}><button>Dont have account</button></Link>
      </form>
    </div>
  )
}

export default Login
