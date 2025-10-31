import React from "react";
import "./Header.css";

const Header = ({ title, onToggleSidebar }) => {
  return (
    <header className="header shadow-sm">
      <button className="toggle-btn" onClick={onToggleSidebar}>
        ☰
      </button>
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
