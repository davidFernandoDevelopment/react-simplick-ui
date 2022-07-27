import { useState, useEffect, useRef } from 'react';

export type Status = 'loading' | 'loaded' | 'error';


export function useImageStatus(src?: string): [Status, HTMLImageElement] {

    const image = useRef<HTMLImageElement>(new Image());
    const [loaded, setLoaded] = useState<Status>('loading');

    useEffect(() => {
        if (!src) {
            setLoaded('error');
            return undefined;
        };

        let active = true;
        image.current.onload = () => {
            if (!active) return;
            setLoaded('loaded');
        };
        image.current.onerror = () => {
            if (!active) return;
            setLoaded('error');
        };
        image.current.src = src;

        return () => {
            active = false;
        };

    }, [src]);

    return [loaded, image.current];
}