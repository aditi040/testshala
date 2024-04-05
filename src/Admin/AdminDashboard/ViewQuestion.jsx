import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
function ViewQuestion({Toggle}){

    const [apiData,setApiData]=useState([])
    function getData(){
        axios.get('https://660eb84c356b87a55c4fe00f.mockapi.io/test')
        .then((response) => {
            setApiData(response.data);
        })
    }

   useEffect(()=> {
getData();
    },[])

    function handleDelete(id){
        axios.delete(`https://660eb84c356b87a55c4fe00f.mockapi.io/test/${id}`)
        .then(() => {
            getData();
        });
    }

    function setDataToStorage(id,questions,option1,option2,option3,option4,selectans) {
        localStorage.setItem('id', id);
        localStorage.setItem('questions', questions);
        localStorage.setItem('option1', option1);
        localStorage.setItem('option2', option2);
        localStorage.setItem('option3', option3);
        localStorage.setItem('option4', option4);
        localStorage.setItem('selectans', selectans);
      }
      
    return(
        <> 
        <Header Toggle={Toggle}/>
                    <div className="row">
            <div className="col-md-12"> 
            <div className="mb-2 mt-2">
            <Link to="/addquestion">
            <button className="btn btn-primary">Add Question</button>  
            </Link>
            
            </div>
                <table className="table table-bordered table-striped table-dark table-hover">
                    <thead>
                    <tr>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Option1</th>
                    <th>Option2</th>
                    <th>Option3</th>
                    <th>Option4</th>
                    <th>Answer</th>
                    <th>Edit</th>
                    <th>Delete</th>

                    </tr>
                    </thead>
                    <tbody>
                        {apiData.map((item) =>{
                            return(
                                <>
                                <tr>
                    <td>{item.id}</td>
                    <td>{item.e_questions}</td>
                    <td>{item.e_option1}</td>
                    <td>{item.e_option2}</td>
                    <td>{item.e_option3}</td>
                    <td>{item.e_option4}</td>
                    <td>{item.e_selectans}</td>
                    <td>
                    <Link to="/edit">
                    <button className="btn btn-primary" onClick={() => setDataToStorage(item.id,item.e_questions,item.e_option1,item.e_option2,item.e_option3,item.e_option4,item.e_selectans)}>Edit</button>
                    </Link>
                    </td>
                    <td> 
                    <button className="btn btn-danger" onClick={() =>{ if (window.confirm('Are you sure you want to delete this Test?')) {handleDelete(item.id)}}}>Delete</button>
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

export default ViewQuestion;