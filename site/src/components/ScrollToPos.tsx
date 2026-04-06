import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PositionProps {
    posX?: number;
    posY?: number;
}

/**
 * Scrolls the window to a given position.
 * @param posX Horizontal scroll position (default: 0)
 * @param posY Vertical scroll position (default: 0)
 * @returns null
 */
export function ScrollToPos({posX = 0, posY = 0} : Readonly<PositionProps>) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({
            top: posX,
            left: posY,
            behavior: "smooth"
        });
    }, [pathname]);

    return null;
}