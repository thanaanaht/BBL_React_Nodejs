import React, { useState, useEffect } from "react";
import Yearselect1101 from "./yearSelect-1103";

function Datacollection({ data }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [local, setLocal] = useState('');
  const [level, setLevel] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState([]);
  const PORT = 3300;

  {
    console.log("data",data);
  }


 

  return (
    <div>
      <Yearselect1101/>;
    </div>
  );
}

export default Datacollection;
