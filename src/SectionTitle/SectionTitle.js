import React from "react";
import "./SectionTitle.css";

export default function SectionTitle({ title, caption }) {
    return (
        <div className="section-title">
            <div className="section-title-head">
                <p>{title}</p>
                <span></span>
            </div>
            <h2 className="section-title__name">{caption}</h2>
        </div>
    );
}
