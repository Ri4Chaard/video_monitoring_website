import React, { useContext, useEffect, useState } from "react";
import logo from "../img/logo.png";
import { NavButton } from "../components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "../components/UI/buttons/header_buttons/login_button/LoginButton";
import { Link } from "react-router-dom";
import { PageContext } from "./context";
import { useWindowSize } from "./hooks/useWindowSize";

export const Topbar = () => {
    const [windowHeight, setWindowHeight] = useState(0);
    const { currentPage } = useContext(PageContext);
    const currentWindowSize = useWindowSize(window.innerWidth);

    const calcBP = (width) => {
        if (width < 992 && width > 720) return 586;
        else if (width <= 720 && width > 360) {
            return 845;
        } else return 748;
    };

    const breakPoint = calcBP(currentWindowSize);

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
                windowHeight >= breakPoint || currentPage != "/menu"
                    ? "topbar fixed"
                    : "topbar"
            }
        >
            <div
                className={
                    windowHeight >= breakPoint || currentPage != "/menu"
                        ? "topbar__content "
                        : "topbar__content whiteBtn"
                }
                style={
                    windowHeight >= 81
                        ? {
                              top:
                                  windowHeight >= breakPoint ||
                                  currentPage != "/menu"
                                      ? 16
                                      : -100,
                              position:
                                  windowHeight >= 81 || currentPage != "/menu"
                                      ? "fixed"
                                      : "relative",
                          }
                        : {}
                }
            >
                <div className="topbar__logo">
                    <Link key="/menu" to="/menu">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="topbar__menu">
                    <Link key="/catalog" to="/catalog">
                        <NavButton
                            style={{
                                fontWeight: "500",
                                color:
                                    currentPage == "/catalog" ? "#5C17CD" : "",
                            }}
                        >
                            Ready solutions
                        </NavButton>
                    </Link>
                    <NavButton>Tariffs</NavButton>
                    <Link key="/news" to="/news">
                        <NavButton
                            style={{
                                color: currentPage == "/news" ? "#5C17CD" : "",
                            }}
                        >
                            News
                        </NavButton>
                    </Link>
                    <NavButton>Contacts</NavButton>
                </nav>
                <div className="topbar__login">
                    <LoginButton>Login</LoginButton>
                </div>
            </div>
        </div>
    );
};
