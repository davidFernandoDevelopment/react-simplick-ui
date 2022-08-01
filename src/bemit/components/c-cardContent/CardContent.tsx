import React, { useMemo } from 'react';
import classNames from 'classnames';

import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';
import { SystemCCardContentProperties, CardContentPropertySummary } from '@generic/systemComponentProperties';


export type CardContentProps =
    & SystemCCardContentProperties
    & {};

export const CardContent: CPolymorphicRef<'div', CardContentProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, CardContentProps>, ref?: PolymorphicRef<C>) => {

    const { generatedClasses, rest } = useMemo(
        () => generateComponentClasses(
            restProps,
            CardContentPropertySummary
        ),
        [restProps]
    );
    const arrayClasses = [
        'SUI-c-cardContent',
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

export default CardContent;