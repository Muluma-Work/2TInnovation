import React, { useState } from 'react'
import bcrypt from 'bcryptjs'
import {Link} from 'react-router-dom'

const Login = () => {

const [phone,setPhone] = useState('');
const [password,setPassword] = useState('');
const hashedPassword = bcrypt.hashSync(password,10);

const updatePhone = (e) =>{
    setPhone(e.target.value);
}

const updatePassword = (e) =>{
    setPassword(e.target.value);
}

const login = () =>{

    // Login details
    console.log("phone: " + phone);
    console.log("password: " + password);
    console.log("hased password: " + hashedPassword);

    // Connecting to the database
    fetch('url comes in here',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: hashedPassword,
        }),
    })
}

  return (
    <div className='login-form'>
        
        <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
        <h2 className='mb-4'>Login</h2>
        <div className='row'>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4                    '>
                <form>
                    {   /* <!-- Phone input --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="phone">Phone Number</label>
                        <div className='col-9'>
                            <input type="tel" id="phone" className="form-control" 
                            value={phone} onChange={updatePhone} maxLength={10} />
                        </div>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="password">Password</label>
                        <div className='col-9'>
                            <input type="password" id="password" className="form-control" 
                            value={password} onChange={updatePassword} />
                        </div>
                    </div>
                    {/* <!-- Register buttons --> */}
                    <div className="text-center">
                        {/* <!-- Submit button --> */}
                        <Link to={'/'} onClick={login} type="button" className="btn btn-primary btn-block mb-4">Login</Link>
                    </div>
                </form>
            </div>

            <div className='col-md-4'>

            </div>
        </div>
    </div>
  )
}

export default Login