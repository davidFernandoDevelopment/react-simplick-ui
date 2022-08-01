import React from 'react';
import classNames from 'classnames';

import { CPolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { SystemStyleProperties } from '@generic/systemStyleProperties';
import { generateClasses } from '@utilities/classForReact';
import { PolymorphicRef } from '@generic/PolymorphicGeneric';


interface BoxProps extends SystemStyleProperties { };

const Box: CPolymorphicRef<'div', BoxProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, BoxProps>, ref?: PolymorphicRef<C>) => {

    const { generatedClasses, rest } = generateClasses(restProps);
    const arrayClasses = [
        className,
        generatedClasses,
    ];
    const classes = classNames(arrayClasses);
    const Component = as || 'div';


    return (
        <Component {...rest} ref={ref} style={style} className={classes}>
            {children}
        </Component>
    );
});

export default Box;