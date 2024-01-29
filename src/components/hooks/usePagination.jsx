import { useEffect, useState } from "react";

export const usePagination = (totalItems, count) => {
    const [totalPages, setTotalPages] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setTotalPages(Math.ceil(totalItems / count));
    }, [currentPage, totalItems]);

    const changePage = (page, index) => {
        setCurrentPage(page);
        setCurrentIndex(index);
        window.scrollTo(0, 0);
    };

    return { totalPages, currentPage, currentIndex, changePage };
};
