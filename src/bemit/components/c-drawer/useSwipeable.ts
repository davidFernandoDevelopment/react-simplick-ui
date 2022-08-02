import { useState, useCallback, useEffect, useRef } from 'react';

import { getMaxTranslate, getTranslate, isHorizontal, calculatevisibleTouchSurface, Anchor } from './utils';



const initialState = {
    isSwizing: false,
    startingX: 0,
    startingY: 0
};
export const useSwipeable = (anchor: Anchor, onClose: () => any, open?: boolean, swipeableEdge?: boolean) => {


    const [touchState, setTouchState] = useState(initialState);
    const touchSurface = useRef<HTMLDivElement>(null);
    const setPosition = useCallback((translate: number, isExit = false) => {
        const multiplier = ['right', 'bottom'].indexOf(anchor) !== -1 ? 1 : -1;
        let horizontalSwipe = isHorizontal(anchor);

        if (touchSurface.current) {
            const drawerStyle = touchSurface.current.style;
            const backdrop = (touchSurface.current.previousSibling! as HTMLDivElement);
            const backdropStyle = backdrop.style;

            const transition = `transform 225ms var(--transition-cubic-translate) 0ms`;
            const val = 1 - translate / getMaxTranslate(horizontalSwipe, touchSurface.current);

            backdropStyle.opacity = `${val}`;
            backdropStyle.transition = transition;

            drawerStyle.setProperty('--transition', `${multiplier * translate}px`);
            drawerStyle.setProperty(
                'transition',
                `transform 0ms var(--transition-cubic-translate)`
            );

            if (isExit) {
                drawerStyle.transition = transition;

                if (!open && touchSurface.current) {
                    touchSurface.current.removeAttribute('style');
                    backdrop.removeAttribute('style');

                    (touchSurface.current.previousSibling! as HTMLDivElement).removeAttribute('style');
                }

            }
        }
        //eslint-disable-next-line
    }, []);
    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (!touchSurface.current?.contains(e.target as HTMLElement)) return;
        if (swipeableEdge && !isHorizontal(anchor) && !(e.target as HTMLElement).classList.value.includes('SUI-c-drawer__edge')) return;


        let currentX = e.touches[0].pageX;
        let currentY = e.touches[0].pageY;

        setTouchState({
            ...touchState,
            isSwizing: true,
            startingX: currentX,
            startingY: currentY
        });
        //eslint-disable-next-line
    }, [touchState.startingX, touchState.startingY]);
    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!touchSurface.current || !touchState.isSwizing) return;
        if (!touchSurface.current?.contains(e.target as HTMLElement)) return;
        if (swipeableEdge && !isHorizontal(anchor) && !(e.target as HTMLElement).classList.value.includes('SUI-c-drawer__edge')) return;

        let touches: TouchList = e.touches;
        let horizontalSwipe = isHorizontal(anchor);


        let startPos = horizontalSwipe ? touchState.startingX : touchState.startingY;
        let currentPos = horizontalSwipe ? touches[0].pageX : touches[0].pageY;

        let translate = getTranslate(anchor, startPos, currentPos);

        if (translate) setPosition(translate);

        //eslint-disable-next-line
    }, [touchState.startingX, touchState.startingY]);
    const handleTouchEnd = useCallback((e: TouchEvent) => {
        if (!touchState.isSwizing) return;
        if (!touchSurface.current?.contains(e.target as HTMLElement)) return;
        if (swipeableEdge && !isHorizontal(anchor) && !(e.target as HTMLElement).classList.value.includes('SUI-c-drawer__edge')) return;


        const horizontal = isHorizontal(anchor);
        const maxTranslate = getMaxTranslate(horizontal, touchSurface.current);
        let transition = Math.abs((touchSurface.current.style.getPropertyValue('--transition').split('px')[0] as unknown as number));
        let current = calculatevisibleTouchSurface(anchor, transition, touchSurface.current);


        if (current < maxTranslate / 3) {
            setPosition(getMaxTranslate(horizontal, touchSurface.current), true);
            onClose && onClose();
        } else {
            setPosition(0, true);
        }
        setTouchState(initialState);

        //eslint-disable-next-line
    }, [touchState.startingX, touchState.startingY]);

    const handleMouseDown = useCallback((e: MouseEvent) => {
        e.preventDefault();

        if (!touchSurface.current?.contains(e.target as HTMLElement)) return;
        if (swipeableEdge && !isHorizontal(anchor) && !(e.target as HTMLElement).closest('.SUI-c-drawer__edge')) return;


        let currentX = e.pageX;
        let currentY = e.pageY;

        setTouchState({
            ...touchState,
            isSwizing: true,
            startingX: currentX,
            startingY: currentY
        });


        //eslint-disable-next-line
    }, [touchState.startingX, touchState.startingY]);
    const handleMouseMove = useCallback((e: MouseEvent) => {

        if (!touchState.isSwizing) return;
        if (!touchSurface.current?.contains(e.target as HTMLElement)) return;
        if (swipeableEdge && !isHorizontal(anchor) && !(e.target as HTMLElement).classList.value.includes('SUI-c-drawer__edge')) return;


        let horizontalSwipe = isHorizontal(anchor);


        let startPos = horizontalSwipe ? touchState.startingX : touchState.startingY;
        let currentPos = horizontalSwipe ? e.pageX : e.pageY;

        let translate = getTranslate(anchor, startPos, currentPos);

        if (translate) setPosition(translate);

        //eslint-disable-next-line
    }, [touchState.startingX, touchState.startingY, touchState.isSwizing]);
    const handleMouseUp = useCallback((e: MouseEvent) => {

        if (!touchState.isSwizing) return;
        if (!touchSurface.current?.contains(e.target as HTMLElement)) return;
        if (swipeableEdge && !isHorizontal(anchor) && !(e.target as HTMLElement).classList.value.includes('SUI-c-drawer__edge')) return;


        const horizontal = isHorizontal(anchor);
        const maxTranslate = getMaxTranslate(horizontal, touchSurface.current);
        let transition = Math.abs((touchSurface.current.style.getPropertyValue('--transition').split('px')[0] as unknown as number));
        let current = calculatevisibleTouchSurface(anchor, transition, touchSurface.current);


        if (current < maxTranslate / 3) {
            setPosition(getMaxTranslate(horizontal, touchSurface.current), true);
            onClose && onClose();
        } else {
            setPosition(0, true);
        }
        setTouchState(initialState);

        touchSurface.current?.removeEventListener('mousemove', handleMouseMove);
        touchSurface.current?.removeEventListener('mouseup', handleMouseUp);
        touchSurface.current?.removeEventListener('mouseout', handleMouseUp);
        //eslint-disable-next-line
    }, [touchState.startingX, touchState.startingY, touchState.isSwizing]);

    useEffect(() => {
        let touch = touchSurface.current;
        touch?.addEventListener('touchstart', handleTouchStart);
        touch?.addEventListener('touchmove', handleTouchMove, { passive: !open });
        touch?.addEventListener('touchend', handleTouchEnd);

        touch?.addEventListener('mousedown', handleMouseDown);
        touch?.addEventListener('mousemove', handleMouseMove);
        touch?.addEventListener('mouseup', handleMouseUp);
        touch?.addEventListener('mouseout', handleMouseUp);


        return () => {

            touch?.removeEventListener('touchstart', handleTouchStart);
            touch?.removeEventListener('touchmove', handleTouchMove);
            touch?.removeEventListener('touchend', handleTouchEnd);

            touch?.removeEventListener('mousedown', handleMouseDown);
            touch?.removeEventListener('mousemove', handleMouseMove);
            touch?.removeEventListener('mouseup', handleMouseUp);
            touch?.removeEventListener('mouseout', handleMouseUp);
        };
    }, [open, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, handleMouseMove, handleMouseUp]);


    return {
        touchSurface
    };
};