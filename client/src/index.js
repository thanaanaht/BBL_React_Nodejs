// App.js
import { createRoot } from 'react-dom/client'; 
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/mainPage/Layout";
import Home from "./pages/mainPage/Home";
import Contact from "./pages/mainPage/Contact";
import NoPage from "./pages/mainPage/NoPage";
import Dashboard from "./pages/mainPage/dashboard";
import Footer from "./components/Footer";
import EditDBMember from "./pages/mainPage/EditDBMember"
import LoginPage from "./pages/mainPage/LoginPage";
import Education from "./pages/educationPages/Education";
import Yearselect1103 from "./pages/educationPages/1103/yearSelect-1103";
import EarlyChildhood1103 from "./pages/educationPages/1103/earlyChildhood-1103";
import Supplement1103 from "./pages/educationPages/1103/supplement-1103"
import BasicEducation1103 from "./pages/educationPages/1103/BasicEducation-1103"
import OutSystemEducation1103 from "./pages/educationPages/1103/outSystemEducation-1103"
import FoundationSchool1103 from "./pages/educationPages/1103/foundationSchool-1103";
import ChildCareCenter1103 from "./pages/educationPages/1103/childCareCenter-1103";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="loginpage" element={isAuthenticated ? <Navigate to="/dashboard/${username}'" /> : <LoginPage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="editmember" element={<EditDBMember />} />
          <Route path="education" element={<Education/>} />
          <Route path="yearselect1103" element= {<Yearselect1103 />} /> 
          <Route path="EarlyChildhood1103" element= {<EarlyChildhood1103 />} /> 
          <Route path="Supplement1103" element= {<Supplement1103 />} /> 
          <Route path="BasicEducation1103" element= {<BasicEducation1103 />} /> 
          <Route path="OutSystemEducation1103" element= {<OutSystemEducation1103 />} /> 
          <Route path="FoundationSchool1103" element= {<FoundationSchool1103 />} /> 
          <Route path="ChildCareCenter1103" element= {<ChildCareCenter1103 />} /> 
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);
