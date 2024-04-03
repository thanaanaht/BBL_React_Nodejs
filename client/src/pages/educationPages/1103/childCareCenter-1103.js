import React, { useState } from "react";
import './earlyChildhood-1103.css';

const redirectTomilk1101lastyear = () => {
    window.location.href = "/";
};

const redirectToChildCareCenter1103 = () => {
    window.location.href = "/ChildCareCenter1103";
};

const ChildCareCenter1103 = () => {
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
                 5.สถานศึกษาสังกังกรมพํฒนาสังคมและสวัสดิการ <br/>
                 (ศูนย์รับเลี้ยงเด็กของกรมประชาสงเคราะห์ (เดิม))
            </div>
            <div className="row-column">
                <div className="end-box" onClick={redirectTomilk1101lastyear}>
                    <p> นำเข้าข้อมูลจากปีก่อนหน้า    </p>
                </div>
            </div>
        </div> 
        
        <div className="one-row">

               
        <div className="containerBox">
                    <label className="form-label">จำนวน (แห่ง)</label>
                    <input
                        value={centerName}
                        placeholder="Enter here"
                        onChange={(ev) => setCenterName(ev.target.value)}
                        className={'inputBox'}
                    />
                </div>
                <div className="containerBox">
                    <label className="form-label">จำนวนนักเรียน (คน)</label>
                    <input
                        value={centerName}
                        placeholder="Enter here"
                        onChange={(ev) => setCenterName(ev.target.value)}
                        className={'inputBox'}
                    />
                </div>
                <div className="containerBox">
                    <label className="form-label">ราคาต่อหน่วยที่ขอรับการจัดสรร (บาท)</label>
                    <input
                        value={centerName}
                        placeholder="Enter here"
                        onChange={(ev) => setCenterName(ev.target.value)}
                        className={'inputBox'}
                    />
                </div>
       
        </div>
        


        <div className="submitBox" onClick={redirectToChildCareCenter1103}>
            <p>ถัดไป</p>
        </div>

           

    </div>
    );
};



export default ChildCareCenter1103 ;
