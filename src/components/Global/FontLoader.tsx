import { useEffect } from 'react';

const FontLoader = () => {
    useEffect(() => {
        import('@fontsource/schibsted-grotesk/400.css');
        import('@fontsource/schibsted-grotesk/700.css');
    }, []);

    return null;
};

export default FontLoader;
