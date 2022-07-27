import { useEffect, useRef } from 'react';
import { clearClassesSx } from '../utilities/helpersForClass';

export const useEffectBase = (cb: any, dep = [], generatedClasses: string) => {

    const justMounted = useRef(true);

    useEffect(() => {
        if (!justMounted) {
            cb();
        }
        justMounted.current = false;


        return () => {
            clearClassesSx(generatedClasses);
        };
        //eslint-disable-next-line
    }, [...dep]);
};