import React from 'react'
import{Link} from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'ldrs/ring'
import 'ldrs/pulsar'

import { useNavigate } from 'react-router-dom'
function CreateUser() {

  

    const [Sname, setName] = useState()
    const [Sid, setSid] = useState()
    const [Cource, setCource] = useState()
    const [Fees, setFees] = useState()
    const [Startdate, setSdate] = useState()
    const [Enddate, setEdate] = useState()

    const navigate= useNavigate();


    const Submit = (e) =>{
        e.preventDefault();
        axios.post("https://studb12.onrender.com/api/students",{Sname,Sid,Cource,Fees,Startdate,Enddate})
        .then(result=>{
            console.log(result)
            Swal.fire({
              title: "Student Added successfully!",
              // text: "You clicked the button!",
              icon: "success"
            });
            navigate('/');
        })
        .catch(err=>console.log(err));
    }
    


  return (
    <> 
    {/* <Header/> */}
    
    <div className='d-flex justify-content-center vh-100 bg-secondary  '>
        <div className=' d-flex justify-content-center h-55  w-50 bg-white rounded p-3 m-3 border border-danger rounded'>

        <form  onSubmit={Submit}>
            <h2>Fill Student Information</h2>

    <div class="form-row">
    <div class="form-group col-md-6">
      <label 
      >Name</label>
     
      <input type="text" class="form-control" id="inputEmail4" placeholder="enter name"
      onChange={(e)=> setName(e.target.value)}/>
    </div>

    <div class="form-group col-md-6">
      <label >Sid</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="enter Sid"
      onChange={(e)=> setSid(e.target.value)}/>
    </div>
  </div>

  <div class="form-group col-md-6">
    <label >Cource</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="enter cource name"
    onChange={(e)=> setCource(e.target.value)}/>
  </div>

  <div class="form-group col-md-6">
    <label >Fees</label>
    <input type="number" class="form-control" id="inputAddress" placeholder="enter fees"
    onChange={(e)=> setFees(e.target.value)}/>
  </div>

  <div class="form-group col-md-6">
    <label >StartDate</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="enter StartDate"
    onChange={(e)=> setSdate(e.target.value)}/>
  </div>

  <div class="form-group col-md-6">
    <label >Enddate</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="enter EndDate"
    onChange={(e)=> setEdate(e.target.value)}/>
  </div>



  <button type="submit" class="btn btn-outline-primary m-3">Submit</button>


<Link to="/users"  className='btn btn-success'> Student List</Link> 

    </form>

        </div>
    </div>





</>

        
    
  )
}

export default CreateUser