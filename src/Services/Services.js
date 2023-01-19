import React from "react";
import "./Services.css";
import ServiceItem from "../ServiceItem/ServiceItem";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Services() {
    return (
        <section className="services">
            <div className="container">
                <SectionTitle title="خدمات" caption="خدمات ما را بررسی کنید" />
                <div className="services-wrapper">
                    <ServiceItem
                        title="لورم اپیسوم"
                        description="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد"
                    />
                    <ServiceItem
                        title="اما همانطور که مشاهده می کنید"
                        description="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
                    />
                    <ServiceItem
                        title="دردهای بزرگ"
                        description="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
                    />
                    <ServiceItem
                        title="هیچکس دیگر"
                        description="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم"
                    />
                    <ServiceItem
                        title="لولا را پاک کنید"
                        description="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند"
                    />
                    <ServiceItem
                        title="دیوا دان"
                        description="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد"
                    />
                </div>
            </div>
        </section>
    );
}
