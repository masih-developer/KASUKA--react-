import React from "react";
import Header from "./components/Header/Header";
import GoTopBtn from "./components/GoTopBtn/GoTopBtn";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Brands from "./components/Brands/Brands";
import Feature from "./components/Feature/Feature";
import Services from "./components/Services/Services";
import Newsletter from "./components/Newsletter/Newsletter";
import WorkSample from "./components/WorkSample/WorkSample";
import Honors from "./components/Honors/Honors";
import Testimonials from "./components/Testimonials/Testimonials";
import OurTeam from "./components/OurTeam/OurTeam";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <Header />
            <GoTopBtn />
            <Home />
            <AboutUs />
            <Brands />
            <Feature />
            <Services />
            <Newsletter />
            <WorkSample />
            <Honors />
            <Testimonials />
            <OurTeam />
            <ContactUs />
            <Footer />
        </>
    );
}
