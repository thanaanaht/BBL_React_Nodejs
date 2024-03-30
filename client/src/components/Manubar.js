import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Manubar.css';


const Manubar = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [level, setLevel] = useState('');
  const [loginlist, setLoginlist] = useState([]);
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Moved inside the component
  const [usernameError ,setUsernameError] = useState('');
  const [passwordError ,setPasswordError] = useState('');

  const PORT = 3300;
  
    useEffect(() => {
      Axios.get(`http://localhost:${PORT}/login`)
      .then(response => {
        console.log(response.data);

        const receivedToken = response.data.token;
        const receivedUsername = response.data.username;
        const receivedArea = response.data.area;
        const receivedLocal = response.data.local;
        const receivedLevel = response.data.level;

        setToken(receivedToken);
        setUsername(receivedUsername);
        setArea(receivedArea);
        setLocal(receivedLocal);
        setLevel(receivedLevel);

        if (receivedToken) {
          setIsAuthenticated(true);
        }
      })
      .catch(error => {
        console.error('Error fetching login data', error);
      });
    }, []);


  return (
<div class="navbar">
    <div class="navbarleft">
        <a href="/">หน้าแรก</a>
        <a href="/factor">ปรับค่าแฟกเตอร์ประจำหน่วยงาน</a>
    </div>
    <div class="navbarright">
        {username}
    </div>
</div>

  );
}


export default Manubar;
