import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Main2() {
  const [toggle, setToggle] = useState(true);
  const [profileDetails, setProfileDetails] = useState({
    username: 'aditi42',
    userid: '80847',
    phone: '9875829972',
    role: 'Admin',
    status: 'Active'
  });

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleProfileUpdate = (field, value) => {
    setProfileDetails({ ...profileDetails, [field]: value });
  };

  const handleInputChange = (e, field) => {
    handleProfileUpdate(field, e.target.value);
  };

  return (
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
        {toggle && (
          <div className='col-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>
        )}
        {toggle && <div className='col-2'></div>}
        <div className='col'>
          <Header toggle={handleToggle} />
          <div className='profile'>
            <div>
              <h1>Your Profile Details</h1>
              <div className='bootstrap-wrapper'>
                <div id='profiledetails' className='container'>
                  <img
                    src='https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg'
                    alt=''
                    className='profile-image'
                  />
                  <h1 className='mt20'>{profileDetails.username}</h1>
                  <br />
                  <table className='table text-center'>
                    <tbody>
                      <tr>
                        <td>Username</td>
                        <td>
                          {toggle ? (
                            profileDetails.username
                          ) : (
                            <input
                              type='text'
                              value={profileDetails.username}
                              onChange={(e) => handleInputChange(e, 'username')}
                            />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Userid</td>
                        <td>
                          {toggle ? (
                            profileDetails.userid
                          ) : (
                            <input
                              type='text'
                              value={profileDetails.userid}
                              onChange={(e) => handleInputChange(e, 'userid')}
                            />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>
                          {toggle ? (
                            profileDetails.phone
                          ) : (
                            <input
                              type='text'
                              value={profileDetails.phone}
                              onChange={(e) => handleInputChange(e, 'phone')}
                            />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Role</td>
                        <td>
                          {toggle ? (
                            profileDetails.role
                          ) : (
                            <input
                              type='text'
                              value={profileDetails.role}
                              onChange={(e) => handleInputChange(e, 'role')}
                            />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>
                          {toggle ? (
                            profileDetails.status
                          ) : (
                            <input
                              type='text'
                              value={profileDetails.status}
                              onChange={(e) => handleInputChange(e, 'status')}
                            />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br />
              <div className='text-center update'>
                <button className='btn btn-primary' onClick={handleToggle}>
                  {toggle ? 'EDIT' : 'SAVE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
