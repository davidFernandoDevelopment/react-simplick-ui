import React from 'react';

import Modal, { ModalProps } from '../c-modal/Modal';
import Paper from '../c-paper/Paper';

import { useSwipeable } from './useSwipeable';
import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { DrawerPropertySummary, SystemCDrawerProperties, DrawerProperties } from '@generic/systemComponentProperties';
import { useClassGenerator } from '@hooks/useClassGenerator';
import Divider from '../c-divider/Divider';



export type DrawerProps =
    & SystemCDrawerProperties
    & Omit<ModalProps, keyof DrawerProperties>
    & {};



export const Drawer: CPolymorphicRef<'div', DrawerProps> = React.forwardRef(function Drawer<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    open,
    onClose,
    paperProps,
    anchor = 'left',
    variant = 'temporary',
    swipeableEdge = false,
    swipeableEdgeExtra,
    ...restProps
}: PropsRef<C, DrawerProps>, ref?: PolymorphicRef<C>) {

    const p = 'SUI-c-drawer';
    const { touchSurface } = useSwipeable(anchor, onClose as any, open, swipeableEdge);
    const {
        rest,
        mainClasses: classes,
        extraClasses: [classesPaper, classesTransition]
    } = useClassGenerator({
        p,
        props: {
            onClose,
            ...restProps,
            ...(variant ? { variant } : {}),
            ...(open !== undefined ? { open } : {}),
        },
        className,
        deps: [open],
        propertySummary: DrawerPropertySummary
    },
        [{ [`${p}__paper`]: p }, { [`${p}--anchor-${anchor}`]: anchor }],
        [{ [`${p}__transition`]: p }, { [`${p}__transition--anchor-${anchor}`]: anchor }]
    );

    const edge = swipeableEdge && (
        <>
            <div className={`${p}__edge`}>
                <span className={`${p}__edge-line`}></span>
                {
                    swipeableEdgeExtra && (
                        <div className={`${p}__edge-extra`}>
                            {swipeableEdgeExtra}
                        </div>
                    )
                }
            </div>
            <Divider />
        </>
    );

    const DrawerPaper = (
        <Paper
            square
            elevation={2}
            ref={touchSurface}
            className={`${classesPaper} ${variant !== 'permanent' && classesTransition}`}
            sx={paperProps}
        >
            {anchor === "bottom" && edge}
            {children}
            {anchor === "top" && edge}
        </Paper >
    );


    return variant === 'temporary' ? (
        <Modal
            p={p}
            ref={ref}
            style={style}
            className={classes}
            disableAnimationContent
            {...rest}
        >
            {DrawerPaper}
        </Modal>
    ) : (
        <div className={`${p}__docked ${open ? 'is-open' : ''}`}>
            {DrawerPaper}
        </div>
    );
});


export default Drawer;