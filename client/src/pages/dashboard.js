import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './LoginPage.css';
import Manubar from "../components/Manubar";
import EditDBMember from './EditDBMember';
import { useParams } from 'react-router-dom'; // Import useParams

function Dashboard() {

  
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [level, setLevel] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginlist, setLoginlist] = useState([]);

  const { username } = useParams();
  const PORT = 3300;
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:${PORT}/login`);
        const { token, username, area, local, level, loginlist } = response.data;

        if (isMounted) {
          setToken(token);
          setArea(area);
          setLocal(local);
          setLevel(level);
          setLoginlist(loginlist);

          if (token) {
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.error('Error fetching login data', error);
        // You can handle errors here, e.g., set an error state and display a message to the user
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to prevent memory leaks
    };
  }, []);

  return (
    <div>
     

        {loginlist && loginlist.length > 0 && (
          <div>
            <h2>Updated Login List:</h2>
            <ul>
              {loginlist.map((login, index) => (
                <li key={index}>
                  Username: {login.username}, Password: {login.password} Area: {login.area}, Local: {login.local}, Level: {login.level}
                </li>
              ))}
            </ul>
          </div>
        )}

        {token && (
          <>
            <Manubar />
          </>
        )}
      <div className={'titleContainer'}>
        <div>ลงทะเบียนเข้าใช้งาน</div>
      </div>
    </div>
  );
}

export default Dashboard;
