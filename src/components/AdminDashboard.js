import React,{useEffect, useState} from 'react'

import { collection, getDocs} from "firebase/firestore";
import { firestore } from '../firebase_setup/firebase';

const AdminDashboard = () => {

   
    const [forms, setForms] = useState([])



    const fetchPost = async () => {
       
        await getDocs(collection(firestore, "Users"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setForms(newData);   
               
                console.log(forms[0].address);
            })
       
    }

    useEffect(()=>{

        //fetchPost()

    },[]);

  return (

    <>

        <div className='row'>

            <div className='col-md-1'>

            </div>

            <div className='col-md-10'>
                        {/* Account Details */}
        <section class="section mt-4">
      <div class="row">
        <div class="col-md-3">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Unemployed</h5>
              <p>33</p>
            </div>
          </div>

        </div>

        <div class="col-md-3">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employed</h5>
              <p>65</p>
            </div>
          </div>

        </div>

        <div class="col-md-3">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Business</h5>
    <p>71</p>
  </div>
</div>

</div>

<div class="col-md-3">

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Residential</h5>
    <p>35</p>
  </div>
</div>

</div>
      </div>
        </section>
        {/* Water and Electricity */}
        <div className='row'>

            {/* Electricity Informatio */}
            <div className='col-lg-6'>

                <div className='card'> 
                    <div className='card-body'>
                        <div className='card-title'> Electricity Meter Information </div>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Prepaid</th>
                                <th scope="col">Conventional</th>
                                <th scope="col">Good Condition</th>
                                <th scope="col">Bad Condition</th>
                                </tr>
                            </thead>


                            <tbody>
                                <tr>
                                <td>69</td>
                                <td>88</td>
                                <td>44</td>
                                <td>68</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
            

            {/* Water Meter Infomation */}
            <div  className='col-md-6'>
            <div className='card'> 
                    <div className='card-body'>
                        <div className='card-title'> Water Meter Information </div>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">Prepaid</th>
                                <th scope="col">Conventional</th>
                                <th scope="col">Good Condition</th>
                                <th scope="col">Bad Condition</th>
                                </tr>
                            </thead>


                            <tbody>
                                <tr>
                                <td>69</td>
                                <td>88</td>
                                <td>44</td>
                                <td>68</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        
        </div>   
            </div>

            <div className='col-md-1'>

            </div>

        </div>

        <div className='row'>
            <div className='col'>
                <p className='card-title'>Data</p>
                {
                    forms.map((form,i)=>{
                        <p key={i}>{form[i]}</p>
                    })
                }
            </div>
        </div>
 
    </>
    
  )
}

export default AdminDashboard