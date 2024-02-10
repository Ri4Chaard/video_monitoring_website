import React, { useEffect, useRef, useState } from "react";

export const CatalogCard = ({
    currentWindowSize,
    image,
    onClickFunc,
    index,
    selectedCard,
    currentCard,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (currentCard == index) {
            ref.current.scrollIntoView({
                behavior: "instant",
                block: "center",
                inline: currentCard == 1 ? "center" : "nearest",
            });
        }
    }, [currentCard]);

    return (
        <div
            className="catalog__card"
            style={
                currentWindowSize < 769
                    ? { opacity: selectedCard == index ? 1 : 0.7 }
                    : { opacity: 1 }
            }
            ref={ref}
            onClick={onClickFunc}
        >
            <div className="catalog__card_image">
                <img src={image} />
            </div>
            <div className="catalog__card_tag blue-tag">For home</div>
            <div className="catalog__card_description">
                Digital IP camera for connecting to the EasyCam cloud service.
            </div>
            <div className="catalog__card_resolution secondary-text">
                Resolution: 1920*1080@25fps
            </div>
            <div className="catalog__card_lens secondary-text">
                Lens: 2.8mm lens
            </div>
            <div className="catalog__card_guarantee secondary-text">
                Guarantee: 1 year
            </div>
        </div>
    );
};
