import React, { useMemo } from 'react';
import classNames from 'classnames';

import { PropsRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';
import { SystemCDialogContentProperties, DialogContentPropertySummary } from '@generic/systemComponentProperties';
import { CPolymorphicRef } from '@generic/PolymorphicGeneric';


export type DialogContentProps =
    & SystemCDialogContentProperties
    & {};


export const DialogContent: CPolymorphicRef<'div', DialogContentProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    divider = true,
    ...restProps
}: PropsRef<C, DialogContentProps>, ref?: PolymorphicRef<C>) => {

    const {
        rest,
        generatedClasses
    } = useMemo(
        () => generateComponentClasses(restProps, DialogContentPropertySummary),
        // eslint-disable-next-line
        []);
    const arrayClasses = [
        'SUI-c-dialogContent',
        { 'SUI-c-dialogContent--divider': divider },
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';

    return (
        <Component
            ref={ref}
            style={style}
            className={classes}
            {...rest}
        >
            {children}
        </Component>
    );
});


export default DialogContent;