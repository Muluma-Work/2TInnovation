import React, {  useEffect } from 'react'
// import bcrypt from 'bcryptjs'
// import {Link} from 'react-router-dom'
// import {firestore, auth} from '../firebase_setup/firebase'
import firebaseConfig  from './firebaseConfig';
// import { firestore } from '../firebase_setup/firebase';

import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";

const Login = () => {
// const [phone,setPhone] = useState('');
// const [password,setPassword] = useState('');
// const hashedPassword = bcrypt.hashSync(password,10);

// Inputs
// const [mynumber, setnumber] = useState("");
// const [otp, setotp] = useState('');
// const [show, setshow] = useState(false);
// const [final, setfinal] = useState('');

useEffect( ()=>{

    // signin flow

    async function firebase_(){

        let ui = null
        // const firebaseui = await import(firebaseui)

        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }else{

            firebase.app() // if already initialized, use that one
            ui = firebaseui.auth.AuthUI.getInstance() //|| new firebaseui.auth.AuthUI(firebase.auth());
        }

        const uiConfig = {
            signInFlow: 'popup',
            signInSuccessUrl: 'http://localhost:3000/', // This URL is used to return to that page when we got success response for phone authentication.
            signInOptions: [{ provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID, defaultCountry: 'ZA' }],
            tosUrl: 'http://localhost:3000/'
        }

        ui.start('#firebaseui-auth-container', uiConfig);

    }
    firebase_()
    // const fbase = firebase.initializeApp(firebaseConfig);
    //const fbase =  firebase.initializeApp(firestore.app)
    // const uiConfig = {
    //     signInSuccessUrl: "https://netflix-clone-ankur.herokuapp.com/", //This URL is used to return to that page when we got success response for phone authentication.
    //     signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
    //     tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    //   };

      
      
    //   var ui = new firebaseui.auth.AuthUI(firebase.auth());

      

    //   ui.start("#firebaseui-auth-container", uiConfig);
},[])



// Sent OTP
// const signin = () => {
  
//     if (mynumber === "" || mynumber.length < 10) return;

//     let verify = new firestore.auth.RecaptchaVerifier('recaptcha-container');
//     auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
//         setfinal(result);
//         alert("code sent")
//         setshow(true);
//     })
//         .catch((err) => {
//             alert(err);
//             window.location.reload()
//         });
// }

// Validate OTP
// const ValidateOtp = () => {
//     if (otp === null || final === null)
//         return;
//     final.confirm(otp).then((result) => {
//         // success
//     }).catch((err) => {
//         alert("Wrong code");
//     })
// }

// const updatePhone = (e) =>{
//     setPhone(e.target.value);
// }

// const updatePassword = (e) =>{
//     setPassword(e.target.value);
// }

// const login = () =>{

//     // Login details
//     console.log("phone: " + phone);
//     console.log("password: " + password);
//     console.log("hased password: " + hashedPassword);

//     // Connecting to the database
//     fetch('url comes in here',{
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           phone: phone,
//           password: hashedPassword,
//         }),
//     })
// }

  return (
    // <div className='login-form'>
        
    //     <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
    //     <h2 className='mb-4'>Login</h2>
    //     <div className='row'>
    //         <div className='col-md-4'>

    //         </div>
    //         <div className='col-md-4                    '>
    //             <form>
    //                 {   /* <!-- Phone input --> */}
    //                 <div className="form-group row mb-4">
    //                     <label className="form-label col-3" htmlFor="phone">Phone Number</label>
    //                     <div className='col-9'>
    //                         <input type="tel" id="phone" className="form-control" 
    //                         value={phone} onChange={updatePhone} maxLength={10} />
    //                     </div>
    //                 </div>

    //                 {/* <!-- Password input --> */}
    //                 <div className="form-group row mb-4">
    //                     <label className="form-label col-3" htmlFor="password">Password</label>
    //                     <div className='col-9'>
    //                         <input type="password" id="password" className="form-control" 
    //                         value={password} onChange={updatePassword} />
    //                     </div>
    //                 </div>
    //                 {/* <!-- Register buttons --> */}
    //                 <div className="text-center">
    //                     {/* <!-- Submit button --> */}
    //                     <Link to={'/'} onClick={login} type="button" className="btn btn-primary btn-block mb-4">Login</Link>
    //                 </div>
    //             </form>
    //         </div>

    //         <div className='col-md-4'>

    //         </div>
    //     </div>
    // </div>

    <>
        <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
        <div id="firebaseui-auth-container"></div>
    </>

  )
}

export default Login