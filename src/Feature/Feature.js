import React from "react";
import "./Feature.css";
import FeatureItem from "../FeatureItem/FeatureItem";

export default function Feature() {
    return (
        <section className="feature">
            <div className="container">
                <div className="feature-wrapper">
                    <div className="feature__picture">
                        <img src="./images/features.jpg" alt="" />
                    </div>
                    <ul className="feature__list">
                        <FeatureItem
                            title="تبلیغ سختی است"
                            caption="نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند"
                        />
                        <FeatureItem
                            title="کدام یک از اینهاست"
                            caption="کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند"
                        />
                        <FeatureItem
                            title="یا کور شده است"
                            caption="یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند"
                        />
                        <FeatureItem
                            title="حقیقت مبارک"
                            caption="آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند"
                        />
                    </ul>
                </div>
            </div>
        </section>
    );
}
