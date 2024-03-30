import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Education1101() {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [AREA, setArea] = useState(null);
  const [Location_user, setLocation_user] = useState('local');
  const [Level, setLevel] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [Term, setTerm] = useState(1);
  const [Year, setYear] = useState(2567);
  const [K1_Tuition_Fee, setK1_Tuition_Fee] = useState(0);
  const [K1_Book_Fee, setK1_Book_Fee] = useState(0);
  const [K1_Tool_Fee, setK1_Tool_Fee] = useState(0);
  const [K1_Activity_Fee, setK1_Activity_Fee] = useState(0);
  const [K1_Uniform_Fee, setK1_Uniform_Fee] = useState(0);
  const [K1_Tuition_Number, setK1_Tuition_Number] = useState(0);
  const [K1_Book_Number, setK1_Book_Number] = useState(0);
  const [K1_Tool_Number, setK1_Tool_Number] = useState(0);
  const [K1_Activity_Number, setK1_Activity_Number] = useState(0);
  const [K1_Uniform_Number, setK1_Uniform_Number] = useState(0);
  const [STATUS, setSTATUS] = useState('');
  const [dataList, setDataList] = useState([]);
  const PORT = 3300;
  useEffect(() => {
    resLogin();
  }, []);

  const resLogin = () => {
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
        setLocation_user(receivedLocal);
        setLevel(receivedLevel);

        if (receivedToken) {
          setIsAuthenticated(true);
        }
      })
      .catch(error => {
        console.error('Error fetching login data', error);
      });
  };

  const deleteData = (id) => {
    Axios.delete(`http://localhost:${PORT}/education1101/${id}`).then((response) => {
      setDataList(
        dataList.filter((val => {
          return val.id !== id;
        }))
      )
    })
  }

  const editData = (id) => {
    const itemToEdit = dataList.find(item => item.id === id);
    if (itemToEdit) {
      setTerm(itemToEdit.Term);
      setYear(itemToEdit.Year);
      setK1_Book_Number(itemToEdit.K1_Book_Number);
      setK1_Book_Fee(itemToEdit.K1_Book_Fee);
      setK1_Tuition_Number(itemToEdit.K1_Tuition_Number);
      setK1_Tuition_Fee(itemToEdit.K1_Tuition_Fee);
      setK1_Tool_Number(itemToEdit.K1_Tool_Number);
      setK1_Tool_Fee(itemToEdit.K1_Tool_Fee);
      setK1_Uniform_Number(itemToEdit.K1_Uniform_Number);
      setK1_Uniform_Fee(itemToEdit.K1_Uniform_Fee);
      setK1_Activity_Number(itemToEdit.K1_Activity_Number);
      setK1_Activity_Fee(itemToEdit.K1_Activity_Fee);
      setSTATUS(itemToEdit.STATUS);
    }
  };

  const approveStatus = (id) => {
    Axios.put(`http://localhost:${PORT}/education1101/update`, { STATUS: 'APPROVED', id: id }).then((response) => {

      setDataList(
        dataList.map((val) => {
          return val.id === id ? {
            id: val.id,
            STATUS: 'APPROVED'
          } : val; 
        })
      );
    });
  };
  
  


  const rejectStatus = (id) => {
    Axios.put(`http://localhost:${PORT}/education1101/update`, { STATUS: 'REJECTED', id: id }).then((response) => {

    setDataList(
      dataList.map((val) => {
        return val.id === id ? {
          id: val.id,
          STATUS: 'REJECTED'
        } : val; 
      })
    );
  });
};


  const getData = () => {
    Axios.get(`http://localhost:${PORT}/education1101`).then((response) => {
      setDataList(response.data);
    });
  };

  const addData = () => {
    Axios.post(`http://localhost:${PORT}/education1101`, {
      Username: Username,
      Term: Term,
      Year: Year,
      Location: Location_user,
      AREA: AREA,
      K1_Tuition_Fee: K1_Tuition_Fee,
      K1_Book_Fee: K1_Book_Fee,
      K1_Tool_Fee: K1_Tool_Fee,
      K1_Uniform_Fee: K1_Uniform_Fee,
      K1_Activity_Fee: K1_Activity_Fee,
      K1_Tuition_Number: K1_Tuition_Number,
      K1_Book_Number: K1_Book_Number,
      K1_Tool_Number: K1_Tool_Number,
      K1_Uniform_Number: K1_Uniform_Number,
      K1_Activity_Number: K1_Activity_Number,
      STATUS: STATUS
    })
      .then(response => {
        console.log('Data added successfully:', response.data);
        setDataList([...dataList, response.data]);
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <div className="App container">
      <h1>Education 1101</h1>
      <div className="information">
        <div className="mb-3">
          <label className="form-label">Username: {Username}</label>
          <label className="form-label">Area: {AREA}</label>
          <label className="form-label">Local: {Location_user}</label>
          <label className="form-label">Level: {Level}</label><br/>

          <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="Type" className="form-label">ปีการศึกษา:</label>
              <input
                type="text"
                className="form-control"
                placeholder="ปีการศึกษา"
                value={Year}
                onChange={event => setYear(event.target.value)}
              />
            </div>
            <div className="mb-3" style={{  alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>
                <label htmlFor="Type" className="form-label">ภาคเรียน:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ภาคเรียน"
                  value={Term}
                  onChange={event => setTerm(event.target.value)}
                />
              </div>
            </div>
            <br/>
            
           

            <div className="mb-3">
              <label className="form-label">ค่าหนังสือ</label>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                  <label htmlFor="Type" className="form-label">อนุบาล 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="จำนวนนักเรียน"
                    value={K1_Book_Number}
                    onChange={event => setK1_Book_Number(event.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">หน่วยละ:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="หน่วยละ"
                    value={K1_Book_Fee}
                    onChange={event => setK1_Book_Fee(event.target.value)}
                  />
                </div>
            </div>

            <div className="mb-3">
              <label className="form-label">ค่าจัดการเรียนการสอน</label>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}>
                <label htmlFor="Type" className="form-label">อนุบาล 1:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="จำนวนนักเรียน"
                  value={K1_Tuition_Number}
                  onChange={event => setK1_Tuition_Number(event.target.value)}
                />
              </div>
              <div>
                <label className="form-label">หน่วยละ:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="หน่วยละ"
                  value={K1_Tuition_Fee}
                  onChange={event => setK1_Tuition_Fee(event.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">ค่าอุปกรณ์</label>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                  <label htmlFor="Type" className="form-label">อนุบาล 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="จำนวนนักเรียน"
                    value={K1_Tool_Number}
                    onChange={event => setK1_Tool_Number(event.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">หน่วยละ:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="หน่วยละ"
                    value={K1_Tool_Fee}
                    onChange={event => setK1_Tool_Fee(event.target.value)}
                  />
                </div>
            </div>

            <div className="mb-3">
              <label className="form-label">ค่าเครื่องแบบ</label>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                  <label htmlFor="Type" className="form-label">อนุบาล 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="จำนวนนักเรียน"
                    value={K1_Uniform_Number}
                    onChange={event => setK1_Uniform_Number(event.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">หน่วยละ:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="หน่วยละ"
                    value={K1_Uniform_Fee}
                    onChange={event => setK1_Uniform_Fee(event.target.value)}
                  />
                </div>
            </div>

            <div className="mb-3">
              <label className="form-label">ค่ากิจกรรมพัฒนาคุณภาพผู้เรียน</label>
            </div>
            <div className="mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                  <label htmlFor="Type" className="form-label">อนุบาล 1:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="จำนวนนักเรียน"
                    value={K1_Activity_Number}
                    onChange={event => setK1_Activity_Number(event.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">หน่วยละ:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="หน่วยละ"
                    value={K1_Activity_Fee}
                    onChange={event => setK1_Activity_Fee(event.target.value)}
                  />
                </div>
            </div>

            </div>
          <br/>
          <button className="btn btn-success" onClick={addData}>เพิ่มข้อมูล</button>
          <br/>
          <button className = "btn btn-primary" onClick={getData}> แสดงข้อมูล</button>
        <br/><br/>
        </div>

        {dataList.map((val, key) => {
          return (
            <div className="employee card">
              <div className = "card-body text-left">
                <p className="card-text"> ID: {val.id} Username: {val.Username} Term: {val.Term} Year: {val.Year} Location_user: {val.Location_user} 
                AREA: {val.AREA}
                ค่าหนังสือต่อหน่วย: {val.K1_Book_Fee} จำนวนนักเรียน: {val.K1_Book_Number}
                ค่ากิจกรรมต่อหน่วย: {val.K1_Activity_Fee} จำนวนนักเรียน: {val.K1_Activity_Number}
                ค่าเครื่องแบบต่อหน่วย: {val.K1_Uniform_Fee} จำนวนนักเรียน: {val.K1_Uniform_Number}
                ค่าอุปกรณ์ต่อหน่วย: {val.K1_Tool_Fee} จำนวนนักเรียน: {val.K1_Tool_Number}
                ค่าจัดการเรียนการสอนต่อหน่วย: {val.K1_Tuition_Fee} จำนวนนักเรียน: {val.K1_Tuition_Number}
                Status: {val.STATUS}</p>

                <button className="btn btn-danger"onClick={()=> { deleteData(val.id)}}>Delete</button>
                <button className="btn btn-danger"onClick={()=> { editData(val.id)}}>Edit</button>
                <button className="btn btn-danger"onClick={()=> { approveStatus(val.id)}}>APPORVE</button>
                <button className="btn btn-danger"onClick={()=> { rejectStatus(val.id)}}>REJECT</button>
                
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );

};
export default Education1101;