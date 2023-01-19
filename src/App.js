import React from "react";
import Header from "./Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import Brands from "./Brands/Brands";
import Feature from "./Feature/Feature";
import Services from "./Services/Services";
import Newsletter from "./Newsletter/Newsletter";
import WorkSample from "./WorkSample/WorkSample";
import Honors from "./Honors/Honors";
import Testimonials from "./Testimonials/Testimonials";
import OurTeam from "./OurTeam/OurTeam";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";

export default function App() {
    return (
        <>
            <Header />
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
