import React from 'react'
import { useState } from 'react'

import { addDoc, collection } from "@firebase/firestore"
import { auth, firestore } from '../firebase_setup/firebase';


const Form = () => {

  const logout = () => {
    
    

    firestore.auth.signOut().then(function() {
      // Sign-out successful.
      auth.signOut();
      console.log('Sign Out successful');
    }).catch(function(error) {
      // An error happened.
    });
}

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
        console.log("in the firebase section adding user ");
      } catch(err) {
        console.log(err)
      }
  }

  return (
    <>

      <h3>Welcome {auth.signOut()}</h3>
      <button style={{ "marginLeft": "20px" , "textAlign":"center"}} 
                  onClick={logout}>Logout</button>

      <div className='login-Form'>
            <h1 className='mb-4'>2T Innovation and Maquassi hills local municipality</h1>
            <div className='row'>
            <div className='col-md-2 col-sm-1'>

            </div>
            <div className='col-md-8 col-sm-10'>
                <form action='post' method='/form'>
                    <h3 className='mb-4' >Personal Information</h3>
                    {/* house no */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="houseNumber">House Number</label>
                        <div className='col-9'>
                            <input type="text" id="houseNumber" className="form-control" 
                                  required onChange={updatHouseNumber} value={houseNumber} />
                        </div>
                    </div>

                    {/* <!-- Id Number --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="IdNumber">ID Number</label>
                        <div className='col-9'>
                            <input type="text" id="IdNumber" className="form-control" maxLength={13} 
                                  onChange={updateId} value={id} />
                            <p id='idError' style={{color:'red', display:'none'}} > error </p>
                        </div>
                    </div>

                    {/* <!-- Name --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="name">Owner's Name</label>
                        <div className='col-9'>
                            <input type="text" id="name" className="form-control" 
                            required onChange={updateOwnerName} value={name} />
                        </div>
                    </div>

                    {/* <!-- Surname --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="surname">Surname</label>
                        <div className='col-9'>
                            <input type="text" id="surname" className="form-control" 
                                  required onChange={updateSurname} value={surname} />
                        </div>
                    </div>

                    {/* <!-- Employment Status --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="EmploymentStatus">Employment Status</label>
                        <div className='col-9'>
                            <select name='EmploymentStatus' id='EmploymentStatus'className='form-control'
                              onChange={updateEmployeeStatus} value={employeeStatus} >
                              <option></option>
                              <option value={'Employed'}> Employed </option>
                              <option value={'Unemployed'}>Unemployed</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Contact number --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="contact">Contact number</label>
                        <div className='col-9'>
                            <input onChange={updateContactNumber} value={contactNumber} type="text" 
                              id="contact" className="form-control" required maxLength={10} />
                        </div>
                    </div>

                    {/* <!-- Address --> */}
                  
                    <div className='form-group row mb-4'>
                      <label className="form-label col-3" htmlFor="address">Address</label>

                      <div className='col-9'>
                        <textarea onChange={updateAddress} value={address} className='form-control' rows="4" cols="50">

                        </textarea>
                      </div>
                    </div>

                    <h3 className='mb-4' >Electicity Meter</h3>
                    
                    {/* <!-- Electicity Meter Type --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="meterType">Meter Type</label>
                        <div className='col-9'>
                            <select onChange={updateMeterType} value={meterType} name='meterType' 
                                id='meterType'className='form-control'>
                              <option></option>
                              <option value={'Prepaid'}> Prepaid </option>
                              <option value={'Conventional'}>Conventional</option>
                            </select>
                        </div>
                    </div>

                    {/* Electicity Meter Condition */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="meterCondition">Meter Condition</label>
                        <div className='col-9'>
                            <select onChange={updateElectricityMeterCondidtion} value={electricityMeterCondition} 
                                name='meterCondition' id='meterCondition'className='form-control'>
                              <option></option>
                              <option value={'Good'}> Good </option>
                              <option value={'Bad'}>Bad</option>
                            </select>
                        </div>
                    </div>

                    {/* Electicity comments */}
                    <div className='form-group row mb-4'>
                      <label className="form-label col-3" htmlFor="commentsElectricity">Comments</label>

                      <div className='col-9'>
                        <textarea onChange={updateElectricityComments} value={electricityComment} id='commentsElectricity' name='commentsElectricity' className='form-control' rows="4" cols="50">

                        </textarea>
                      </div>
                    </div>

                    <h3 className='mb-4' >Water Meter</h3>

                    {/* <!-- Water Account number --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="accountNumber">Account number</label>
                        <div className='col-9'>
                            <input onChange={updateAccountNumber} value={accountNumber} type="text" id="accountNumber" className="form-control"/>
                        </div>
                    </div>

                    {/* <!-- Meter number --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="meterNumber">Meter number</label>
                        <div className='col-9'>
                            <input onChange={updateMeterNumber} value={meterNumber} type="number" 
                             id="meterNumber" className="form-control" min={0} />
                        </div>
                    </div>

                    {/* <!-- Meter reading --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="meterreading">Meter Reading</label>
                        <div className='col-9'>
                            <input onChange={updateMetertReading} value={meaterReading} type="number" id="meterreading"
                             className="form-control" min={0} />
                        </div>
                    </div>

                    {/* Meter Condition */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="waterMeterCondition">Meter Condition</label>
                        <div className='col-9'>
                            <select onChange={updateWaterMeterCondidtion} value={waterMeterCondition} 
                                name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Good'}> Good </option>
                              <option value={'Bad'}>Bad</option>
                            </select>
                        </div>
                    </div>

                    {/* <!-- Number of flats --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="meterreading">Number of flats</label>
                        <div className='col-9'>
                            <input onChange={updateNumberOfFlats} value={numberOfFlats} type="number" 
                                id="meterreading" className="form-control" min={0} />
                        </div>
                    </div>

                    {/* <!-- back rooms --> */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="meterreading">Back rooms</label>
                        <div className='col-9'>
                            <input onChange={updateBackRooms} value={backRoom} type="number" 
                                id="meterreading" className="form-control" min={0} />
                        </div>
                    </div>

                    {/* Account type*/}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="waterMeterCondition">Account Type</label>
                        <div className='col-9'>
                            <select onChange={updateAccountType} value={accountType} name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Pay'}>Pay </option>
                              <option value={'Not Pay'}>Not Pay</option>
                            </select>
                        </div>
                    </div>

                    {/* Debtor Category*/}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="waterMeterCondition">Debtor category</label>
                        <div className='col-9'>
                            <select onChange={updateDebtorCategory} value={debtorCategory} name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Business'}> Business </option>
                              <option value={'Residential'}>Residential</option>
                            </select>
                        </div>
                    </div>

                    {/* Possible Indigent */}
                    <div className="form-group row mb-4">
                        <label className="form-label col-3" htmlFor="waterMeterCondition">Possible Indigent</label>
                        <div className='col-9'>
                            <select onChange={updatePossibleIndigent} value={possibleIndigent} name='waterMeterCondition' id='waterMeterCondition'className='form-control'>
                              <option></option>
                              <option value={'Yes'}> Yes </option>
                              <option value={'No'}>No</option>
                            </select>
                        </div>
                    </div>

                    {/* water comments */}
                    <div className='form-group row mb-4'>
                      <label className="form-label col-3" htmlFor="meterComments">Comments</label>

                      <div className='col-9'>
                        <textarea onChange={updateWaterComment} value={waterComments} id='meterComments' name='meterComments' className='form-control' rows="4" cols="50">

                        </textarea>
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <div className="text-center">   
                      <input onClick={submitForm}  id='btnSubmit' type="button" 
                          className="btn btn-primary btn-block mb-4" value={'Submit'}/>
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