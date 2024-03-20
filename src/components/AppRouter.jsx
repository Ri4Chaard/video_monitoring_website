import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../router";
import { PageContext } from "./context";

export const AppRouter = () => {
    const { pathname } = useLocation();
    const { currentPage, setCurrentPage } = useContext(PageContext);
    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentPage(pathname);
    }, [pathname]);
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
            <Route path="*" element={<Navigate to="/menu" replace />} />
        </Routes>
    );
};
