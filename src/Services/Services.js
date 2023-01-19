import React from "react";
import "./Services.css";
import ServiceItem from "../ServiceItem/ServiceItem";

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <div className="section-title">
                    <div className="section-title-head">
                        <p>خدمات ما</p>
                        <span></span>
                    </div>
                    <h2 className="section-title__name">خدمات ما را بررسی کنید</h2>
                </div>
                <div className="services-wrapper">
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                    <ServiceItem />
                </div>
            </div>
        </section>
    );
}
