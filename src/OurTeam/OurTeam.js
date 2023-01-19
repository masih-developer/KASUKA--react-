import React from "react";
import "./OurTeam.css";
import TeamPerson from "../TeamPerson/TeamPerson";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function OurTeam() {
    return (
        <section className="ourteam">
            <div className="container">
                <SectionTitle title="تیم" caption="تیم ما را بررسی کنید" />
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
