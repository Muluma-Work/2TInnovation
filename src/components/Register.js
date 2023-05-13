import React, { useState } from 'react'
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';



const Register = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    let hashedPassword = bcrypt.hashSync(password,10);

    const updatePhoneNumber = (e) =>{
        setPhoneNumber(e.target.value);
    }

    const updateName = (e) =>{
        setName(e.target.value);
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value);
    }

    const registerUser = () =>{

        // User information
        console.log("Name: " + name);
        console.log("Phone Number: " + phoneNumber);
        console.log("Password: " + hashedPassword);
      
        // Connecting to database
        fetch('url comes in here',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,  
              email: phoneNumber,
              password: hashedPassword,
            }),
        })
    }



  return (
    <div className='register-form'>
        
    <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
    <h2 className='mb-4'>Register User</h2>
    <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4                    '>
            <form>
                {   /* <!-- Name input --> */}
                <div className="form-group row mb-4">
                    <label className="form-label col-3" htmlFor="name">Name</label>
                    <div className='col-9'>
                        <input type="name" id="name" className="form-control" 
                         onChange={updateName} value={name}/>
                    </div>
                </div>

                {   /* <!-- Phone Number input --> */}
                <div className="form-group row mb-4">
                    <label className="form-label col-3" htmlFor="phone">Phone Number</label>
                    <div className='col-9'>
                        <input type="tel" id="phone" className="form-control" 
                         onChange={updatePhoneNumber} value={phoneNumber} maxLength={10}/>
                    </div>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-group row mb-4">
                    <label className="form-label col-3" htmlFor="password">Password</label>
                    <div className='col-9'>
                        <input type="password" id="password" className="form-control" 
                         onChange={updatePassword} value={password}/>
                    </div>
                </div>
                {/* <!-- Register button --> */}
                <div className="text-center">
                    {/* <!-- Submit button --> */}
                    <Link to={"/login"} onClick={registerUser} type="button" className="btn btn-primary btn-block mb-4">
                        Submit
                    </Link>
                </div>
            </form>
        </div>

        <div className='col-md-4'>

        </div>
    </div>
</div>
  )
}

export default Register