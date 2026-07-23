import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(({ src, className, ...props }, ref) => {
    const localRef = useRef<HTMLVideoElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useImperativeHandle(ref, () => localRef.current as HTMLVideoElement);

    useEffect(() => {
        const videoEl = localRef.current;
        if (!videoEl) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );

        observer.observe(videoEl);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <video
            ref={localRef}
            className={className}
            src={shouldLoad ? src : undefined}
            preload={shouldLoad ? "auto" : "none"}
            {...props}
        />
    );
});

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo;
