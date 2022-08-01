import React, { useMemo } from 'react';
import classNames from 'classnames';

import { PropsRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';
import { SystemCDialogActionsProperties, DialogActionsPropertySummary } from '@generic/systemComponentProperties';
import { CPolymorphicRef } from '@generic/PolymorphicGeneric';


export type DialogActionsProps =
    & SystemCDialogActionsProperties
    & {};


export const DialogActions: CPolymorphicRef<'div', DialogActionsProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, DialogActionsProps>, ref?: PolymorphicRef<C>) => {

    const {
        rest,
        generatedClasses
    } = useMemo(
        () => generateComponentClasses(restProps, DialogActionsPropertySummary),
        // eslint-disable-next-line
        []);
    const arrayClasses = [
        'SUI-c-dialogActions',
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


export default DialogActions;