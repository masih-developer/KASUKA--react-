import React from "react";
import "./Home.css";
import HomeBox from "../HomeBox/HomeBox";
export default function Home() {
    return (
        <section className="home">
            <div className="container">
                <h1 className="home__title">
                    راه حل های قدرتمند دیجیتال با
                    <br />
                    <span>Kasuka</span>
                </h1>
                <h2 className="home__caption">ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
                <div className="home-boxes-wrapper">
                    <HomeBox />
                    <HomeBox />
                    <HomeBox />
                    <HomeBox />
                    <HomeBox />
                </div>
            </div>
        </section>
    );
}
