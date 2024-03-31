import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/mainPage/Layout";
import Home from "./pages/mainPage/Home";
import Blogs from "./pages/mainPage/Blogs";
import Contact from "./pages/mainPage/Contact";
import NoPage from "./pages/mainPage/NoPage";
import Dashboard from "./pages/mainPage/dashboard";
import Footer from "./components/Footer";
import EditDBMember from "./pages/mainPage/EditDBMember"
import LoginPage from "./pages/mainPage/LoginPage";
import Education from "./pages/educationPages/Education";
import Education1101 from "./pages/educationPages/1101/educationForm-1101";
import Yearselect1101 from "./pages/educationPages/1101/yearSelect-1101";
import Milk1101 from "./pages/educationPages/1101/milk-1101";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} /> {/* Corrected path */}
          <Route path="education" element={<Education/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="loginpage" element={isAuthenticated ? <Navigate to="/dashboard/${username}'" /> : <LoginPage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="editmember" element={<EditDBMember />} /> 
          <Route path="milk1101" element= {<Milk1101 />} /> 
          <Route path="yearselect1101" element= {<Yearselect1101 />} /> 

        </Route> {/* Corrected closing tag */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
