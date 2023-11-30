import React from "react";
import cl from "./LoginButton.module.css";

export const LoginButton = ({ children, ...props }) => {
    return (
        <button className={cl.loginButton} {...props}>
            {children}
        </button>
    );
};
