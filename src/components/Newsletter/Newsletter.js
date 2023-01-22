import React from "react";
import "./Newsletter.css";

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="container">
                <h3 className="newsletter__title">فراخوانی برای اقدام</h3>
                <p className="newsletter__description">
                    اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد سیلوس بودن
                    بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به دنبال آن هستند ، آنها نمی
                    بینند ، آنها کسانی هستند که مسئولیت های خود را به تقصیری واگذار می کنند که سختی
                    های روح را تسکین می دهد.
                </p>
                <a href="#" className="newsletter__btn">
                    فراخوانی برای اقدام
                </a>
            </div>
        </section>
    );
}
