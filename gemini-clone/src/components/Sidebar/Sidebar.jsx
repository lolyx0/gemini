import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { ThemeContext } from "../../ThemeContext";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="menu"
        />
        <div className="new-chat">
          <img src={assets.edit_icon} alt="edit" />
          {extended && <p>New chat</p>}
        </div>
        {extended && (
          <div className="explore">
            <img src={assets.gem_icon} alt="gem" />
            <p>Explore Gems</p>
          </div>
        )}
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="msg" />
              <p>What is react ...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">

        <div className="bottom-item recent-entry" onClick={() => setDarkMode(!darkMode)} style={{ cursor: "pointer" , marginBottom:'15px' }}>
          <img
            src={darkMode ? assets.sun_icon : assets.moon_icon}
            alt="theme toggle"
            style={{ width: "20px"}}
          />
          {extended && <p>{darkMode ? "Light Mode" : "Dark Mode"}</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Settings & help</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
