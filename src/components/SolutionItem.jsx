import React, { useState } from "react";
import { BlueButton } from "./UI/buttons/blue_button/BlueButton";
import { ImagesBlock } from "./ImagesBlock";

export const SolutionItem = ({ solution, index, windowWidth }) => {
    const [descOption, setDescOption] = useState(0);

    const adaptiveDesc = [
        <div className="catalog-list__characteristics-list">
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
        </div>,

        <p style={{ opacity: 0.7, flex: "1 0 auto" }}>
            {solution.description}
        </p>,
    ];

    return (
        <div className="catalog-list__item">
            <div className="catalog-list__item-content">
                <ImagesBlock
                    images={solution.images}
                    translation={solution.translation}
                    windowWidth={windowWidth}
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
                            <div
                                className="catalog-list__block-header"
                                style={
                                    windowWidth <= 991
                                        ? { opacity: descOption == 0 ? 1 : 0.5 }
                                        : {}
                                }
                                onClick={() => setDescOption(0)}
                            >
                                <p className="secondary-text">
                                    Characteristics:
                                </p>
                            </div>
                            <div
                                className="catalog-list__characteristics-list"
                                style={{
                                    display:
                                        windowWidth <= 991 ? "none" : "block",
                                }}
                            >
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
                        </div>
                        <div className="catalog-list__description">
                            <div
                                className="catalog-list__block-header"
                                style={
                                    windowWidth < 992
                                        ? { opacity: descOption == 1 ? 1 : 0.5 }
                                        : {}
                                }
                                onClick={() => setDescOption(1)}
                            >
                                <p className="secondary-text">Description:</p>
                            </div>
                            <p
                                style={{
                                    display:
                                        windowWidth < 992 ? "none" : "block",
                                }}
                            >
                                {solution.description}
                            </p>
                        </div>
                    </div>
                    {windowWidth < 992 && adaptiveDesc[descOption]}
                    {windowWidth < 992 && (
                        <BlueButton style={{ margin: "12px 0 " }}>
                            Purchase
                        </BlueButton>
                    )}
                </div>
                <span
                    className="catalog-list__line"
                    style={{ bottom: 0 }}
                ></span>
            </div>
            {windowWidth > 991 && (
                <div className="catalog-list__purchaseBtn">
                    <BlueButton>Purchase</BlueButton>
                </div>
            )}
        </div>
    );
};
