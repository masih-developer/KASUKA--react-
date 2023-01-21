import React from "react";
import "./Honors.css";
import HonorsItem from "./HonorsItem";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Honors() {
    return (
        <section className="honors">
            <div className="container">
                <SectionTitle title="دستاورد ها" caption="دستاورد های ما را بررسی کنید" />
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
                            <HonorsItem
                                count="65"
                                description="مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم."
                            />
                            <HonorsItem
                                count="85"
                                description="پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد"
                            />
                            <HonorsItem
                                count="35"
                                description="سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد"
                            />
                            <HonorsItem
                                count="20"
                                description="جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
