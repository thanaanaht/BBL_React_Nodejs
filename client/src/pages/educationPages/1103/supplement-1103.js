import React, { useState } from "react";
import './earlyChildhood-1103.css';

const redirectTomilk1101lastyear = () => {
    window.location.href = "/milk1103";
};

const redirectToredirectToBasicEducation1103 = () => {
    window.location.href = "/basiceducation1103";
};

const Supplement1103 = () => {
    const [centerName, setCenterName] = useState("");
    const [studentCount, setStudentCount] = useState("");
    const [unitPrice, setUnitPrice] = useState("");

    return (
    <div>
            <div className={'titleContainer'}>
                กรุณากรอกฟอร์มให้ครบถ้วน
                <br />
            </div>
      
        
      


            <div className="one-row">
            <div className="title-sub">
            1.สถานศึกษาสังกัดองค์กรปกครองส่วนท้องถิ่น
            </div>
            <div className="row-column">
                <div className="end-box" onClick={redirectTomilk1101lastyear}>
                    <p> นำเข้าข้อมูลจากปีก่อนหน้า    </p>
                </div>
            </div>
        </div> 

        {/* <div className={'title-sub'}>
                1.สถานศึกษาสังกัดองค์กรปกครองส่วนท้องถิ่น
         </div> */}
        
        <div className="one-row">
            <div className="title-sub">
                โรงเรียน อปท.
            </div>

 
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

        <div className="one-row">
            <div className="title-sub">
                โรงเรียนกีฬา (หลักสูตรปกติ)
            </div>

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
        
        


        <div className="submitBox" onClick={redirectToredirectToBasicEducation1103}>
            <p>ถัดไป</p>
        </div>

           

    </div>
    );
};



export default Supplement1103;
