import React, { useState } from "react";
import { Container } from "../components/UI/container/Container";
import vidPrev from "../img/catalog/photos/vid-prev.jpg";
import photo1 from "../img/catalog/photos/photo1.jpg";
import photo2 from "../img/catalog/photos/photo2.jpg";
import photo3 from "../img/catalog/photos/photo3.jpg";
import photo4 from "../img/catalog/photos/photo4.jpg";
import photo5 from "../img/catalog/photos/photo5.jpg";
import { BlueButton } from "../components/UI/buttons/blue_button/BlueButton";

export const Catalog = () => {
    const [broadcast, setBroadcast] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(photo1);

    const solutions = [
        {
            characteristics: {
                model: "Ecam201",
                resolution1: "2MP 1280*1080P",
                chipset: "Mstar313e+sc2235",
                resoluiton2: "1920*1080@25fps",
                lens: "2.8mm lens",
                ir: "12pcs/20M",
                material: "Metal",
                power: "DC1V/1A, PoE",
                waterproof: "IP66",
                warranty: "1 year",
                type: "Digital camera",
                tech: "Network IP",
            },
            description:
                "The camera has a metal housing that allows you to use for installation both outdoors and indoors. The camera has a built-in microphone. The camera can be connected to a video recorder for local archiving and to a cloud service.",
            translation: vidPrev,
            images: [photo1, photo2, photo3, photo4, photo5],
        },
    ];

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
                                {/* <span className="catalog-list__line"></span> */}
                                <div className="catalog-list__photos">
                                    <div className="catalog-list__main-photo">
                                        <img
                                            src={
                                                broadcast
                                                    ? vidPrev
                                                    : currentPhoto
                                            }
                                            alt="Image not found"
                                        />
                                    </div>
                                    <div className="catalog-list__photo-list">
                                        <img
                                            src={photo2}
                                            alt="Image not found"
                                            onClick={() => {
                                                setCurrentPhoto(photo2);
                                            }}
                                        />
                                        <img
                                            src={photo3}
                                            alt="Image not found"
                                            onClick={() => {
                                                setCurrentPhoto(photo3);
                                            }}
                                        />
                                        <img
                                            src={photo1}
                                            alt="Image not found"
                                            onClick={() => {
                                                setCurrentPhoto(photo1);
                                            }}
                                        />
                                        <img
                                            src={photo4}
                                            alt="Image not found"
                                            onClick={() => {
                                                setCurrentPhoto(photo4);
                                            }}
                                        />
                                        <img
                                            src={photo5}
                                            alt="Image not found"
                                            onClick={() => {
                                                setCurrentPhoto(photo5);
                                            }}
                                        />
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
                                    <span className="catalog-list__line"></span>
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
