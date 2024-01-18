import React from "react";
import { Container } from "../components/UI/container/Container";
import { solutions } from "../solutions";
import { SolutionItem } from "../components/SolutionItem";

export const Catalog = () => {
    return (
        <main>
            <div className="catalog-list">
                <Container>
                    <div className="catalog-list__content">
                        <div className="catalog-list__header header">
                            <h1>Ready-made connectivity solutions</h1>
                        </div>
                        {solutions.map((solution, index) => (
                            <SolutionItem
                                key={index}
                                solution={solution}
                                index={index}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </main>
    );
};
