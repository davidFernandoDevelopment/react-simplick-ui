import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';

import Close from '../c-icons/icons/Close';
import IconButton from '../c-iconButton/IconButton';

import { generateComponentClasses } from '@utilities/classForReact';
import { PropsRef, PolymorphicRef, CPolymorphicRef } from '@generic/PolymorphicGeneric';
import { SystemCDialogTitleProperties, DialogTitlePropertySummary } from '@generic/systemComponentProperties';
import { DialogContext } from '../c-dialog/Dialog';



export type DialogTitleProps =
    & SystemCDialogTitleProperties
    & {};


export const DialogTitle: CPolymorphicRef<'div', DialogTitleProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    closeButton = false,
    ...restProps
}: PropsRef<C, DialogTitleProps>, ref?: PolymorphicRef<C>) => {

    const { handleClose } = useContext(DialogContext);
    const {
        rest,
        generatedClasses
    } = useMemo(
        () => generateComponentClasses(restProps, DialogTitlePropertySummary),
        // eslint-disable-next-line
        []);
    const arrayClasses = [
        'SUI-c-dialogTitle',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';

    const handleClickIcon = (e: any) => {
        if (handleClose) {
            handleClose(e, 'escapeKeyDown');
        }
    };

    return (
        <Component
            ref={ref}
            style={style}
            className={classes}
            {...rest}
        >
            {children}
            {
                closeButton ? (
                    <IconButton
                        onClick={handleClickIcon}
                    >
                        <Close />
                    </IconButton>
                ) : null
            }
        </Component>
    );
});


export default DialogTitle;