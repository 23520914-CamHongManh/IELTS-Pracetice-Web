import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import "./LayoutTest.css";

const LayoutTest = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={`layout ${sidebarOpen ? "with-sidebar" : "no-sidebar"}`}>
      <Sidebar isOpen={sidebarOpen} />
      <div className="main-content">
        <Header title="Dashboard" onToggleSidebar={toggleSidebar} />
        <div className="content-area">
          <h2>Welcome to IELTS Practice Dashboard</h2>
          <p>Here’s where your content will appear.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutTest;
