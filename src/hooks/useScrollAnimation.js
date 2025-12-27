import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.2,
        triggerOnce = true,
        rootMargin = '0px'
    } = options;

    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, triggerOnce, rootMargin]);

    return [elementRef, isVisible];
};

// Hook for stagger animations
export const useStaggerAnimation = (count, delay = 0.1) => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [ref, isVisible] = useScrollAnimation();

    useEffect(() => {
        if (isVisible) {
            const timeouts = [];
            for (let i = 0; i < count; i++) {
                const timeout = setTimeout(() => {
                    setVisibleItems(prev => new Set([...prev, i]));
                }, i * delay * 1000);
                timeouts.push(timeout);
            }
            return () => timeouts.forEach(clearTimeout);
        }
    }, [isVisible, count, delay]);

    return [ref, visibleItems];
};
