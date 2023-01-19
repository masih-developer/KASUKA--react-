import React from "react";
import "./Feature.css";
import FeatureItem from "../FeatureItem/FeatureItem";

export default function Feature() {
    return (
        <section className="feature">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="feature__picture">
                        <img src="./images/features.jpg" alt="" />
                    </div>
                    <ul className="feature__list">
                        <FeatureItem />
                        <FeatureItem />
                        <FeatureItem />
                        <FeatureItem />
                    </ul>
                </div>
            </div>
        </section>
    );
}
