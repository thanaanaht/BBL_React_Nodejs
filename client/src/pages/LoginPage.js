import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [level, setLevel] = useState('');
  const [loginlist, setLoginlist] = useState([]);
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Moved inside the component

  const navigate = useNavigate(); // Moved inside the component

  useEffect(() => {
    if (token && isAuthenticated) {
      navigate('/dashboard/${username}',{
       
      }); // Redirect to dashboard or any authenticated route
    }
  }, [token, isAuthenticated, navigate]);

  const addLogin = () => {
    Axios.post('http://localhost:3133/login', {
      username,
      password,
    }).then(() => {
      setLoginlist(prevLoginlist => [
        ...prevLoginlist,
        {
          username,
          password,
          area,
          local,
          level,
        },
      ]);
      resLogin();
    });
  };

  const resLogin = () => {
    Axios.get('http://localhost:3133/login')
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
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="Username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Username:"
          onChange={event => {
            setUsername(event.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Password" className="form-label">
          Password:
        </label>
        <input
          type="password" // Changed type to "password"
          className="form-control"
          placeholder="Password:"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
      </div>

      <button className="btn btn-success" onClick={addLogin}>
        Login
      </button>

      {loginlist.length > 0 && (
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
        <div>
          <h2>Token:</h2>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
