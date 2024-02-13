import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { GiTeacher } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import Header from "./Header";
function Home({Toggle}) {
  return (
    <>
    <div className='px-3'>
      <Header Toggle={Toggle}/>
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
        <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'></h3>
                    <p className='fs-5'>Profiles</p>
                </div>
                <i className='bi p-3 fs-1'><IoPersonSharp/></i>
            </div>
        </div>
        <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'></h3>
                    <p className='fs-5'>Test Categories</p>
                    
                </div>
                <i className='bi p-3 fs-1'><BiSolidCategory/></i>
            </div>
        </div>
        <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'></h3>
                    <p className='fs-5'>Teacher</p>
                </div>
                <i className='bi p-3 fs-1'><GiTeacher/></i>
            </div>
        </div>
        <div className='col-md-3 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                    <h3 className='fs-2'></h3>
                    <p className='fs-5'>Student</p>
                </div>
                <i className='bi p-3 fs-1'><PiStudentFill/></i>
            </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
