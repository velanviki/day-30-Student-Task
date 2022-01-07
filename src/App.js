import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Studentlist from './studentlist';
import Attendancelist from './attendancelist';
import Addattendance from './addattendance'

function App() {
  return (
    <div id="wrapper">

      <BrowserRouter>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/studentlist" element={<Studentlist />} />
                <Route path="/student/:id" element={<Attendancelist />} />
                <Route path="/attendance/:id" element={<Addattendance />} />
                
              </Routes>
            </div>
          </div>
        </div>
    
    
     
      </BrowserRouter >
    </div >
    
  );
}

export default App;
