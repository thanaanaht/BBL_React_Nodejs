import React, { useState, useEffect } from "react";
import Axios from "axios"; // Import Axios
import "./Yearselect1103.css";
import Manubar from "../../../components/Manubar";

// const resLogin = () => {
//   Axios.get(`http://localhost:${PORT}/login`)
//     .then(response => {
//       console.log(response.data);

//       const receivedToken = response.data.token;
//       const receivedUsername = response.data.username;
//       const receivedArea = response.data.area;
//       const receivedLocal = response.data.local;
//       const receivedLevel = response.data.level;

//       setToken(receivedToken);
//       setUsername(receivedUsername);
//       setArea(receivedArea);
//       setLocal(receivedLocal);
//       setLevel(receivedLevel);

//       if (receivedToken) {
//         setIsAuthenticated(true);
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching login data', error);
//     });
// };


function Yearselect1101() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState(""); // Initialize Username state
  const [year, setYear] = useState("2569"); // Initialize Year state
  const [token, setToken] = useState("");
  const PORT = 3300; // Assuming your backend server runs on port 3300

  // useEffect(() => {
  //   {
  //       Axios.get(`http://localhost:${PORT}/login`)
  //       .then(response => {
  //           console.log(response.data);
  //           const receivedUsername= response.data.username;
  //           const receivedToken = response.data.token;


  //           setUsername(receivedUsername);
  //           setToken(receivedToken);
        
  //     })
  //     .catch(error => {
  //       console.error('Error fetching login data', error);
  //     });
       
  //   }

  // }, []); 

  
  
  // // Function to add data
  // const addData = () => {
  //   if(token){
  //     console.log("token:",token);
  //     console.log("username:",username);
  //     console.log("Year:",year);

  //     Axios.post(`http://localhost:${PORT}/EducationMilk1103`, {
  //       username: username,
  //       year: year,
  //     })

  //     .then(response => {
  //       console.log('Data added successfully:', response.data);
  //       setData([...data, response.data]); // Update data state with the new data
  //     })
  //     .catch(error => {
  //       console.error('Error adding data:', error);
  //     });

  //   }
      
  // };

  // Function to handle year change
  const handleYearChange = (event) => {
    // Set the selected year to the state
    setYear(event.target.value);
  };

  // Function to redirect to EarlyChildhood1103
  const redirectToEducationFromSelect1103 = () => {
    window.location.href = "/EarlyChildhood1103";
  };

  console.log({data});

  return (
    <div>
      <Manubar />
      <div className={"titleContainer"}>
        <br />
        กรุณาเลือกปีงบประมาณ
        <br />
      </div>
      <div className={"selectBox"}>
        <div className={"yearSelect"}>
          <select id="yearSelect-text" onChange={handleYearChange} value={year}>
            <option value="2569">2569</option>
            <option value="2568">2568</option>
            <option value="2567">2567</option>
            <option value="2566">2566</option>
            <option value="2565">2565</option>
            <option value="2564">2564</option>
            <option value="2563">2563</option>
          </select>
        </div>
      </div>
      Year: {year}
      {/* Corrected onClick event handler */}
      <div className="submitBox" onClick={() => { redirectToEducationFromSelect1103(); }}>
        เลือก
      </div>

      {console.log("console.log data:", data)}
    </div>
  );
}

export default Yearselect1101;
