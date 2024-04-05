import React from "react";
import "./AdminDashboard.css";
import Header from "./Header";
const Profile = ({Toggle}) => {
  return (
    <>
      {/* //   <Sidebar/>
  // <Header/> */}
  <Header Toggle={Toggle}/>
      <div className="profile">
    
        <div>
          <h1>Your Profile Details</h1>
          <div className="bootstrap-wrapper">
            <div id="profiledetails" className="container">
              <img
                src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                alt=""
                className="profile-image"/>
              <h1 className="mt20">Aditi Giri</h1>
              <br />
              



              
                  <table className="table text-center">
                    <tbody>
                      <tr>
                        <td>Username</td>
                        <td>aditi42</td>
                      </tr>
                      <tr>
                        <td>Userid</td>
                        <td>80847</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>9875829972</td>
                      </tr>
                      <tr>
                        <td>Role</td>
                        <td>Admin</td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>Active</td>
                      </tr>
                    </tbody>
                  </table>
                



            </div>
          </div>
          <br />
          <div className="text-center update">
            <button className="btn btn-primary">UPDATE</button>
            <button className="btn btn-secondary">SHARE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


// import React from "react";
// import "./AdminDashboard.css";
// const Profile = () => {
//   return (
//     <>
//       {/* //   <Sidebar/>
//   // <Header/> */}
//       <div className="profile">
//         <div>
//           <h1>Your Profile Details</h1>
//           <div className="bootstrap-wrapper">
//             <div id="profiledetails" className="container">
//               <img
//                 src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
//                 alt=""
//                 className="profile-image"/>
//               <h1 className="mt20">Aditi Giri</h1>
//               <br />
              



              
//                   <table className="table text-center">
//                     <tbody>
//                       <tr>
//                         <td>Username</td>
//                         <td>aditi42</td>
//                       </tr>
//                       <tr>
//                         <td>Userid</td>
//                         <td>80847</td>
//                       </tr>
//                       <tr>
//                         <td>Phone</td>
//                         <td>9875829972</td>
//                       </tr>
//                       <tr>
//                         <td>Role</td>
//                         <td>Admin</td>
//                       </tr>
//                       <tr>
//                         <td>Status</td>
//                         <td>Active</td>
//                       </tr>
//                     </tbody>
//                   </table>
                



//             </div>
//           </div>
//           <br />
//           <div className="text-center update">
//             <button className="btn btn-primary">UPDATE</button>
//             <button className="btn btn-secondary">SHARE</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

