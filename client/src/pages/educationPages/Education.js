import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import "./Education.css";
import Manubar from "../../components/Manubar";

const redirectToyearselect1103 = () => {
  window.location.href = "/yearselect1103";
};



function Education() {
  const PORT = 3300;
  
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [level, setLevel] = useState('');
  const [token, setToken] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginlist, setLoginlist] = useState([]);



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
      <Manubar/>
      <div className={'titleContainer'}>
          <br/>
            กรุณาเลือกหัวข้อการจัดการงบประมาณ
          <br/>
      </div>


      <div className="edu-row">
        <div className="edu-sub">
          <p>การจัดการศึกษาขั้นพื้นฐาน (เรียนฟรี 15ปี)</p>
        </div>
        <div className="edu-column">
              <div className="edu-box" >
                <p>ส่วนสำนักงบ</p>
              </div>
              <div className="edu-box" >
                <p>หัวหน้าเขตอนุมัติ</p>
              </div>

              <div className="edu-box"  > 
                <p>กรอกฟอร์มคำขอ</p>
              </div>
        </div>
      </div>
      <br/>
      <hr/>
      
      
      <div className="edu-row">
        <div className="edu-sub">
           <p>การจัดการศูนย์พัฒนาเด็กเล็ก</p>
        </div>
        <div className="edu-column">
              <div className="edu-box" >
                <p>ส่วนสำนักงบ</p>
              </div>
              <div className="edu-box" >
                <p>หัวหน้าเขตอนุมัติ</p>
              </div>
              <div className="edu-box" >
                <p>กรอกฟอร์มคำขอ</p>
              </div>
        </div>
      </div>
      <br/>
      <hr/>
      
      <div className="edu-row">
        <div className="edu-sub">
          <p>นม</p>
        </div>
        <div className="edu-column">
              <div className="edu-box" >
                <p>ส่วนสำนักงบ</p>
              </div>
              <div className="edu-box" >
                <p>หัวหน้าเขตอนุมัติ</p>
              </div>
              <div className="edu-box" onClick={redirectToyearselect1103 } >
                <p>กรอกฟอร์มคำขอ</p>
              </div>
        </div>
      </div>
      <br/>
      <hr/>

      <div className="edu-row">
        <div className="edu-sub">
          <p>อาหารกลางวัน</p>
        </div>
        <div className="edu-column">
              <div className="edu-box" >
                <p>ส่วนสำนักงบ</p>
              </div>
              <div className="edu-box" >
                <p>หัวหน้าเขตอนุมัติ</p>
              </div>
              <div className="edu-box" >
                <p>กรอกฟอร์มคำขอ</p>
              </div>
        </div>
      </div>
      <br/>
      <hr/>
      <div className="edu-row">
        <div className="edu-sub">
          <p>ค่าปัจจัยพื้นฐานสำหรับนักเรียนยากจน</p>
        </div>
        <div className="edu-column">
              <div className="edu-box" >
                <p>ส่วนสำนักงบ</p>
              </div>
              <div className="edu-box" >
                <p>หัวหน้าเขตอนุมัติ</p>
              </div>
              <div className="edu-box" >
                <p>กรอกฟอร์มคำขอ</p>
              </div>
        </div>
      </div>
      <br/>
      <hr/>
      


      {/* Wrap the text inside Link component */}
      {/* <Link to="/education1101">การศึกษา 1101</Link> */}
    </div>
  );
};

export default Education;
