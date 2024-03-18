import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Education = () => {
  return (
    <div>
      {/* Wrap the text inside Link component */}
      <Link to="/education1101">การศึกษา 1101</Link>
    </div>
  );
};

export default Education;
