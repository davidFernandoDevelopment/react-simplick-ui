import { useEffect, useState } from 'react';

export function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {

        let timeoutId: any;

        if (isMounted) {
            setShouldRender(true);
        } else {
            timeoutId = setTimeout(
                () => setShouldRender(false),
                delayTime
            );
        }



        return () => {
            clearTimeout(timeoutId);
        };
    }, [isMounted, delayTime]);
    return shouldRender;
}