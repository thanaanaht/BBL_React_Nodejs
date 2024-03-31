import React, { useState } from "react";
import './milk-1101.css';

const redirectTomilk1101lastyear = () => {
    window.location.href = "/milk1101";
};

const redirectTomilk1101 = () => {
    window.location.href = "/milk1101";
};

const Milk1101 = () => {
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
                รายการอาหารเสริม (นม) ระดับปฐมวัย    
            </div>
            <div className="row-column">
                <div className="end-box" onClick={redirectTomilk1101lastyear}>
                    <p> นำเข้าข้อมูลจากปีก่อนหน้า    </p>
                </div>
            </div>
        </div> 
        
        <div className="one-row">

                <div className="containerBox">
                    <label className="form-label">ราคาต่อหน่วยที่ขอรับการจัดสรร (บาท)</label>
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
        


        <div className="submitBox" onClick={redirectTomilk1101}>
            <p>ถัดไป</p>
        </div>

           

    </div>
    );
};



export default Milk1101;
