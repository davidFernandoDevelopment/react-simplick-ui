import React, { createContext } from 'react';


import Modal, { ModalProps } from '../c-modal/Modal';
import Paper from '../c-paper/Paper';
import OContainer from '../../objects/o-container/Container';

import { SystemCDialogProperties, DialogProperties } from '@generic/systemComponentProperties';
import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';

interface IDialog {
    handleClose: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void;
}
export const DialogContext = createContext<IDialog>({} as IDialog);

type DialogProps =
    & SystemCDialogProperties
    & Omit<ModalProps, keyof DialogProperties>
    & {
        p?: string;
    };


export const Dialog: CPolymorphicRef<'div', DialogProps> = React.forwardRef(<C extends React.ElementType>({
    p,
    as,
    children,
    maxWidth,
    onClose,
    ...rest
}: PropsRef<C, DialogProps>, ref?: PolymorphicRef<C>) => {

    return (
        <Modal
            p={p}
            as={as}
            ref={ref}
            onClose={onClose}
            className='SUI-c-dialog'
            disableAnimationContent
            {...rest as any}
        >
            <OContainer p='SUI-c-dialog' maxWidthContainer={maxWidth}>
                <Paper className='SUI-c-dialog__paper'>
                    <DialogContext.Provider value={{ handleClose: onClose! }}>
                        {children}
                    </DialogContext.Provider>
                </Paper>
            </OContainer>
        </Modal >
    );
});