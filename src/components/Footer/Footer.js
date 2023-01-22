import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer__address-wrapper">
                        <a href="#" className="footer__logo">
                            <img src="./images/logo.png" alt="" className="footer__logo__img" />
                            <h2>KASUKA</h2>
                        </a>
                        <div className="footer__address__content">
                            <p>تهران خیابان آزادی</p>
                            <p>تلفن: 01234567895</p>
                            <p>ایمیل : example@gmail.com</p>
                        </div>
                        <div className="footer__address__links-wrapper">
                            <a href="#" className="footer__address__link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__address__link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__address__link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__address__link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__address__link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer__list-wrapper">
                        <h4 className="footer__title">لینک ها مفید</h4>
                        <ul className="footer-list">
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    خانه
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    درباره ما
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    خدمات
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    شرایط استفاده از خدمات
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    سیاست حفظ حریم خصوصی
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__list-wrapper">
                        <h4 className="footer__title">خدمات ما</h4>
                        <ul className="footer-list">
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    طراحی وب سایت
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    توسعه وب
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    مدیر تولید
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    بازاریابی
                                </a>
                            </li>
                            <li className="footer-list__item">
                                <a href="#" className="footer__link">
                                    طراحی گرافیک
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__search-wrapper">
                        <h4 className="footer__title">خبرنامه ما</h4>
                        <p className="footer__search-text">
                            با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود
                        </p>
                        <form action="" className="footer__search-container">
                            <input
                                type="text"
                                className="footer__input"
                                placeholder="جست و جو کنید..."
                            />
                            <button className="footer__submit-btn">دنبال کردن</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="copy-right-wrapper">
                        <h5 className="copy-right__title">
                            این حقوق مححفوظ برای <a href="#">KASUKA</a> می باشد.
                        </h5>
                        <p className="copy-right__caption">
                            طراحی شده توسط{" "}
                            <a href="https://github.com/masih-developer" target="_blank">
                                Masih-Developer
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
