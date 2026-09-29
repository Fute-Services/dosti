import { useEffect, useState } from "react";

export function useImagePreloader(src: string) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);   

        const img = new Image();
        img.src = src;
        if (img.complete) {
            setIsLoaded(true);

        } else {
            img.onload = () => setIsLoaded(true);
            img.onerror = () => setIsLoaded(true);
        }

    }, [src]);
    return isLoaded;
}