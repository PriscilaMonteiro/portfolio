import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>I create better experience for People</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              alt="about priscila"
              src="images/me.jpg"
              text="Hi there, I'm Priscila. I am a UI/UX Engineer and tech enthusiast based in San Diego. I design applications, digital products and websites. I'm here to help turn your ideas into focused clear products."
              label="About me"
              path="/about"
            />
            <CardItem
              alt="priscila's projects"
              src="images/windows.jpg"
              text="A selection of UX/UI projects for luxury fashion & beauty clients, from responsive site designs to eCommerce products and campaign creative."
              label="Projects"
              path="/projects"
            />
          </ul>
          {/* <ul className="cards__items">
            <CardItem
              src="images/tech.jpg"
              text="Something goes here"
              label="Something goes here"
              path="/projects"
            />
            <CardItem
              src="images/balls.jpg"
              text="Something goes here"
              label="Something goes here"
              path="/products"
            />
            <CardItem
              src="images/windows.jpg"
              text="Something goes here"
              label="Something goes here"
              path="/sign-up"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
