import React, {  useEffect } from 'react'
import firebaseConfig  from './firebaseConfig';
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";

const Login = () => {

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

},[])

  return (
    <>
        <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
        <div id="firebaseui-auth-container"></div>
    </>
  )
}

export default Login