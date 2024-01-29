import React from "react";
import { BlueButton } from "./UI/buttons/blue_button/BlueButton";
import { ImagesBlock } from "./ImagesBlock";

export const SolutionItem = ({ solution, index }) => {
    return (
        <div className="catalog-list__item">
            <div className="catalog-list__item-content">
                <ImagesBlock
                    images={solution.images}
                    translation={solution.translation}
                />
                <div className="catalog-list__text-block">
                    {index == 0 && (
                        <span
                            className="catalog-list__line"
                            style={{ top: 0 }}
                        ></span>
                    )}
                    <div className="catalog-list__name">
                        Digital IP camera for connection to EasyCam cloud
                        service.
                    </div>
                    <div className="catalog-list__text-block_double">
                        <div className="catalog-list__characteristics">
                            <p className="secondary-text">Characteristics:</p>
                            <p>
                                <span>Model: </span>
                                {solution.characteristics.model}
                            </p>
                            <p>
                                <span>Resolution: </span>
                                {solution.characteristics.resolution1}
                            </p>
                            <p>
                                <span>Chipset: </span>
                                {solution.characteristics.chipset}
                            </p>
                            <p>
                                <span>Resoluiton: </span>
                                {solution.characteristics.resoluiton2}
                            </p>
                            <p>
                                <span>Lens: </span>
                                {solution.characteristics.lens}
                            </p>
                            <p>
                                <span>IR illumination: </span>
                                {solution.characteristics.ir}
                            </p>
                            <p>
                                <span>Material: </span>
                                {solution.characteristics.material}
                            </p>
                            <p>
                                <span>Power: </span>
                                {solution.characteristics.power}
                            </p>
                            <p>
                                <span>Waterproof: </span>
                                {solution.characteristics.waterproof}
                            </p>
                            <p>
                                <span>Warranty: </span>
                                {solution.characteristics.warranty}
                            </p>
                            <p>
                                <span>Type: </span>
                                {solution.characteristics.type}
                            </p>
                            <p>
                                <span>Tech: </span>
                                {solution.characteristics.tech}
                            </p>
                        </div>
                        <div className="catalog-list__description">
                            <p className="secondary-text">Description:</p>
                            <p>{solution.description}</p>
                        </div>
                    </div>
                </div>
                <span
                    className="catalog-list__line"
                    style={{ bottom: 0 }}
                ></span>
            </div>
            <div className="catalog-list__purchaseBtn">
                <BlueButton>Purchase</BlueButton>
            </div>
        </div>
    );
};
