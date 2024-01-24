import React from "react";
import cl from "./Pagination.module.css";

export const Pagination = ({
    currentPage,
    totalPages,
    currentIndex,
    count,
    changePage,
}) => {
    return (
        <div className={cl.arrows}>
            <button
                className="arrowBtn_left"
                disabled={currentPage == 1}
                onClick={() => {
                    if (currentPage > 1) {
                        changePage(currentPage - 1, currentIndex - count);
                    }
                }}
            ></button>
            <p className={cl.pages}>
                <span
                    style={{
                        fontSize: 14,
                        fontWeight: "bold",
                        margin: "0 4px 0 0",
                    }}
                >
                    {currentPage}
                </span>
                <span style={{ opacity: 0.5 }}>/</span>
                <span style={{ opacity: 0.5, fontSize: 14 }}>{totalPages}</span>
            </p>
            <button
                className="arrowBtn_right"
                disabled={currentPage == totalPages}
                onClick={() => {
                    if (currentPage < totalPages) {
                        changePage(currentPage + 1, currentIndex + count);
                    }
                }}
            ></button>
        </div>
    );
};
