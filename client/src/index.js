import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Dashboard from "./pages/dashboard";
import Footer from "./components/Footer";
import EditDBMember from "./pages/EditDBMember"
import LoginPage from "./pages/LoginPage";
import React, { useState } from "react";
import Education from "./pages/Education";
import Education1101 from "./pages/Education1101";

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
          <Route path="loginpage" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
          <Route path="*" element={<NoPage />} />
          <Route path="editmember" element={<EditDBMember />} /> 
          <Route path="education1101" element= {<Education1101 />} /> 
        </Route> {/* Corrected closing tag */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
