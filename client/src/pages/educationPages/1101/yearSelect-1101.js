import React from "react";
import './Yearselect1101.css';
import Manubar from "../../../components/Manubar";

const redirectToeducationfromselect1101 = () => {
  window.location.href = "/milk1101";
};

const Yearselect1101 = () => {
  return (
    <div>
      <Manubar/>
      <div className={'titleContainer'}>
          <br/>
            กรุณาเลือกปีงบประมาณ
          <br/>
      </div>

            <div className={'selectBox'}>
                <div className={'yearSelect'}>
                <select id="yearSelect-text">
                    <option value="2568">2568</option>
                    <option value="2567">2567</option>
                    <option value="2566">2566</option>
                    <option value="2565">2565</option>
                    <option value="2564">2564</option>
                    <option value="2563">2563</option>
                </select>
                </div>

        </div>

      <div className="submitBox" onClick={redirectToeducationfromselect1101}>
            เลือก
      </div>




    </div>
  );
};

export default Yearselect1101;