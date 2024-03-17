import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Dashboard from "./pages/dashboard"; // Make sure the filename is correct
import Manubar from "./components/Manubar";
import Footer from "./components/Footer";

import LoginPage from "./pages/LoginPage";
import React, { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="loginpage" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
