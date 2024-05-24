import React from "react";
import ResponsiveAppBar from "../Components/ResponsiveAppBar";
import MyFooter from "../Components/MyFooter";
import TechnologyCarousel from "../Components/TechnologyCarousel";
import ActionAreaCard from "../Components/ActionAreaCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <ResponsiveAppBar />

      <div className="carousel">
        <TechnologyCarousel />
      </div>
      <div className="categories">
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
        <ActionAreaCard className="card" />
      </div>
      <div className="aboutus">
        <h1 className="aboutus-title">About Us</h1>
        <h4 className="aboutus-content">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
            labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
            animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
            aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
            pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
            commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
            proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
            eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
            Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
            culpa duis.
        </h4>
      </div>
      <MyFooter />
    </div>
  );
}

export default HomePage;
