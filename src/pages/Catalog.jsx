import React from "react";
import { Container } from "../components/UI/container/Container";
import { solutions } from "../solutions";
import { SolutionItem } from "../components/SolutionItem";
import { useItemPages } from "../components/hooks/useItemPages";
import { Pagination } from "../components/UI/pagination/Pagination";
import { usePagination } from "../components/hooks/usePagination";

export const Catalog = () => {
    const { totalPages, currentPage, currentIndex, changePage } = usePagination(
        solutions.length,
        5
    );
    const currentItems = useItemPages(solutions, currentIndex, 5);

    return (
        <div className="catalog-list">
            <Container>
                <div className="catalog-list__content">
                    <div className="catalog-list__header header">
                        <h1>Ready-made connectivity solutions</h1>
                    </div>
                    {currentItems.map((solution, index) => (
                        <SolutionItem
                            key={solution.id}
                            solution={solution}
                            index={index}
                        />
                    ))}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        currentIndex={currentIndex}
                        count={5}
                        changePage={changePage}
                    />
                </div>
            </Container>
        </div>
    );
};
