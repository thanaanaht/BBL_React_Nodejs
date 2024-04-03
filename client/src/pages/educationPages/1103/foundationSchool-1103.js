import React, { useState } from "react";
import './earlyChildhood-1103.css';

const redirectTomilk1101lastyear = () => {
    window.location.href = "/";
};

const redirectToFoundationSchool1103 = () => {
    window.location.href = "/Education";
};

const FoundationSchool1103 = () => {
    const [centerName, setCenterName] = useState("");
    const [studentCount, setStudentCount] = useState("");
    const [unitPrice, setUnitPrice] = useState("");

    return (
    <div>
            <div className={'titleContainer'}>
                <br />
                กรุณากรอกฟอร์มให้ครบถ้วน
                <br />
            </div>
      
    
      

        <div className="one-row">
            <div className="title-sub">
                 4.สถานศึกษาสังกัดกรมสามัญศึกษา (เดิม) <br/>
                 (โรงเรียนศึกษาสงเคราะห์, โรงเรียนศึกษาพิเศษ)
            </div>
            <div className="row-column">
                <div className="end-box" onClick={redirectTomilk1101lastyear}>
                    <p> นำเข้าข้อมูลจากปีก่อนหน้า    </p>
                </div>
            </div>
        </div> 
        
        <div className="one-row">

                
                
            <div className="one-row">
                <div className="containerBox">
                    <label className="form-label">ชื่อศูนย์</label>
                    <input
                        value={centerName}
                        placeholder="Enter here"
                        onChange={(ev) => setCenterName(ev.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="containerBox">
                    <label className="form-label">จำนวนนักเรียน</label>
                    <input
                        value={studentCount}
                        placeholder="Enter here"
                        onChange={(ev) => setStudentCount(ev.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="containerBox">
                    <label className="form-label">ราคาต่อหน่วย (บาท)</label>
                    <input
                        value={unitPrice}
                        placeholder="Enter here"
                        onChange={(ev) => setUnitPrice(ev.target.value)}
                        className="inputBox"
                    />
                </div>
            </div>
       
        </div>
        


        <div className="submitBox" onClick={redirectToFoundationSchool1103}>
            <p>ถัดไป</p>
        </div>

           

    </div>
    );
};



export default FoundationSchool1103;
