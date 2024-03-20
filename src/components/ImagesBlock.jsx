import React, { useEffect, useState } from "react";
import { ImageComponent } from "./ImageComponent";

export const ImagesBlock = ({ images, translation, windowWidth }) => {
    const [broadcast, setBroadcast] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
    const [currentDot, setCurrentDot] = useState(0);

    const filterImages = (images, width) => {
        if (width < 769)
            return images.filter((img, index) => {
                if (index == 2) return false;
                return true;
            });
        return images;
    };
    const filteredImages = filterImages(images, windowWidth);

    useEffect(() => {
        windowWidth < 769
            ? setCurrentPhoto(filteredImages[0][0])
            : setCurrentPhoto(filteredImages[2][0]);
    }, [!currentPhoto]);

    useEffect(() => {
        setCurrentPhoto(filteredImages[currentDot][0]);
    }, [currentDot]);

    return windowWidth <= 720 ? (
        <div className="catalog-list__photos">
            <div className="catalog-list__main-photo">
                <ImageComponent
                    src={currentPhoto}
                    hash={images[2][1]}
                    alt="Image not found"
                    mainPhoto={true}
                    onClick={() => {
                        if (currentDot < filteredImages.length - 1)
                            setCurrentDot(currentDot + 1);
                    }}
                />
            </div>
            <div className="catalog-list__imgDots">
                <button
                    className="imgArrowBtn_left"
                    onClick={() => {
                        setCurrentDot(currentDot - 1);
                    }}
                    disabled={currentDot == 0}
                ></button>
                <div className="catalog-list__dots">
                    {filteredImages.map((img, index) => (
                        <div
                            key={index}
                            className="catalog-list__dot"
                            style={{
                                opacity: currentDot == index ? 1 : 0.5,
                            }}
                        ></div>
                    ))}
                </div>
                <button
                    className="imgArrowBtn_right"
                    onClick={() => {
                        setCurrentDot(currentDot + 1);
                    }}
                    disabled={currentDot == filteredImages.length - 1}
                ></button>
            </div>
        </div>
    ) : (
        <div className="catalog-list__photos">
            <div className="catalog-list__main-photo">
                <ImageComponent
                    src={broadcast ? translation : currentPhoto}
                    hash={images[2][1]}
                    alt="Image not found"
                    mainPhoto={true}
                />
            </div>
            <div className="catalog-list__photo-list">
                {filteredImages.map((image) => (
                    <ImageComponent
                        key={image[1]}
                        src={image[0]}
                        hash={image[1]}
                        style={{
                            opacity: currentPhoto == image[0] ? 1 : 0.5,
                        }}
                        onClick={() => {
                            setCurrentPhoto(image[0]);
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
    );
};
