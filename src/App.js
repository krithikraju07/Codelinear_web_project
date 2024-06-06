import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import { Portfolio } from "./Components/Portfolio";
import { Element } from "react-scroll";
import { About } from "./Components/About";
import { Hidden } from "./Components/Hidden";
import { Industries } from "./Components/Industires";
function App() {
  return (
    <div className="bg-custom-bg">
      <Header />
      <Main />
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="industries">
        <Industries/>
      </Element>
      <Element name="hidden">
        <Hidden/>
      </Element>
      <Footer />
    </div>
  );
}

export default App;
