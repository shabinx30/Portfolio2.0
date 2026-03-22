import { useEffect, useState, useRef } from "react";
import type Lenis from "lenis";

export function useNavScroll(lenis: Lenis | null, threshold = 5) {
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!lenis) return;

        const onScroll = ({ scroll }: { scroll: number }) => {
            if (scroll <= 0) {
                setHidden(false);
                lastScrollY.current = 0;
                return;
            }

            const delta = scroll - lastScrollY.current;
            if (Math.abs(delta) < threshold) return;

            setHidden(delta > 0);
            lastScrollY.current = scroll;
        };

        lenis.on("scroll", onScroll);
        return () => lenis.off("scroll", onScroll);
    }, [lenis, threshold]);

    return { hidden, setHidden };
}
