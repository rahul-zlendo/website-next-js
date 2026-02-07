'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTopOnNavigate = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Get hash from window.location
        const hash = window.location.hash;
        
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Small timeout to ensure the element is rendered if it's a new page
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [pathname]);

    return null;
};

export default ScrollToTopOnNavigate;
