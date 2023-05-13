import React, { useState } from 'react'
import bcrypt from 'bcryptjs'

const Login = () => {

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const hashedPassword = bcrypt.hashSync(password,10);

const updateEmail = (e) =>{
    setEmail(e.target.value);
}

const updatePassword = (e) =>{
    setPassword(e.target.value);
}

const login = () =>{
    console.log("email: " + email);
    console.log("password: " + password);
    console.log("hased password: " + hashedPassword);
}

fetch('url comes in here',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: hashedPassword,
    }),
})

  return (
    <div className='login-Form'>
        
        <h1 className='mb-4' style={{textAlign:'center'}}>2T Innovation and Maquassi hills local municipality</h1>
        <h1 className='mb-4' style={{textAlign:'center'}}>Login</h1>
        <div className='row'>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4                    '>
                <form>
                    {   /* <!-- Email input --> */}
                    <div class="form-group row mb-4">
                        <label class="form-label col-3" for="email">Phone Number</label>
                        <div className='col-9'>
                            <input type="email" id="email" class="form-control" 
                            value={email} onChange={updateEmail} />
                        </div>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-group row mb-4">
                        <label class="form-label col-3" for="password">Password</label>
                        <div className='col-9'>
                            <input type="password" id="password" class="form-control" 
                            value={password} onChange={updatePassword} />
                        </div>
                    </div>
                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                        {/* <!-- Submit button --> */}
                        <button onClick={login} type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
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