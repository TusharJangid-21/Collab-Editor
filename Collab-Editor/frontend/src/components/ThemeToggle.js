import React from "react";
import "../styles.css";
const ThemeToggle = ({ toggleTheme, isDark }) => {
  return (
    <button className="toggle-button" onClick={toggleTheme}>
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};
export default ThemeToggle;