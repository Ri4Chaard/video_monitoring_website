import React, { useState } from "react";
import { ImageComponent } from "./ImageComponent";

export const ImagesBlock = ({ images, translation }) => {
    const [broadcast, setBroadcast] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(images[2][0]);

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
                {images.map((image) => (
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
