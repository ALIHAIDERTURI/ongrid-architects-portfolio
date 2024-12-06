import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Instead of <></>, we use `null` as it better indicates that the component doesn't render anything.
}

export default ScrollToTop;
