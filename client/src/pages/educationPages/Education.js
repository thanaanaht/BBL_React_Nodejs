import React from "react";
import "./Education.css";
import Manubar from "../../components/Manubar";

const redirectToyearselect1101 = () => {
  window.location.href = "/yearselect1101";
};

const Education = () => {
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

              <div className="edu-box" onClick={redirectToyearselect1101 } > 
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
              <div className="edu-box" >
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
