import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Admin/AdminDashboard/Header";

function UserViewTest({Toggle}){

    const [apiData,setApiData]=useState([])
    function getData(){
        axios.get('https://660d5bb36ddfa2943b342fa7.mockapi.io/crud')
        .then((response) => {
            setApiData(response.data);
        })
    }

   useEffect(()=> {
getData();
    },[])

    function handleDelete(id){
        axios.delete(`https://660d5bb36ddfa2943b342fa7.mockapi.io/crud/${id}`)
        .then(() => {
            getData();
        });
    }

    // function setDataToStorage(id, name, description) {
    //     localStorage.setItem('id', id);
    //     localStorage.setItem('name', name);
    //     localStorage.setItem('description', description);
    //   }
      
    return(
        <>
        <Header Toggle={Toggle}/>
            <div className="row">
            <div className="col-md-12">
            <div className="mb-2 mt-2">
            </div>
                <table className="table table-bordered table-striped table-dark table-hover">
                    <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name of Test</th>
                    <th>Description</th>
                    {/* <th>Edit</th> */}
                    <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item) =>{
                            return(
                                <>
                                <tr>
                    <td>{item.id}</td>
                    <td>{item.e_name}</td>
                    <td>{item.e_description}</td>
                    {/* <td>
                    <Link to="/update">
                    <button className="btn btn-primary" onClick={() => setDataToStorage(item.id,item.e_name,item.e_description)}>Edit</button>
                    </Link>
                    </td> */}
                    {/* <td> 
                    <button className="btn btn-danger" onClick={() =>{ if (window.confirm('Are you sure you want to delete this Test?')) {handleDelete(item.id)}}}>Delete</button>
                    </td> */}
                    <td>
                    <Link to="/testinstructions">
                    <button className="btn btn-primary">View</button>
                    </Link>
                    </td>

                    
                    </tr>  
                                </>
                            )
                        })}
                    </tbody>

                </table>
            </div>

            </div>
        </>
    )
}

export default UserViewTest;
