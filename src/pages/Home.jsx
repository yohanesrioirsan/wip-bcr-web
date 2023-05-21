import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/Why-us";
import CarouselSlider from "../components/CarouselSlider";
import Cta from "../components/Cta";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "../style/app-style.css";
import { Fragment } from "react";


const Home = () => { 
  const [showSidebar, setShowSidebar] = useState(false);
    return ( 
    <Fragment>
      <div className="header">
        <NavigationBar showSidebar={() => setShowSidebar(true)}/>
        <Hero />
      </div>
      <Services />
      <WhyUs />
      <CarouselSlider />
      <Cta />
      <Faq />
      <Footer />
      <Offcanvas show={showSidebar} handleClose={() => setShowSidebar(false)} />
    </Fragment>
    );
}

export default Home