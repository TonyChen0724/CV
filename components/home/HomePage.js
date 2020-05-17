import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Xinru Chen CV</h1>
    <p>Seeking opportunities for a Full-Stack web developer</p>
    <h2>Tech Stack</h2>
    <p>ReactJS, ExpressJS</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more about my work
    </Link>
  </div>
);

export default HomePage;
