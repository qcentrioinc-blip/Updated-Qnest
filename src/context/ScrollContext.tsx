import { createContext, useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react';
import type { ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

export const ScrollContext = createContext<Lenis | null>(null);

type ScrollProviderProps = {
    children: ReactNode;
};

const getStorageKey = (pathname: string) => `scrollPos_${pathname}`;

// Check if this is a page refresh
const isPageRefresh = (): boolean => {
    try {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        return navEntries.length > 0 && navEntries[0].type === 'reload';
    } catch {
        return false;
    }
};

// Get saved scroll position for current path
const getSavedScrollPosition = (): number => {
    try {
        const pathname = window.location.pathname;
        const storageKey = getStorageKey(pathname);
        const saved = sessionStorage.getItem(storageKey);
        return saved ? parseInt(saved, 10) : 0;
    } catch {
        return 0;
    }
};

// Check if we need to restore scroll
const needsRestoration = (): boolean => {
    const target = getSavedScrollPosition();
    return isPageRefresh() && target > 0;
};

// IMMEDIATELY hide page if restoration needed (before React mounts)
const HIDE_STYLE_ID = 'scroll-hide';
if (typeof window !== 'undefined' && needsRestoration()) {
    const existing = document.getElementById(HIDE_STYLE_ID);
    if (!existing) {
        const style = document.createElement('style');
        style.id = HIDE_STYLE_ID;
        style.textContent = `html{visibility:hidden!important}`;
        document.head.appendChild(style);
    }
    // Also immediately try to scroll
    const target = getSavedScrollPosition();
    window.scrollTo(0, target);
    document.documentElement.scrollTop = target;
}

// Show the page
const showPage = () => {
    const style = document.getElementById(HIDE_STYLE_ID);
    if (style) style.remove();
    document.documentElement.style.visibility = '';
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const { pathname } = useLocation();
    const prevPathRef = useRef(pathname);
    const isRestoringRef = useRef(false);

    // Disable browser's scroll restoration
    useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Save scroll position continuously
    useEffect(() => {
        let saveTimeout: ReturnType<typeof setTimeout>;

        const save = () => {
            if (isRestoringRef.current) return; // Don't save during restoration
            const y = window.scrollY || document.documentElement.scrollTop;
            const key = getStorageKey(window.location.pathname);
            sessionStorage.setItem(key, y.toString());
        };

        const onScroll = () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(save, 100); // Increased debounce
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('beforeunload', save);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('beforeunload', save);
            clearTimeout(saveTimeout);
        };
    }, []);

    // Initialize Lenis and handle restoration
    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Create Lenis instance
        const lenisInstance = new Lenis({
            duration: isTouch ? 0.5 : 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: !isTouch,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
        });
        setLenis(lenisInstance);

        // Animation loop
        let rafId: number;
        const animate = (time: number) => {
            lenisInstance.raf(time);
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);

        // Handle scroll restoration
        const target = getSavedScrollPosition();
        const shouldRestore = needsRestoration();

        if (shouldRestore && target > 0) {
            isRestoringRef.current = true;

            // Force scroll function
            const forceScroll = () => {
                lenisInstance.scrollTo(target, { immediate: true, force: true });
                window.scrollTo(0, target);
                document.documentElement.scrollTop = target;
            };

            // Force scroll immediately
            forceScroll();

            // Extended restoration loop - keep forcing for longer
            let frameCount = 0;
            const maxFrames = 60; // ~1 second of forcing
            let lastDocHeight = 0;
            let stableFrames = 0;

            const keepForcing = () => {
                forceScroll();
                frameCount++;

                const current = window.scrollY;
                const docHeight = document.documentElement.scrollHeight;
                const isClose = Math.abs(current - target) < 10;

                // Track if document height has stabilized
                if (docHeight === lastDocHeight) {
                    stableFrames++;
                } else {
                    stableFrames = 0;
                    lastDocHeight = docHeight;
                }

                // Show page when:
                // 1. Document height is stable for 5+ frames AND we're close to target
                // 2. OR we've been trying for 20+ frames
                const shouldShow = (stableFrames >= 5 && isClose) || frameCount >= 20;

                if (shouldShow && !document.getElementById(HIDE_STYLE_ID)?.dataset.shown) {
                    showPage();
                    const style = document.getElementById(HIDE_STYLE_ID);
                    if (style) style.dataset.shown = 'true';
                }

                // Stop when:
                // 1. Stable for 10+ frames and close to target
                // 2. OR max frames reached
                if ((stableFrames >= 10 && isClose) || frameCount >= maxFrames) {
                    isRestoringRef.current = false;
                    return;
                }

                requestAnimationFrame(keepForcing);
            };

            requestAnimationFrame(keepForcing);
        } else {
            showPage();
        }

        return () => {
            cancelAnimationFrame(rafId);
            lenisInstance.destroy();
            setLenis(null);
        };
    }, []);

    // Handle route changes - scroll to top
    useEffect(() => {
        if (pathname !== prevPathRef.current) {
            prevPathRef.current = pathname;

            requestAnimationFrame(() => {
                if (lenis) {
                    lenis.scrollTo(0, { immediate: true, force: true });
                }
                window.scrollTo(0, 0);
            });
        }
    }, [pathname, lenis]);

    // Memoize children to prevent unnecessary re-renders
    const memoizedChildren = useMemo(() => children, [children]);

    return (
        <ScrollContext.Provider value={lenis}>
            {memoizedChildren}
        </ScrollContext.Provider>
    );
};
