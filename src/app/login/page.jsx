import React from 'react'
import Fotter from "@/components/fotter/Fotter";


const Login = () => {
  return (
    <>
    <div className='Log' >
        <h1>Account</h1>
        <div className="logInputs">
              <input type="text" name="" id="" placeholder='First Name' />
              <input type="text" name="" id="" placeholder='Last Name' />
              <input type="text" name="" id="" placeholder='Email adress' />
              <input type="password" name="" id="" placeholder='password' />
              <input type="password" name="" id="" placeholder='Confirm Code' />
<button className='btnSave'>Save</button>
        </div>
         
    </div>
          <Fotter/>
      </>
  )
}

export default Login