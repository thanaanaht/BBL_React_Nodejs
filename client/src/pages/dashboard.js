// LoginPage.js
import React from 'react';
import Axios from 'axios';
import './LoginPage.css';
import Manubar from "../components/Manubar";


function Dashboard({ setIsAuthenticated, token, username }) {
  
  const resLogin = () => {
    Axios.get('http://localhost:3001/login')
      .then((response) => {
        console.log(response.data);

        const receivedToken = response.data.token;
        // Assuming setToken is a function passed as a prop, update it accordingly
        // setToken(receivedToken);

        if (receivedToken) {
          // Correct way to update the state
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching login data', error);
      });
  };

  // Call resLogin when component mounts
  // Assuming this is intended behavior, if not, adjust accordingly
  React.useEffect(() => {
    resLogin();
  }, []);

  return (
    <>
      {token && (
        <>
        <h1>ระบบสารสนเทศเพื่อการจัดทำงบประมาณ ขององค์กรปกครองส่วนท้องถิ่น</h1>
          {/* <EditDBCar username={email} />
          <EditDBTabien username={email} /> */}
          <Manubar/>

        </>
      )}
    </>
  );
}

export default Dashboard;



// import React from "react";
// import Manubar from "../components/Manubar";





// const Dashboard = () => {
//   return (
//     <div>
//       <h1>ระบบสารสนเทศเพื่อการจัดทำงบประมาณ ขององค์กรปกครองส่วนท้องถิ่น</h1>
//       <Manubar />





 
//     </div>
//   );
// };

// export default Dashboard;
