import React from "react";
import cl from "./NavButton.module.css";

export const NavButton = ({ children, ...props }) => {
    return (
        <button className={cl.navButton} {...props}>
            {children}
        </button>
    );
};
