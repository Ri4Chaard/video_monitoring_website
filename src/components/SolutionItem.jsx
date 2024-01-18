import React, { useState } from "react";
import { BlueButton } from "./UI/buttons/blue_button/BlueButton";

export const SolutionItem = ({ solution, index }) => {
    const [broadcast, setBroadcast] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(solution.images[2]);

    return (
        <div className="catalog-list__item">
            <div className="catalog-list__item-content">
                <div className="catalog-list__photos">
                    <div className="catalog-list__main-photo">
                        <img
                            src={
                                broadcast ? solution.translation : currentPhoto
                            }
                            alt="Image not found"
                        />
                    </div>
                    <div className="catalog-list__photo-list">
                        {solution.images.map((image) => (
                            <img
                                key={image}
                                src={image}
                                alt="image not found"
                                style={{
                                    opacity: currentPhoto == image ? 1 : 0.5,
                                }}
                                onClick={() => {
                                    setCurrentPhoto(image);
                                }}
                            />
                        ))}
                    </div>
                    <button
                        className="catalog-list__set-stream"
                        style={{
                            color: broadcast ? "#5C17CD" : "#4466FB",
                        }}
                        onClick={() => {
                            setBroadcast(!broadcast);
                        }}
                    >
                        {broadcast
                            ? "Broadcast is live now"
                            : "View the broadcast quality of this camera"}
                    </button>
                </div>
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
