import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
function AddTest({Toggle}){
    const[name,setName]=useState();
    const[description,setDescription]=useState();
    
    const navigate=useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();
        axios.post('https://660d5bb36ddfa2943b342fa7.mockapi.io/crud',{
        e_name:name,
        e_description:description
     } ).then(() => {
        navigate('/testdetails');
     })
    }
        return (<>
          <Header Toggle={Toggle}/>
            <div className="bootstrap-wrapper">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                <div className="mb-2 mt-2">
            <Link to="/testdetails">
            <button className="btn btn-primary">View Tests</button>  
            </Link>
            </div>
                  <form onSubmit={handleSubmit} >
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input 
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        placeholder="Enter here"
                        onChange={(e) => setName(e.target.value)}
                        />
                      
                    </div>
        
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        className="form-control"
                        id="description"
                        placeholder="Enter Category Description"
                       
                        rows="5"
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
        
                    <div className="container text-center mt-3">
                      <button type="submit" className="btn btn-primary">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </>
          );
    
}

export default AddTest;


