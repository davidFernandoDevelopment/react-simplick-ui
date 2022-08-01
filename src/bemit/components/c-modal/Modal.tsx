import React, { MouseEvent, useEffect, useRef } from 'react';
import classNames from 'classnames';

import { PolymorphicRef, PropsRef, CPolymorphicRef } from '@generic/PolymorphicGeneric';
import { SystemCModalProperties, ModalProperties } from '@generic/systemComponentProperties';
import Portal, { PortalProps } from '../Portal';
import BackDrop from '../c-backDrop/BackDrop';
import Box from '../c-box/Box';
import { useDelayUnmount } from '@hooks/useDelayUnmount';


export type ModalProps =
    & SystemCModalProperties
    & Omit<PortalProps, keyof ModalProperties>
    & {
        p?: string;
    };



const hasScroll = (element: Element, keep: number | null): boolean => {
    let documentHeight = keep ? element.scrollHeight - keep : element.scrollHeight;
    let documentClient = element.clientHeight;

    return documentHeight > documentClient;
};

const Modal: CPolymorphicRef<'div', ModalProps> = React.forwardRef(function Modal<C extends React.ElementType>({
    p,
    as,
    style,
    onClose,
    children,
    className,
    container,
    open = false,
    keepMounted = false,
    hideBackdrop = false,
    staticBackdrop = false,
    disablePortal = false,
    disableScrollLock = false,
    disableAnimationContent = false,
    ...restProps
}: PropsRef<C, ModalProps>, ref?: PolymorphicRef<C>) {

    const shouldRenderChild = useDelayUnmount(open, 600);
    const refBackDrop = useRef<HTMLDivElement>(null);
    let refModal = useRef<HTMLDivElement>(null);
    const hasScrollDocument = useRef<boolean>(false);

    useEffect(() => {
        let hasScrollDoc = false;
        // eslint-disable-next-line
        if (ref) refModal = ref;
        if (refModal.current) {
            let keep = !keepMounted ? (refModal.current as HTMLElement).clientHeight : null;
            hasScrollDoc = hasScroll(document.documentElement, keep);
        }
        hasScrollDocument.current = hasScrollDoc;
    }, [open]);

    useEffect(() => {
        if (!disableScrollLock && open && hasScrollDocument.current) {
            document.body.classList.add('has-modal');
        } else {
            document.body.classList.remove('has-modal');
        }
    }, [open, disableScrollLock]);

    const handleBackdropClick = (event: MouseEvent) => {

        if (event.target !== event.currentTarget) {
            console.log('first');
            return;
        }
        if (onClose && !staticBackdrop) {
            onClose(event, 'backdropClick');
        }
        if (open && staticBackdrop) {
            refBackDrop.current?.parentElement?.classList.add('modal-static');

            const timer = setTimeout(() => {
                refBackDrop.current?.parentElement?.classList.remove('modal-static');
                clearTimeout(timer);
            }, 40);
        }
    };


    const arrayClasses = [
        'SUI-c-modal',
        { [`${p}__modal`]: p },
        { 'is-open': open },
        { 'is-disable-scroll': !disableScrollLock && open && hasScrollDocument.current },
        className
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';

    return (
        <Portal container={container} disablePortal={disablePortal} >
            {
                (!keepMounted ? shouldRenderChild || open : true) && (
                    < Component
                        ref={ref || refModal}
                        style={style}
                        className={keepMounted ? classes : shouldRenderChild ? classes : ''}
                        {...restProps}
                    >
                        {
                            <BackDrop
                                open={open}
                                ref={refBackDrop}
                                className='SUI-c-modal__backDrop'
                                invisible={hideBackdrop}
                                onClick={handleBackdropClick}
                            />
                        }
                        {
                            !disableAnimationContent ? (
                                <Box className='SUI-c-modal__content'>
                                    {children}
                                </Box>
                            ) : children
                        }
                    </ Component>
                )
            }
        </Portal >
    );
});

export default Modal;;;;