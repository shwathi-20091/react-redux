import React from "react";
import "./sidebar.css";
import { useSelector } from "react-redux";
function SideBar() {
  const elementValue = useSelector((state) => state);
  return (
    <div>
      <nav className="navigation">
        <h1>SIDE BAR</h1>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarOne}</h3>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarTwo}</h3>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarThree}</h3>
        <h3 className = {elementValue.sideBarClass}>{elementValue.setSideBarFour}</h3>

      </nav>
    </div>
  );
}

export default SideBar;
