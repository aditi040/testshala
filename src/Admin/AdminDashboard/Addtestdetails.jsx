import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import AddTest from './AddTest';
import Sidebar from './Sidebar';
function Addtestdetails() {
  const[toggle,setToggle]= useState(true);
  const Toggle=()=>{
    setToggle(!toggle);
  }
  return (
    <div className='container-fluid bg-secondary min-vh-100'>
    <div className='row'>
      {toggle && <div className='col-2 bg-white vh-100 position-fixed'>
      <Sidebar/>
      </div>}
      {toggle && <div className='col-2'></div>}
      <div className='col'>
        <AddTest Toggle={Toggle}/>
      </div>
    </div>
  </div>
  );
}

export default Addtestdetails;









