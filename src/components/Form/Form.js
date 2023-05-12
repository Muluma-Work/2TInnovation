import React from 'react'

import { useState } from 'react'


const Form = () => {

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

  // errors
  const [errors, setErrors] = useState([]);

  let errorsList = [];

    // let birthD = id.substring(0,6);
    let gender = id.substring(6,10);
    let  citizenship = id.substring(10,11);

    Number(gender);

    // Update personal info
    const updatHouseNumber = (e) =>{
      setHouseNumber(e.target.value)
      console.log('House Number:' + houseNumber);
    }

    const updateId = (e) =>{
      setId(e.target.value);
      console.log('Id Number :' + id);
      validateId()
    }

    const updateOwnerName = (e) =>{
      setName(e.target.value)
      console.log('Owner\'s name :' + name);
    }

    const updateSurname = (e) =>{
      setSurname(e.target.value)
      console.log('Surname :' + surname);
    }

    const updateEmployeeStatus = (e) =>{
      setEmployeeStatus(e.target.value);
      console.log('Employment Status :' + employeeStatus);
    }

    const updateContactNumber = (e) =>{
      setContactNumber(e.target.value);
      console.log('Contact Number :' + contactNumber);
    }

    const updateAddress = (e) =>{
      setAddress(e.target.value);
      console.log('Address :' + address);
    }

    // Update Electricity Info
    const updateMeterType = (e) =>{
      setMeterType(e.target.value);
      console.log('Meter Type :' + meterType);
    }

    const updateElectricityMeterCondidtion = (e) =>{
      setElectricityMeterCondition(e.target.value);
      console.log('Electricity Meter Condition :' + electricityMeterCondition);
    }

    const updateElectricityComments = (e) =>{
      setElectricityComment(e.target.value);
      console.log('Electricity Comment :' + electricityComment);
    }

    // update Water info

    const updateAccountNumber = (e) =>{
      setAccountNumber(e.target.value);
      console.log('Account Number :' + accountNumber);
    }

    const updateMeterNumber = (e)=>{
      setMeterNumber(e.target.value);
      console.log('Meter Number :' + meterNumber);
    }

    const updateMetertReading = (e) =>{
      setMeterReading(e.target.value);
      console.log('Meter Reading :' + meaterReading);
    }

    const updateNumberOfFlats = (e) =>{
      setNumberOfFlats(e.target.value);
      console.log('Number of flats :' + numberOfFlats);
    }

    const updateBackRooms = (e) =>{
      setBackRooms(e.target.value);
      console.log('Back rooms :' + backRoom);
    }

    const updateAccountType = (e) =>{
      setAccountType(e.target.value);
      console.log('Account Type :' + accountType);
    }

    const updateDebtorCategory = (e) =>{
      setDebtorCategory(e.target.value)
      console.log('Debtor category :' + debtorCategory);
    }

    const updatePossibleIndigent = (e) =>{
      setPossibleIndigent(e.target.value);
      console.log('Possible Indigent :' + possibleIndigent);
    }

    const updateWaterComment = (e) =>{
      setWaterComments(e.target.value);
      console.log('Water comments :' + waterComments);
    }

    const updateWaterMeterCondidtion = (e) =>{
        setWaterMeterCondition(e.target.value);
        console.log('Water Meter Condition :' + waterMeterCondition);
    }

  const validateId = () =>{

    if(gender<=4999){
      console.log('female');
    }else if(gender>=5000 && gender<=9999){
      console.log('male');
    }

    if(citizenship > 1){
        errors.push('Invalid Id');
        setErrors(errorsList);
    }else if(citizenship === 0){
      console.log('South African');
    }else{
      console.log('Permanent Resident');
    }

    if(errors.length > 0){
        // console.log('id error');
        document.getElementById('idError').style.display = 'block'
        document.getElementById('idError').innerText = errors
        document.getElementById('btnSubmit').setAttribute('disabled','true')

    }else{
        document.getElementById('idError').style.display = 'none'
        document.getElementById('btnSubmit').removeAttribute('disabled')
    }

  }

  const submitForm = () =>{
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
  }

  return (
    <>
      {/* <form id="wrappedInputsForm" method="post" class="container mt-5">
      <h1>2T Innovation and Maquassi hills local municipality</h1>
      <div class="form-group">
        <label for="owner's name">Owner's name</label>
        <input id="owner's name" type="text" required />

        <label for="surname">Surname</label>
        <input id="surname" type="text" required />

        <label for="id-number">ID number</label>
        <input id="id-number" type="text" required />

        <label for="contact-number">Contact number</label>
        <input id="contact-number" type="text" required />

        <label for="address">Address</label>
        <input id="address" type="text" required />

        <label for="employment">Are you employed?</label>
        <select id="employment">
          <option value="option1">Yes</option>
          <option value="option2">No</option>
        </select>
      </div>

      <div class="form-group">
        <label for="house-type">What is the house type?</label>
        <select id="house-type">
          <option value="option1">Residential</option>
          <option value="option2">Business</option>
        </select>

        <label for="meter-number">Meter number</label>
        <input id="meter-number" type="text" required />

        <label for="meter-type">What is the meter type?</label>
        <select id="meter-type">
          <option value="option1">Pre-Paid</option>
          <option value="option2">Conventional</option>
        </select>

        <label for="meter-condition">What is the house type?</label>
        <select id="meter-condition">
          <option value="option1">Good</option>
          <option value="option2">Bad</option>
        </select>

        <label for="meter-readings">Meter readings:</label>
        <input id="meter-readings" type="text" required />
      </div>

      <div class="form-group">
        <label for="debtor-category">Debtor category</label>
        <input id="debtor-category" type="text" required />

        <label for="comments">Comments</label>
        <input id="comments" type="text" required />
      </div>

      <button id="submitBtn" type="submit">Submit</button>
    </form> */}

      <div className='login-Form'>
            <h1 className='mb-4' style={{textAlign:'center'}}>2T Innovation and Maquassi hills local municipality</h1>
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
                            <input type="text" id="name" className="form-control" required onChange={updateOwnerName} value={name} />
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