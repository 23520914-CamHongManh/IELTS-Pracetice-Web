import React from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-logo">24hFast</div>
      <nav className="sidebar-menu">
        <a href="#">Trang chủ</a>
        <a href="#">Sổ từ vựng</a>
        <a href="#">Luyện Reading</a>
        <a href="#">Luyện Listening</a>
        <a href="#">Lịch sử</a>
      </nav>
      <div className="sidebar-footer">
        <div className="user-info">
          <span>User</span>
          <p>loading@example.com</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
