import React, { useEffect, useLayoutEffect } from 'react';

import Paper from '../c-paper/Paper';
import Modal, { ModalProps } from '../c-modal/Modal';

import { usePopover } from './usePopover';
import useWindowSize from '@hooks/useWindowSize';
import { useClassGenerator } from '@hooks/useClassGenerator';

import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { PopoverProperties, PopoverPropertySummary, SystemCPopoverProperties } from '@generic/systemComponentProperties';




export type PopoverProps =
    & SystemCPopoverProperties
    & Omit<ModalProps, keyof PopoverProperties>
    & {};


export const Popover: CPolymorphicRef<'div', PopoverProps> = React.forwardRef(function Popover<C extends React.ElementType>({
    open,
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
    ...restProps
}: PropsRef<C, PopoverProps>, ref?: PolymorphicRef<C>) {

    const p = 'SUI-c-popover';

    const size = useWindowSize();
    const { setPositioningStyle, arrowRef, paperRef } = usePopover({ anchorEl, anchorOrigin, transformOrigin, placement });

    const {
        rest,
        mainClasses: classes,
        extraClasses: [classesPaper, classesArrow]
    } = useClassGenerator({
        p,
        className,
        deps: [open],
        propertySummary: PopoverPropertySummary,
        props: {
            ...(open !== undefined ? { open } : {}),
            ...(placement !== undefined ? { placement } : {}),
            ...restProps
        },
    },
        [`${p}__paper`, { [`${p}__transition`]: !arrow }],
        [`${p}__arrow-wrapper`, { [`${p}__transition`]: arrow }]
    );

    useLayoutEffect(() => {
        if (open) setPositioningStyle();
    }, [open, size, setPositioningStyle]);


    const PopoverPaper = (
        <Paper
            ref={!arrow ? paperRef : null}
            elevation={elevation}
            sx={paperProps}
            className={`${classesPaper} ${paperClasses}`}
            data-placement={!arrow ? placement : ''}
        >
            {children}
        </Paper>
    );
    const PopoverArrow = (
        <div ref={arrow ? paperRef : null} className={classesArrow} data-placement={arrow ? placement : ''}>
            <div ref={arrowRef} className={`${p}__arrow`}></div>
            {PopoverPaper}
        </div>
    );

    return (
        <Modal
            ref={ref}
            open={open}
            className={classes}
            hideBackdrop
            disableAnimationContent
            {...rest}
        >
            {arrow ? PopoverArrow : PopoverPaper}
        </Modal>
    );

});

export default Popover;