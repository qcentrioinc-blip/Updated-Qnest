import { useState, useEffect, type ComponentType } from 'react';

/**
 * A component that defers loading of another component until after a specified delay.
 * This removes the component from the critical rendering path entirely.
 */
interface DeferredLoaderProps<T extends object> {
    loader: () => Promise<{ default: ComponentType<T> }>;
    delay?: number; // Delay in ms before starting to load
    props?: T;
}

function DeferredLoader<T extends object>({
    loader,
    delay = 2000,
    props = {} as T
}: DeferredLoaderProps<T>) {
    const [Component, setComponent] = useState<ComponentType<T> | null>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        // Wait for initial paint + delay before loading
        const timer = setTimeout(() => {
            setShouldLoad(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
        if (shouldLoad && !Component) {
            loader().then(mod => {
                setComponent(() => mod.default);
            });
        }
    }, [shouldLoad, Component, loader]);

    if (!Component) return null;

    return <Component {...props} />;
}

export default DeferredLoader;
