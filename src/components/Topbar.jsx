import React, { useEffect, useState } from "react";
import "../styles/topbar.css";
import logo from "../img/logo.png";
import { NavButton } from "../components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "../components/UI/buttons/header_buttons/login_button/LoginButton";
import { Link } from "react-router-dom";

export const Topbar = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const [fixed, setFixed] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const setFixed = () => {
            setWindowHeight(window.scrollY);
        };
        window.addEventListener("scroll", setFixed);
        return () => window.removeEventListener("scroll", setFixed);
    });

    return (
        <div
            className={windowHeight >= 748 || fixed ? "topbar fixed" : "topbar"}
        >
            <div
                className={
                    windowHeight >= 748 || fixed
                        ? "topbar__content "
                        : "topbar__content whiteBtn"
                }
                style={
                    windowHeight >= 81
                        ? {
                              top: windowHeight >= 748 || fixed ? 16 : -100,
                              position:
                                  windowHeight >= 81 || fixed
                                      ? "fixed"
                                      : "relative",
                          }
                        : {}
                }
            >
                <div className="topbar__logo">
                    <Link key="/menu" to="/menu">
                        <img
                            className="logo"
                            src={logo}
                            alt="logo"
                            onClick={() => {
                                setFixed(false);
                                setCurrentPage(0);
                            }}
                        />
                    </Link>
                </div>
                <nav className="topbar__menu">
                    <Link key="/catalog" to="/catalog">
                        <NavButton
                            style={{
                                fontWeight: "500",
                                color: currentPage == 1 ? "#5C17CD" : "",
                            }}
                            onClick={() => {
                                setFixed(true);
                                setCurrentPage(1);
                            }}
                        >
                            Ready solutions
                        </NavButton>
                    </Link>
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
