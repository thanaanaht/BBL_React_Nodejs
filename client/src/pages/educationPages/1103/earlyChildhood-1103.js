import React, { useState, useContext } from "react";
import './earlyChildhood-1103.css';
import Datacollection from "./datacollection-1103"




const EarlyChildhood1103 = () => {
    const [aptname, setAptname] = useState("");
    const [aptnumber, setAptnumber] = useState(0);
    const [aptprice, setAptprice] = useState(0);
    const [data, setData] = useState([]);


   
    
    

  

    const redirectTomilk1101lastyear = () => {
        window.location.href = "/milk1103";
    };

    const redirectToSupplement1103 = () => {
        window.location.href = "/Supplement1103";
    };
//     // SELECT * FROM `educationmilk1103` WHERE 1`id`, `username`, `year`, 
//     //`EarlyChildName`, `EarlyChildNumber`, `EarlyChildPrice`, 
//     // 
//     // `SupplementAPTName`, `SupplementAPTNumber`,  `SupplementAPTPrice`, 
//     // `SupplementSportName`, `SupplementSportNumber`, `SupplementSportPrice`,
//     // `BasicEducationName`, `BasicEducationNumber`, `BasicEducationPrice`, 
//     // `OutSystemEducationName`,  `OutSystemEducationNumber`, `OutSystemEducationPrice`, 
//     // `FoundationName`, `FoundationNumber`,     `FoundationPrice`
    return (
        <div>
      
       
            <div className="titleContainer">
                <br />
                กรุณากรอกฟอร์มให้ครบถ้วน
                <br />
            </div>

            <div className="one-row">
                <div className="title-header">
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
                    <label className="form-label">ชื่อศูนย์</label>
                    <input
                        value={aptname}
                        placeholder="Enter here"
                        onChange={(ev) => setAptname(ev.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="containerBox">
                    <label className="form-label">จำนวนนักเรียน</label>
                    <input
                        value={aptnumber}
                        placeholder="Enter here"
                        onChange={(ev) => setAptnumber(ev.target.value)}
                        className="inputBox"
                    />
                </div>
                <div className="containerBox">
                    <label className="form-label">ราคาต่อหน่วย (บาท)</label>
                    <input
                        value={aptprice}
                        placeholder="Enter here"
                        onChange={(ev) => setAptprice(ev.target.value)}
                        className="inputBox"
                    />
                </div>
            </div>

            <div className="submitBox" onClick={redirectToSupplement1103}>
                <p>ถัดไป</p>
            </div>
            <div>
                    <Datacollection />
       
            </div>
        </div>
    );
};

export default EarlyChildhood1103;
