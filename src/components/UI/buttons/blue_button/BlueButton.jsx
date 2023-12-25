import React from "react";
import style from "./BlueButton.module.css";

export const BlueButton = ({ children, ...props }) => {
    return (
        <button className={style.blueButton} {...props}>
            {children}
        </button>
    );
};
