import React, { useState } from "react";
import { Container } from "../components/UI/container/Container";
import { BlueButton } from "../components/UI/buttons/blue_button/BlueButton";
import { solutions } from "../solutions";

export const Catalog = () => {
    const [broadcast, setBroadcast] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(solutions[0].images[2]);

    return (
        <main>
            <div className="catalog-list">
                <Container>
                    <div className="catalog-list__content">
                        <div className="catalog-list__header header">
                            <h1>Ready-made connectivity solutions</h1>
                        </div>
                        <div className="catalog-list__item">
                            <div className="catalog-list__item-content">
                                <div className="catalog-list__photos">
                                    <div className="catalog-list__main-photo">
                                        <img
                                            src={
                                                broadcast
                                                    ? solutions[0].translation
                                                    : currentPhoto
                                            }
                                            alt="Image not found"
                                        />
                                    </div>
                                    <div className="catalog-list__photo-list">
                                        {solutions[0].images.map((image) => (
                                            <img
                                                key={image}
                                                src={image}
                                                alt="image not found"
                                                style={{
                                                    opacity:
                                                        currentPhoto == image
                                                            ? 1
                                                            : 0.5,
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
                                            color: broadcast
                                                ? "#5C17CD"
                                                : "#4466FB",
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
                                    <span
                                        className="catalog-list__line"
                                        style={{ top: 0 }}
                                    ></span>
                                    <div className="catalog-list__name">
                                        Digital IP camera for connection to
                                        EasyCam cloud service.
                                    </div>
                                    <div className="catalog-list__text-block_double">
                                        <div className="catalog-list__characteristics">
                                            <p className="secondary-text">
                                                Characteristics:
                                            </p>
                                            <p>
                                                <span>Model: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .model
                                                }
                                            </p>
                                            <p>
                                                <span>Resolution: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .resolution1
                                                }
                                            </p>
                                            <p>
                                                <span>Chipset: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .chipset
                                                }
                                            </p>
                                            <p>
                                                <span>Resoluiton: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .resoluiton2
                                                }
                                            </p>
                                            <p>
                                                <span>Lens: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .lens
                                                }
                                            </p>
                                            <p>
                                                <span>IR illumination: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .ir
                                                }
                                            </p>
                                            <p>
                                                <span>Material: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .material
                                                }
                                            </p>
                                            <p>
                                                <span>Power: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .power
                                                }
                                            </p>
                                            <p>
                                                <span>Waterproof: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .waterproof
                                                }
                                            </p>
                                            <p>
                                                <span>Warranty: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .warranty
                                                }
                                            </p>
                                            <p>
                                                <span>Type: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .type
                                                }
                                            </p>
                                            <p>
                                                <span>Tech: </span>
                                                {
                                                    solutions[0].characteristics
                                                        .tech
                                                }
                                            </p>
                                        </div>
                                        <div className="catalog-list__description">
                                            <p className="secondary-text">
                                                Description:
                                            </p>
                                            <p>{solutions[0].description}</p>
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
                    </div>
                </Container>
            </div>
        </main>
    );
};
