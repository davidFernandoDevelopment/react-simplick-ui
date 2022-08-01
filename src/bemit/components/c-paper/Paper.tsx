import React, { useMemo } from 'react';
import classNames from 'classnames';

import { PaperPropertySummary, SystemCPaperProperties } from '@generic/systemComponentProperties';
import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';

export type PaperProps =
    & SystemCPaperProperties;

export const Paper: CPolymorphicRef<'div', PaperProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, PaperProps>, ref?: PolymorphicRef<C>) => {

    const { rest, generatedClasses, } = useMemo(
        () => generateComponentClasses(
            restProps,
            PaperPropertySummary),
        //eslint-disable-next-line
        []);

    const arrayClasses = [
        'SUI-c-paper',
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

export default Paper;