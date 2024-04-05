import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function AddQuestionForm({Toggle}){
 const[questions,setQuestions]=useState();
 const[option1,setOption1]=useState();
 const[option2,setOption2]=useState();
 const[option3,setOption3]=useState();
 const[option4,setOption4]=useState();
 const[selectans,setSelectans]=useState();

 const navigate=useNavigate();

 const handleSubmit =(e) => {
     e.preventDefault();
     axios.post('https://660eb84c356b87a55c4fe00f.mockapi.io/test',{
     e_questions:questions,
     e_option1:option1,
     e_option2:option2,
     e_option3:option3,
     e_option4:option4,
     e_selectans:selectans
  } ).then(() => {
     navigate('/viewquestiondetails');
  })
 }
  return (<>
    <Header Toggle={Toggle}/>
    <div className="bootstrap-wrapper">
      <div className="row mt20">
        <div className="col-md-12">
          <h1>
            Add Questions
          </h1>
          <div className="card">
            <div className="card-header">
              <h5 className="card-subtitle">Enter the detail of the new question</h5>
            </div>
            <div className="card-body">
              <form className="mt20" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Question Content</label>
                  <textarea
                    required
                    name="content"
                    className="form-control"
                    
                    onChange={(e) => setQuestions(e.target.value)}
                  ></textarea>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Enter Option1</label>
                      <input
                        required
                        name="option1"
                        type="text"
                        className="form-control"
                        
                        onChange={(e) => setOption1(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Enter Option2</label>
                      <input
                        required
                        name="option2"
                        type="text"
                        className="form-control"
                      
                        onChange={(e) => setOption2(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Enter Option3</label>
                      <input
                        name="option3"
                        type="text"
                        className="form-control"
                        
                        onChange={(e) => setOption3(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Enter Option4</label>
                      <input
                        name="option4"
                        type="text"
                        className="form-control"
                        
                        onChange={(e) => setOption4(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Select Answer</label>
                  <select
                    required
                    name="answer"
                    className="form-control"
                    onChange={(e) => setSelectans(e.target.value)}
                  >
                    <option value="">Select Answer</option>
                    <option>{option1}</option>
                    <option>{option2}</option>
                    <option>{option3}</option>
                    <option>{option4}</option>
                  </select>
                </div>

                <div className="container text-center">
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddQuestionForm;
