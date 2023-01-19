import React from "react";
import "./OurTeam.css";
import TeamPerson from "../TeamPerson/TeamPerson";

export default function OurTeam() {
    return (
        <section className="ourteam">
            <div className="container">
                <div className="section-title">
                    <div className="section-title-head">
                        <p>تیم</p>
                        <span></span>
                    </div>
                    <h2 className="section-title__name">تیم ما را بررسی کنید</h2>
                </div>
                <div className="ourteam-wrapper">
                    <TeamPerson />
                    <TeamPerson />
                    <TeamPerson />
                    <TeamPerson />
                </div>
            </div>
        </section>
    );
}
