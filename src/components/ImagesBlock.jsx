import React, { useEffect, useState } from "react";
import { ImageComponent } from "./ImageComponent";
import { useWindowSize } from "./hooks/useWindowSize";

export const ImagesBlock = ({ images, translation, windowWidth }) => {
    const [broadcast, setBroadcast] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

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

    return (
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
