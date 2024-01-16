import React, { useContext, useEffect, useState } from "react";
import logo from "../img/logo.png";
import { NavButton } from "../components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "../components/UI/buttons/header_buttons/login_button/LoginButton";
import { Link } from "react-router-dom";
import { PageContext } from "./context";

export const Topbar = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { currentPage, setCurrentPage } = useContext(PageContext);

    useEffect(() => {
        const setFixed = () => {
            setWindowHeight(window.scrollY);
        };
        window.addEventListener("scroll", setFixed);
        return () => window.removeEventListener("scroll", setFixed);
    });

    return (
        <div
            className={
                windowHeight >= 748 || currentPage != 0
                    ? "topbar fixed"
                    : "topbar"
            }
        >
            <div
                className={
                    windowHeight >= 748 || currentPage != 0
                        ? "topbar__content "
                        : "topbar__content whiteBtn"
                }
                style={
                    windowHeight >= 81
                        ? {
                              top:
                                  windowHeight >= 748 || currentPage != 0
                                      ? 16
                                      : -100,
                              position:
                                  windowHeight >= 81 || currentPage != 0
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
