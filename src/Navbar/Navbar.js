import React from "react";
import "./Navbar.css";
export default function Navbar() {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#" className="nav__logo">
                        <img src="./images/logo.png" alt="" />
                        <h3>KASUKA</h3>
                    </a>
                    <div className="hamburger-menu">
                        <div className="hamburger-menu__bar"></div>
                        <div className="hamburger-menu__bar"></div>
                        <div className="hamburger-menu__bar"></div>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link nav__link--active">
                                خانه
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                درباره ی ما
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                خدمات
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                نمونه کار ها
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                تیم
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                لیست کشویی
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                تماس با ما
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="nav__start-btn">
                        شروع
                    </a>
                </div>
            </div>
        </nav>
    );
}
