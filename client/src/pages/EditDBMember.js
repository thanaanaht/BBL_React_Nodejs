import Axios from 'axios';
import { useState } from 'react';

function EditDBMember() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [level, setLevel] = useState('Local');
  
  const [MemberList, setMemberList] = useState([]);

  const addMember = () => {
    Axios.post('http://localhost:3133/membercreate', {
      username, password, area, local, level,
    }).then(() => {
      setMemberList([
        ...MemberList,
        { username, password, area, local, level },
      ]);
    }).catch(error => {
      console.error('Error adding member:', error);
      // Handle error here
    });
  };



  return (
    <div className="App container">
      <h1>ลงทะเบียนหน่วยงาน</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label htmlFor="Type" className="form-label">
              Username:
            </label>
            <input 
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Type" className="form-label">
              Password:
            </label>
            <input 
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Type" className="form-label">
              Area:
            </label>
            <input 
              type="text"
              className="form-control"
              placeholder="Area"
              onChange={(event) => setArea(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Type" className="form-label">
              Local:
            </label>
            <input 
              type="text"
              className="form-control"
              placeholder="Location Area"
              onChange={(event) => setLocal(event.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Type" className="form-label">
              Level:
            </label>
            <input 
              type="text"
              className="form-control"
              placeholder="Level"
              onChange={(event) => setLevel(event.target.value)}
            />
          </div>

          <button className="btn btn-success" onClick={addMember}>Add Member</button>

        </form>
      </div>
      <hr />
      {/* Logging */}
      <div>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        <p>Area: {area}</p>
        <p>Local: {local}</p>
        <p>Level: {level}</p>
      </div>
    </div>
  );
}

export default EditDBMember;
