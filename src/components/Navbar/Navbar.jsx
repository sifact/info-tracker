import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <section className="nav">
            <nav className="container__vn">
                <h1>SECQURAISE</h1>
                <div>
                    <button className="count">25</button>
                    <button className="count">25</button>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;
