import React, { useContext, useEffect, useState } from "react";
import cl from "./Burger.module.css";
import exit from "./Х.svg";
import phone from "./Gas.svg";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./BurgerAnim.css";
import { PageContext } from "../../context";
export const Burger = ({ visible, setVisible }) => {
    const rootClasses = [cl.burgerBg];
    const { currentPage } = useContext(PageContext);

    const [burgDisplay, setBurgDisplay] = useState(false);
    const [blur, setBlur] = useState(false);
    if (visible) {
        rootClasses.push(cl.active);
    }

    useEffect(() => {
        visible
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    });

    return (
        <div
            className={rootClasses.join(" ")}
            style={{
                display: burgDisplay ? "block" : "none",
                background: blur ? "#101a3369" : "none",
                backdropFilter: blur ? "blur(3px)" : "none",
            }}
            onClick={() => setVisible(!visible)}
        >
            <CSSTransition
                onEnter={() => setBurgDisplay(!burgDisplay)}
                onEntering={() => setBlur(!blur)}
                onExiting={() => setBlur(!blur)}
                in={visible}
                timeout={500}
                classNames="burgerTransition"
                mountOnEnter
                unmountOnExit
                onExited={() => setBurgDisplay(!burgDisplay)}
            >
                <div
                    className={cl.burgerMenu}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={cl.burgerMenuContent}>
                        <div
                            className={cl.burgerX}
                            onClick={() => {
                                setVisible(!visible);
                            }}
                        >
                            <img src={exit} alt="close" />
                        </div>
                        <nav className={cl.burgerMenuList}>
                            <Link
                                key="/menu"
                                to="/menu"
                                style={{
                                    color:
                                        currentPage == "/menu" ? "#5C17CD" : "",
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                key="/catalog"
                                to="/catalog"
                                style={{
                                    color:
                                        currentPage == "/catalog"
                                            ? "#5C17CD"
                                            : "",
                                }}
                            >
                                Catalog
                            </Link>
                            <p>Tariffs</p>
                            <Link
                                key="/news"
                                to="/news"
                                style={{
                                    color:
                                        currentPage == "/news" ? "#5C17CD" : "",
                                }}
                            >
                                News
                            </Link>
                            <p>Contacts</p>
                        </nav>
                        <div className={cl.burgerMenuPhone}>
                            <p>+1234-456-67-89</p>
                            <img src={phone} alt="phone" />
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    );
};
