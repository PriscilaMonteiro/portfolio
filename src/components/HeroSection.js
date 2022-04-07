import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="./portfolio/videos/ink2.mp4" autoPlay loop muted />
      <h1>Hello! I'm Priscila</h1>
      <p>.UI/UX Engineer</p>
      <h2>Simple | Easy | Intuitive</h2>
    </div>
  );
}

export default HeroSection;
