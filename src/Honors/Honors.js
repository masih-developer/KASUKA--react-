import React from "react";
import "./Honors.css";
import HonorsItem from "../HonorsItem/HonorsItem";

export default function Honors() {
    return (
        <section className="honors">
            <div className="container">
                <div className="section-title">
                    <div className="section-title-head">
                        <p>دستاورد ها</p>
                        <span></span>
                    </div>
                    <h2 className="section-title__name">دستاورد های ما را مشاهده کنید</h2>
                </div>
                <div className="honors-wrapper">
                    <div className="honors__picture">
                        <img src="./images/honors-bg.jpg" alt="" />
                    </div>
                    <div className="honors__content">
                        <h3 className="honors__title">شایسته ترین لذت را به هر حال ارائه می دهد</h3>
                        <p className="honors__caption">
                            خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به
                            آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود. درد مقصر است
                        </p>
                        <ul className="honors__list">
                            <HonorsItem />
                            <HonorsItem />
                            <HonorsItem />
                            <HonorsItem />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
