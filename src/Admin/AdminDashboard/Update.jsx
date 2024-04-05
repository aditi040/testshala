import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Update(){
   const [id,setId] =useState(0);
   const [name,setName] = useState();
   const [description,setDescription] =useState();
   const navigate = useNavigate();

   useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setDescription(localStorage.getItem('description'));
   },[])

   const handleUpdate =(e) => {
    e.preventDefault();
    axios.put(`https://660d5bb36ddfa2943b342fa7.mockapi.io/crud/${id}`,{
    e_name:name,
    e_description:description
   }).then(()=>{
        navigate('/testdetails');
   });
   }
        return (
            <div className="bootstrap-wrapper">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                <div className="mb-2 mt-2">
            <Link to="/testdetails">
            <button className="btn btn-primary">View Tests</button>
            </Link>
            </div>
                  <form onSubmit={handleUpdate} >
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter here"
                        
                        />
                      
                    </div>
        
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter Category Description"
                       
                        rows="5"
                        
                      ></textarea>
                    </div>
        
                    <div className="container text-center mt-3">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
          );
    
}

export default Update;


