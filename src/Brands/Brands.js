import React from "react";
import "./Brands.css";

export default function Brands() {
    return (
        <section className="brands">
            <div className="container">
                <div className="brands-wrapper">
                    <div className="brand">
                        <img src="./images/brands/client-1.png" alt="" className="brand__img" />
                    </div>
                    <div className="brand">
                        <img src="./images/brands/client-2.png" alt="" className="brand__img" />
                    </div>
                    <div className="brand">
                        <img src="./images/brands/client-3.png" alt="" className="brand__img" />
                    </div>
                    <div className="brand">
                        <img src="./images/brands/client-4.png" alt="" className="brand__img" />
                    </div>
                    <div className="brand">
                        <img src="./images/brands/client-5.png" alt="" className="brand__img" />
                    </div>
                    <div className="brand">
                        <img src="./images/brands/client-6.png" alt="" className="brand__img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
