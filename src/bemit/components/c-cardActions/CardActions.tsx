import React, { useMemo } from 'react';
import classNames from 'classnames';


import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';
import { CardActionsPropertySummary, SystemCCardActionsProperties } from '@generic/systemComponentProperties';



export type CardActionsProps =
    & SystemCCardActionsProperties
    & {};

export const CardActions: CPolymorphicRef<'div', CardActionsProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, CardActionsProps>, ref?: PolymorphicRef<C>) => {

    const { generatedClasses, rest } = useMemo(() =>
        generateComponentClasses(
            restProps,
            CardActionsPropertySummary
        ),
        [restProps]);
    const arrayClasses = [
        'SUI-c-cardActions',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';

    return (
        <Component
            {...rest}
            ref={ref}
            style={style}
            className={classes}
        >
            {children}
        </Component>
    );
});


export default CardActions;