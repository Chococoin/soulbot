import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="brand-container">
        <p>Soulbot</p>
      </div>

      <nav className="nav">
        <a href="#modules">TOOL</a>
        <a href="#functionality">FEATURES</a>
        <a href="#plans">PRICING</a>
        <a href="#about-us">TEAM</a>
      </nav>

      <div className="actions-container">
        <a href="#contact">TRY IT OUT</a>
        <div className="lang-container">
          <button>EN</button>
          <button>IT</button>
        </div>
        <button className="btn">LOG IN</button>
      </div>
    </div>
  );
}
