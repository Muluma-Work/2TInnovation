import React from 'react'
import { useState } from 'react'

import { addDoc, collection } from "@firebase/firestore"
import { firestore } from '../firebase_setup/firebase';

import firebaseConfig  from './firebaseConfig';

import * as firebaseui from "firebaseui";

import firebase from 'firebase/compat/app';


const Form = () => {

  // LOGOUT out flow
  // const logout =  () => {

  //     let ui = null

  //     const uiConfig = {
          
  //       signInSuccessUrl: 'http://localhost:3000/', // This URL is used to return to that page when we got success response for phone authentication.
  //       signInOptions: [{ provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID, defaultCountry: 'ZA' }],
  //       tosUrl: 'http://localhost:3000/'
  //     }

      
  //     if(!firebase.apps.length){
  //       firebase.initializeApp(firebaseConfig)
  //       ui = new firebaseui.auth.AuthUI(firebase.auth.PhoneAuthCredential.getProvider());
  //       new firebase.auth.PhoneAuthProvider.providerId
  //     }else{
  //       ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  //     }

  //     ui.start('#firebaseui-auth-container', uiConfig);

  //     // console.log( ui.setConfig.toString());

  //   logout()

  //   }

    
    // firebase.auth().signOut()
    // firebase.auth.signOut().then(function() {
    //   // Sign-out successful.
    //   auth.signOut()
    //   console.log('Sign Out successful');
    // }).catch(function(error) {
    //   // An error happened.
    // });

  

  // form inputs

  // personal info
  const [houseNumber, setHouseNumber] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname,setSurname] = useState('');
  const [employeeStatus, setEmployeeStatus] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');

  // Electricity info
  const [meterType, setMeterType] = useState('');
  const [electricityMeterCondition, setElectricityMeterCondition] = useState('');
  const [electricityComment, setElectricityComment] = useState('');
  
  // Water info
  const [accountNumber, setAccountNumber] = useState('');
  const [meterNumber, setMeterNumber] = useState(0); 
  const [meaterReading, setMeterReading] = useState(0);
  const [waterMeterCondition, setWaterMeterCondition] = useState('');
  const [numberOfFlats, setNumberOfFlats] = useState(0);
  const [backRoom, setBackRooms] = useState(0);
  const [accountType, setAccountType] = useState('');
  const [debtorCategory, setDebtorCategory] = useState(''); 
  const [possibleIndigent, setPossibleIndigent] = useState('');
  const[waterComments, setWaterComments] = useState('');

    // Update personal info
    const updatHouseNumber = (e) =>{
      setHouseNumber(e.target.value)
    }

    const updateId = (e) =>{
      setId(e.target.value);
    }

    const updateOwnerName = (e) =>{
      setName(e.target.value)
    }

    const updateSurname = (e) =>{
      setSurname(e.target.value)
    }

    const updateEmployeeStatus = (e) =>{
      setEmployeeStatus(e.target.value);
    }

    const updateContactNumber = (e) =>{
      setContactNumber(e.target.value);
    }

    const updateAddress = (e) =>{
      setAddress(e.target.value);
    }

    // Update Electricity Info
    const updateMeterType = (e) =>{
      setMeterType(e.target.value);
    }

    const updateElectricityMeterCondidtion = (e) =>{
      setElectricityMeterCondition(e.target.value);
    }

    const updateElectricityComments = (e) =>{
      setElectricityComment(e.target.value);
    }

    // update Water info

    const updateAccountNumber = (e) =>{
      setAccountNumber(e.target.value);
    }

    const updateMeterNumber = (e)=>{
      setMeterNumber(e.target.value);
    }

    const updateMetertReading = (e) =>{
      setMeterReading(e.target.value);
    }

    const updateNumberOfFlats = (e) =>{
      setNumberOfFlats(e.target.value);
    }

    const updateBackRooms = (e) =>{
      setBackRooms(e.target.value);
    }

    const updateAccountType = (e) =>{
      setAccountType(e.target.value);
    }

    const updateDebtorCategory = (e) =>{
      setDebtorCategory(e.target.value)
    }

    const updatePossibleIndigent = (e) =>{
      setPossibleIndigent(e.target.value);
    }

    const updateWaterComment = (e) =>{
      setWaterComments(e.target.value);
    }

    const updateWaterMeterCondidtion = (e) =>{
        setWaterMeterCondition(e.target.value);
    }


    const submitForm = () =>{

    // Displaying input to save to database
    console.log('Water Meter Condition :' + waterMeterCondition);
    console.log('Water comments :' + waterComments);
    console.log('Possible Indigent :' + possibleIndigent);
    console.log('Debtor category :' + debtorCategory);
    console.log('Account Type :' + accountType);
    console.log('Number of flats :' + numberOfFlats);
    console.log('Meter Reading :' + meaterReading);
    console.log('Account Number :' + accountNumber);

    console.log('Electricity Comment :' + electricityComment);
    console.log('Electricity Meter Condition :' + electricityMeterCondition);
    console.log('Meter Type :' + meterType);

    console.log('Address :' + address);
    console.log('Contact Number :' + contactNumber);
    console.log('Employment Status :' + employeeStatus);
    console.log('Surname :' + surname);
    console.log('Owner\'s name :' + name);
    console.log('Id Number :' + id);
    console.log('House Number:' + houseNumber); 

    // form information
    const ref = collection(firestore, "Users");

    let data = {

      houseNumber: houseNumber,
      id: id,
      name: name,
      surname: surname,
      employeeStatus: employeeStatus,
      contactNumber: contactNumber,
      address: address,

      meterType: meterType,
      electricityMeterCondition: electricityMeterCondition,
      electricityComment: electricityComment,

      accountNumber: accountNumber,
      meaterReading: meaterReading,
      numberOfFlats: numberOfFlats,
      accountType: accountType,
      debtorCategory: debtorCategory,
      possibleIndigent: possibleIndigent,
      waterComments: waterComments,
      waterMeterCondition: waterMeterCondition,
      backRoom: backRoom
    }

    try {
        addDoc(ref, data)
      } catch(err) {
        console.log(err)
      }
    }

  return (
    <>

      {/* <h3>Welcome {firebase.auth.PhoneAuthProvider.toString([])}</h3> */}
      
      {/* <button style={{ "textAlign":"center"}} 
                  onClick={logout}>Logout</button> */}

                {/* form design */}
                <div className='row'>

                  <div className='col-md-2'>

                  </div>

                  <div className='col-md-8'>
                      
                  <div class="card">
                    <div class="card-body">
                      <h2 class="card-title">2T Innovation and Maquassi Hills Local Municipality</h2>

                      <h5 className='card-title'>Personal Info</h5>

                      {/* <!-- Floating Labels Form --> */}
                      <form class="row g-3">

                          {/* Personal Information */}

                          {/* Row 1 col with Id number */}
                          <div class="col-md-12">

                              {/* Id Number */}
                            <div className='form-floating'> 
                                <input type="text" id="IdNumber" className="form-control" maxLength={13} 
                                    onChange={updateId} value={id} />
                                
                                <label className="form-label" htmlFor="IdNumber">ID Number</label>
                            </div>  
                          </div>

                          {/* Row 2 cols */}
                          <div className="col-md-6">

                            {/* Owners Name col 1 */}
                            <div className='form-floating'> 
                              <input type="text" id="name" className="form-control" 
                                  required onChange={updateOwnerName} value={name} />
                              
                              <label className="form-label" htmlFor="name">Owner's Name</label>
                            </div>
                          </div>

                          {/*Surname col 2*/}
                          <div className='col-md-6'>
                              <div className='form-floating'>
                                <input type="text" id="surname" className="form-control" 
                                      required onChange={updateSurname} value={surname} />
                                <label className="form-label " htmlFor="surname">Surname</label>
                              </div>
                          </div>

                          {/* House Number */}
                          <div className='col-md-12'>
                              <div className='form-floating'>
                                  <input className='form-control' id='houseNumber' name='houseNumber' onChange={updatHouseNumber} />
                                  <label htmlFor='houseNumber'>House Number</label>
                              </div>
                          </div>

                          {/*Row 2 cols */}
                          <div className='col-md-6'> 
                            {/* Contact col 1*/}
                            <div className='form-floating'>
                              
                                <input onChange={updateContactNumber} value={contactNumber} type="text" 
                                  id="contact" className="form-control" required maxLength={10} />    
                                <label className="form-label" htmlFor="contact">Contact number</label>
                            </div>
                          </div>

                          {/* Employee Status col 2*/}
                          <div className='col-md-6'>
                            {/* <!-- Employment Status --> */}
                            <div className='form-floating'>
                              <select name='EmploymentStatus' id='EmploymentStatus'className='form-select'
                                  onChange={updateEmployeeStatus} value={employeeStatus} >
                                  <option></option>
                                  <option value={'Employed'}> Employed </option>
                                  <option value={'Unemployed'}>Unemployed</option>
                              </select>

                              
                              <label className="form-label" htmlFor="EmploymentStatus">Employment Status</label>
                          </div>
                      </div>

                      <div className='col-md-12'> 
                        {/* Address */}
                        <div className='form-floating'>
                          <textarea onChange={updateAddress} value={address} className='form-control' rows="4" cols="50">

                          </textarea>
                          <label className="form-label" htmlFor="address">Address</label>
                        </div>

                      </div>

                      
                      <h5 className='card-title' >Electicity Meter</h5>

                      {/* Row 2 cols */}

                      {/* col 1 */}
                      <div className='col-md-6'>
                        <div className='form-floating'>
                            <select onChange={updateMeterType} value={meterType} name='meterType' 
                                id='meterType'className='form-control'>
                              <option></option>
                              <option value={'Prepaid'}> Prepaid </option>
                              <option value={'Conventional'}>Conventional</option>
                            </select>

                            <label className="form-label" htmlFor="meterType">Meter Type</label>
                        </div>
                      </div>

                      {/* col 2*/}
                      <div className='col-md-6'>
                        <div className='form-floating' > 
                            <select onChange={updateElectricityMeterCondidtion} value={electricityMeterCondition} 
                                name='meterCondition' id='meterCondition'className='form-control'>
                                <option></option>
                                <option value={'Good'}> Good </option>
                                <option value={'Bad'}>Bad</option>
                            </select>
                            
                          <label className="form-label" htmlFor="meterCondition">Meter Condition</label>
                        </div>
                      </div>

                      {/* Comments Row 1 col */}
                      <div className='col-md-12'>
                          <div className='form-floating'>
                            <textarea onChange={updateElectricityComments} value={electricityComment} id='commentsElectricity' name='commentsElectricity' className='form-control' rows="4" cols="50">

                            </textarea>
                            <label className="form-label col-3" htmlFor="commentsElectricity">Comments</label>
                          </div>
                      </div>

                      
                      <h5 className='card-title' >Water Meter</h5>

                      {/* Water Maeter Row Col */}
                      <div className='col-md-12'>
                        <div className='form-floating'>
                          <textarea onChange={updateAccountNumber} value={accountNumber} id='commentsElectricity' name='commentsElectricity' className='form-control' rows="4" cols="50">
                              
                          </textarea>
                          <label className="form-label col-3" htmlFor="accountNumber">Account number</label>
                        </div>
                      </div>

                      {/* Row 2 cols */}
                      
                      {/* col 1 */}
                      <div className='col-md-6'>
                          <div className='form-floating'>
                              
                            <input onChange={updateMeterNumber} value={meterNumber} type="number" 
                             id="meterNumber" className="form-control" min={0} />

                          <label className="form-label" htmlFor="meterNumber">Meter number</label>
                          </div>
                      </div>
            

                      {/* col 2 */}
                      <div className='col-md-6'>
                        <div className='form-floating'> 
                            
                            <input onChange={updateMetertReading} value={meaterReading} type="number" id="meterreading"
                             className="form-control" min={0} />
                             <label className="form-label" htmlFor="meterreading">Meter Reading</label>
                        </div>
                      </div>

                      {/* Row  col */}
                      <div className='col-md-12'>
                        <div className='form-floating'> 
                            <select onChange={updateWaterMeterCondidtion} value={waterMeterCondition} 
                                name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Good'}> Good </option>
                              <option value={'Bad'}>Bad</option>
                            </select>
                            
                            <label className="form-label col-3" htmlFor="waterMeterCondition">Meter Condition</label>

                        </div>
                      </div>

                      {/* Row 2 cols */}
                      {/*  */}
                      <div className='col-md-6'>
                          <div className='form-floating'>
                              
                            <input onChange={updateNumberOfFlats} value={numberOfFlats} type="number" 
                                id="meterreading" className="form-control" min={0} />
                            
                            
                            <label className="form-label" htmlFor="meterreading">Number of flats</label>
                          </div>
                      </div>
                    
                      <div className='col-md-6'>
                          <div className='form-floating'>
                            
                              <input onChange={updateBackRooms} value={backRoom} type="number" 
                                  id="meterreading" className="form-control" min={0} />
                            <label className="form-label" htmlFor="meterreading">Back rooms</label>

                          </div>
                      </div>

                      {/* Row 1 col */}
                      <div className='col-md-12'>
                          <div className='form-floating'>
                          <select onChange={updateAccountType} value={accountType} name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Pay'}>Pay </option>
                              <option value={'Not Pay'}>Not Pay</option>
                            </select>

                            
                        <label className="form-label col-3" htmlFor="waterMeterCondition">Account Type</label>
                          </div>
                      </div>

                      {/* Row 2 cols */}
                      <div className='col-md-6' >
                        <div className='form-floating'>
                        <select onChange={updateDebtorCategory} value={debtorCategory} name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Business'}> Business </option>
                              <option value={'Residential'}>Residential</option>
                            </select>

                            
                        <label className="form-label" htmlFor="waterMeterCondition">Debtor category</label>
                        </div>

                      </div>
                      <div className='col-md-6'>
                        <div className='form-floating'>
                        <select onChange={updatePossibleIndigent} value={possibleIndigent} name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Yes'}> Yes </option>
                              <option value={'No'}>No</option>
                            </select>

                            <label className="form-label" htmlFor="waterMeterCondition">Possible Indigent</label>
                        </div>
                        
                      </div>

                      {/* Row 1 col */}
                      <div className='col-md-12'>
                        <div className='form-floating'>

                          <textarea onChange={updateWaterComment} value={waterComments} 
                              id='meterComments' name='meterComments' className='form-control' rows="4" cols="50">

                          </textarea>

                          <label className="form-label" htmlFor="meterComments">Comments</label>
                        </div>

                      </div>

                      <div class="text-center">

                          <input onClick={submitForm}  id='btnSubmit' type="button" 
                            className="btn btn-primary myspace" value={'Submit'}/>

                          <input type="reset" class="btn btn-secondary"Reset/>
                  	  </div>



                  </form>

                      </div>
                  </div>
                  </div>

                  <div className='col-md-2'>

                  </div>

                </div>

      <div className='login-Form' id="firebaseui-auth-container">
            <div className='row'>
            <div className='col-md-2 col-sm-1'>

            </div>
            <div className='col-md-8 col-sm-10'>
                <form>
                    


                    {/* Possible Indigent */}
                    <div className="form-group row mb-4">
                        
                        <div className='col-9'>
                            
                        </div>
                    </div>

                    {/* water comments */}
                    <div className='form-group row mb-4'>
                      

                      <div className='col-9'>
                        
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <div className="text-center">   
                      
                    </div>
                </form>
            </div>

            <div className='col-md-2 col-sm-1'>

            </div>
        </div>
      </div>
    </>
  )
}

export default Form