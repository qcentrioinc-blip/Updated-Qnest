// useImagePreloader.ts
// Drop this hook anywhere in your project, e.g. src/hooks/useImagePreloader.ts

import { useEffect, useRef, useState } from "react";

/**
 * Preloads a list of image URLs into the browser's memory cache on mount.
 * Returns `ready: true` once every image has finished decoding.
 *
 * Because the browser keeps these Image objects in memory (via the ref),
 * subsequent renders—even after scroll-away / scroll-back—hit the disk-cache
 * or memory-cache instantly, eliminating the "flash of gray" on re-visit.
 */
export function useImagePreloader(urls: string[]) {
  const images = useRef<HTMLImageElement[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      const promises = urls.map((src) => {
        // Re-use an existing Image object if we already created one for this src
        let img = images.current.find((i) => i.src.endsWith(src));
        if (!img) {
          img = new Image();
          img.src = src;
          images.current.push(img);
        }
        // .decode() resolves after the image is fully decoded & GPU-ready
        return img.decode().catch(() => {}); // swallow 404s gracefully
      });

      await Promise.all(promises);
      if (!cancelled) setReady(true);
    };

    load();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  return { ready, images: images.current };
}