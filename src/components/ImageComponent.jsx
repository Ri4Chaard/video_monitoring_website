import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

export const ImageComponent = ({ src, hash, style, onClick, mainPhoto }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true);
        };
        img.src = src;
    }, [src]);
    return (
        <>
            {!imageLoaded && (
                <Blurhash
                    hash={hash}
                    width={mainPhoto ? "100%" : "80px"}
                    height={mainPhoto ? "100%" : "68px"}
                    resolutionX={32}
                    resolutionY={32}
                    style={style}
                    punch={1}
                />
            )}
            {imageLoaded && (
                <img
                    onLoad={() => setImageLoaded(true)}
                    style={style}
                    onClick={onClick}
                    src={src}
                    alt="Image not found"
                />
            )}
        </>
    );
};
