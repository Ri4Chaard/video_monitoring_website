import React, { useEffect, useState } from "react";
import "../styles/topbar.css";
import logo from "../img/logo.png";
import { NavButton } from "../components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "../components/UI/buttons/header_buttons/login_button/LoginButton";

export const Topbar = () => {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const setFixed = () => {
            setWindowHeight(window.scrollY);
        };
        window.addEventListener("scroll", setFixed);
        return () => window.removeEventListener("scroll", setFixed);
    });

    return (
        <div className={windowHeight >= 748 ? "topbar fixed" : "topbar"}>
            <div
                className={
                    windowHeight >= 748
                        ? "topbar__content "
                        : "topbar__content whiteBtn"
                }
                style={
                    windowHeight >= 81
                        ? {
                              top: windowHeight >= 748 ? 0 : -100,
                              position:
                                  windowHeight >= 81 ? "fixed" : "relative",
                          }
                        : {}
                }
            >
                <div className="topbar__logo">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <nav className="topbar__menu">
                    <NavButton style={{ fontWeight: "500" }}>
                        Ready solutions
                    </NavButton>
                    <NavButton>Tariffs</NavButton>
                    <NavButton>News</NavButton>
                    <NavButton>Contacts</NavButton>
                </nav>
                <div className="topbar__login">
                    <LoginButton>Login</LoginButton>
                </div>
            </div>
        </div>
    );
};
