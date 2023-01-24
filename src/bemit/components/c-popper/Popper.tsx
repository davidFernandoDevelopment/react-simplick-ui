import React, { useLayoutEffect } from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { useDelayUnmount } from '@hooks/useDelayUnmount';
import useWindowSize from '@hooks/useWindowSize';

import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { PopperProperties, PopperPropertySummary, SystemCPopperProperties } from '@generic/systemComponentProperties';

import Paper from '../c-paper/Paper';
import Portal, { PortalProps } from '../Portal';
import { usePopover } from '../c-popover/usePopover';




export type PopperProps =
    & SystemCPopperProperties
    & Omit<PortalProps, keyof PopperProperties>
    & {};


export const Popper: CPolymorphicRef<'div', PopperProps> = React.forwardRef(function Popper<C extends React.ElementType>({
    as,
    open = false,
    style,
    children,
    className,
    arrow,
    elevation = 8,
    anchorEl,
    paperProps,
    paperClasses,
    placement,
    anchorOrigin,
    transformOrigin,
    keepMounted = false,
    disablePortal = false,
    ...restProps
}: PropsRef<C, PopperProps>, ref?: PolymorphicRef<C>) {

    const p = 'SUI-c-popper';

    const size = useWindowSize();
    const shouldRenderChild = useDelayUnmount(!!open, 600);
    const { setPositioningStyle, arrowRef, paperRef } = usePopover({ anchorEl, anchorOrigin, transformOrigin, placement, childTransformOrigin: true });

    const {
        mainClasses: classes,
        extraClasses: [classesPaper, classesArrow]
    } = useClassGenerator({
        p,
        className,
        deps: [open],
        propertySummary: PopperPropertySummary,
        mainClasses: [{ 'is-open': open }],
        props: {
            ...(placement !== undefined && arrow ? { placement } : {}),
            ...restProps
        },
    },
        [`${p}__paper`, { [`${p}__transition`]: !arrow }],
        [`${p}__arrow-wrapper`, { [`${p}__transition`]: arrow }]
    );

    useLayoutEffect(() => {
        if (open && paperRef.current) {
            paperRef.current.style.position = 'absolute';
            setPositioningStyle();
        };
        // eslint-disable-next-line
    }, [open, paperRef.current, size, setPositioningStyle]);


    const PopperPaper = (
        <Paper
            elevation={elevation}
            sx={paperProps}
            className={`${classesPaper} ${paperClasses}`}
        >
            {children}
        </Paper>
    );
    const PopperArrow = (
        <div className={classesArrow}>
            <div ref={arrowRef} className={`${p}__arrow`}></div>
            {PopperPaper}
        </div>
    );

    const Component = as || 'div';

    return (
        <>
            <Portal disablePortal={disablePortal}>
                {
                    (keepMounted ? true : (shouldRenderChild || open)) && (
                        <Component
                            ref={paperRef}
                            data-placement={placement}
                            className={keepMounted ? classes : shouldRenderChild ? classes : ''}
                        >
                            {arrow ? PopperArrow : PopperPaper}
                        </Component>
                    )
                }
            </Portal>
        </>
    );

});

export default Popper;