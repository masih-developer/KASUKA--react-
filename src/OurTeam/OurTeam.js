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
                    <TeamPerson
                        src="./images/team/team-1.jpg"
                        name="والتر وایت"
                        job="مدیر ارشد اجرایی"
                    />
                    <TeamPerson
                        src="./images/team/team-2.jpg"
                        name="سارا جونسون"
                        job="مدیر تولید"
                    />
                    <TeamPerson src="./images/team/team-3.jpg" name="ویلیام اندرسون" job="CTO" />
                    <TeamPerson src="./images/team/team-4.jpg" name="آماندا جپسون" job="حسابدار" />
                </div>
            </div>
        </section>
    );
}
