
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Studentlist() {

    const [students, setstudent] = useState([])
    useEffect(async () => {

        try {
            let data = await fetch("https://61cae4ef194ffe0017788a0d.mockapi.io/api/student");
            let list = await data.json();
            setstudent(list)
        } catch (error) {
            console.log(error)
        }

    }, [])



    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Student List</h1>
               
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                <th>SI.No</th>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Details</th>

                                </tr>
                            </thead>

                            <tbody>

                                {
                                    students.map((item) => {
                                        return <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.avatar}</td>
                                            <td><Link to={`/student/${item.id}`}><button class="btn btn-primary btn-sm">
                                                view</button></Link></td>
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

export default Studentlist

