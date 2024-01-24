import { useEffect, useState } from "react";

export const useItemPages = (items, currentIndex, count) => {
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        const itemsPage = [];
        for (let i = currentIndex; i < count + currentIndex; i++)
            items[i] && itemsPage.push(items[i]);
        setCurrentItems(itemsPage);
    }, [currentIndex]);
    return currentItems;
};
