import React from "react";
import "./Home.css";
import HomeBox from "./HomeBox";
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
                    <HomeBox caption="متن نمایشی" />
                    <HomeBox caption="نمودار کیفی" />
                    <HomeBox caption="نمونه کارها" />
                    <HomeBox caption="عملکرد ها پایانی" />
                    <HomeBox caption="اطلاعات ذخیره شده" />
                </div>
            </div>
        </section>
    );
}
