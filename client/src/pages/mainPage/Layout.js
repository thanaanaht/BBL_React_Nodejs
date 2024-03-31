import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          
        
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
