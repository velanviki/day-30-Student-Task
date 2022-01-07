import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function Attendancelist() {

const [attendance, setAttendance] = useState([]);
let params = useParams()
useEffect(async() => {
  try {
    let attData= await fetch(`https://61cae4ef194ffe0017788a0d.mockapi.io/api/attendance?studentId=${params.id}`);
    let attList = await attData.json();
    
    setAttendance(attList);
  } catch (error) {
      console.log(error)
  }
}, [])


    return (
        <>
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Student Info</h1>
        <Link to={`/attendance/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Add attendance</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Attendance</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Date</th>
                                    
                                </tr>
                            </thead>
                          
                            <tbody>
                                {
                                    attendance.map((items)=>{
                                       return  <tr>
                                       <td>{items .attendance }</td>
                                       <td>{items .date}</td>
                                       
                                   </tr>
                                    })
                                }
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




        </>






    )
}

export default Attendancelist
