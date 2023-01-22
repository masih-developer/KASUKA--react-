import React from "react";
import "./ContactUs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function ContactUs() {
    return (
        <section className="contactus">
            <div className="container">
                <SectionTitle title="تماس با ما" caption="با ما تماس بگیرید" />
                <div className="contactus__map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28781.7650308166!2d-120.9786366523839!3d37.643287102860356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2z2qnYp9mE24zZgdix2YbbjNin2Iwg2KfbjNin2YTYp9iqINmF2KrYrdiv2Ycg2KLZhdix24zaqdin!5e0!3m2!1sfa!2s!4v1674125643474!5m2!1sfa!2s"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contactus__content">
                    <ul className="contactus__list">
                        <li className="contactus__item">
                            <span className="contactus__item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                </svg>
                            </span>
                            <div>
                                <h3 className="contactus__item__title">مکان:</h3>
                                <p className="contactus__item__caption">تهران-خیابان-آزادی</p>
                            </div>
                        </li>
                        <li className="contactus__item">
                            <span className="contactus__item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                </svg>
                            </span>
                            <div>
                                <h3 className="contactus__item__title">ایمیل:</h3>
                                <p className="contactus__item__caption">example@gmail.com</p>
                            </div>
                        </li>
                        <li className="contactus__item">
                            <span className="contactus__item__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                                </svg>
                            </span>
                            <div>
                                <h3 className="contactus__item__title">شماره تماس:</h3>
                                <p className="contactus__item__caption">021-394-7209</p>
                            </div>
                        </li>
                    </ul>
                    <form action="#" className="contactus__form">
                        <input
                            type="text"
                            className="contactus__form__input username-input"
                            placeholder="نام"
                        />
                        <input
                            type="text"
                            className="contactus__form__input email-input"
                            placeholder="ایمیل"
                        />
                        <input
                            type="text"
                            className="contactus__form__input subject-input"
                            placeholder="عنوان"
                        />
                        <textarea
                            className="contactus__form__textarea"
                            placeholder="پیام"
                        ></textarea>
                        <button type="submit" className="contactus__form__btn">
                            ارسال پیام
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
