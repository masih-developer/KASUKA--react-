import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials-wrapper">
                    <img
                        src="./images/testimonials/testimonials-5.jpg"
                        alt=""
                        className="testimonials__img"
                    />
                    <h4 className="testimonials__title">جان لارسون</h4>
                    <p className="testimonials__job">کارآفرین </p>
                    <p className="testimonials__description">
                        پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می
                        شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.
                    </p>
                </div>
            </div>
        </section>
    );
}
