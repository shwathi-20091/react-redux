import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";
function Footer() {
  const elementValue = useSelector((state) => state);
  return (
    <div id="Footer">
      <footer className="footer">
        <h2>Footer</h2>
        <h1>{elementValue.value}</h1>
      </footer>
    </div>
  );
}
export default Footer;
