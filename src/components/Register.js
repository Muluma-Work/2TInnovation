import React, { useState } from 'react'
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';

// Firebase 
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"



const Register = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    let hashedPassword = bcrypt.hashSync(password,10);

    //Register 
    const registerUser = () =>{

        // User information
        console.log("Name: " + name);
        console.log("Phone Number: " + phoneNumber);
        console.log("Password: " + hashedPassword);
      
        // Connecting to database
        const ref = collection(firestore, "Users");

        let data = {
            name: name,
            phoneNumber: phoneNumber,
            password: hashedPassword
        }

        try {
            addDoc(ref, data)
            console.log("in the firebase section adding user ");
        } catch(err) {
            console.log(err)
        }
    }

    const updatePhoneNumber = (e) =>{
        setPhoneNumber(e.target.value);
    }

    const updateName = (e) =>{
        setName(e.target.value);
    }

    const updatePassword = (e) =>{
        setPassword(e.target.value);
    }

    



  return (
    <div className='register-form'>
        
    <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
    <h2 className='mb-4'>Register User</h2>
    <div className='row'>
        <div className='col-md-4'>

        </div>
        <div className='col-md-4                    '>
            <form onSubmit={registerUser}>
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
                    <Link to={"/login"} onClick={registerUser} type="submit" className="btn btn-primary btn-block mb-4">
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