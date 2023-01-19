import "./Header.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
export default function Header() {
    return (
        <header className="header">
            <Navbar />
            <Home />
        </header>
    );
}
