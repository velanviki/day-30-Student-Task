import React from 'react'
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
function Addattendance() {
    let params = useParams()
    let navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            attendance: "present",
            date: "",
            studentId : parseInt( params.id)
        },
        onSubmit : async(values) => {
            console.log(values)
            await fetch("https://61cae4ef194ffe0017788a0d.mockapi.io/api/attendance",{
                method : "POST",
                body : JSON.stringify(values),
                headers : {
                   "content-type" : "application/json"
                }
            })
            
           navigate(`/student/${params.id}`)
        }
    })
    return (
        <>
            <h1 class="h3 mb-0 text-gray-800">Add attendance</h1>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <select name='attendance' className='form-control' onChange={formik.handleChange}
                             value={formik.values.attendance}>
                                
                                <option value="Absent">Absent</option>
                                <option value="present">Present</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <input type="date" name='date' className='form-control' onChange={formik.handleChange}
                             value={formik.values.date}></input>
                        </div>
                        <div className='col-lg-6 mt-3'>
                            <input type="submit" className='btn btn-primary'></input>
                        </div>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Addattendance
