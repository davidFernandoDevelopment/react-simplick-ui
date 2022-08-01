import React, { useMemo } from 'react';
import classNames from 'classnames';

import { CPolymorphicRef, PolymorphicRef, Props } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';
import { BackDropPropertySummary, SystemCBackDropProperties } from '@generic/systemComponentProperties';



export interface BackDropProps extends SystemCBackDropProperties { }

export const BackDrop: CPolymorphicRef<'div', BackDropProps> = React.forwardRef(function BackDrop<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, BackDropProps>, ref?: PolymorphicRef<C>) {

    const {
        rest,
        generatedClasses
    } = useMemo(() => generateComponentClasses(restProps, BackDropPropertySummary), [restProps]);

    const arrayClasses = [
        'SUI-c-backDrop',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';

    return (
        <Component
            ref={ref}
            {...rest}
            style={style}
            className={classes}
        >
            {children}
        </Component>
    );
});

export default BackDrop;