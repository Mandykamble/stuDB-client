import React, { useState,useEffect } from 'react'
import{Link} from "react-router-dom"
import axios from 'axios'

//i. Student Name : Text
// ii. Student ID : Text
// iii. Course : Dropdown (Dropdown values : React JS, Node JS, Mongo DB, PostgreSQL, MySQL, SQLite)
// iv. Fees : Numeric
// v. Couse Start : Date Time
// vi. Course End : Date Time

function Users() {

    const [users, setUsers] = useState([])
    useEffect(()=>{     
            axios.get('https://studb12.onrender.com/api/students')
            .then(result=> {
                console.log(result)
                setUsers(result.data)
            })
            .catch(err=>console.log(err));
    },[])


    

  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center aline-items-center'>
        <div className=' bg-secondary w-50 bg-white rounded p-3 m-3'>
        <Link to="/"  className='btn btn-success'> Back</Link>
        
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Student ID</th>
                        <th>Cource</th>
                        <th>Fees</th>
                        <th>Sdate</th>
                        <th>Edate</th>
                        <th>Duration</th>
                    </tr>
                </thead>

                <tbody>
                    {


                    

                    users.map((user)=>{
                        return <tr>
                           <td>{user.Sname}</td>
                           <td>{user.Sid}</td>
                           <td>{user.Cource}</td> 
                           <td>{user.Fees}</td>
                           <td>{user.Startdate}</td>
                           <td>{user.Enddate}</td> 
                           <td>{user.Duration}</td> 
                        </tr>
                    })     
                    }
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users