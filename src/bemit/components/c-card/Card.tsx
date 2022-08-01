import React, { useMemo } from 'react';
import classNames from 'classnames';

import Paper, { PaperProps } from '../c-paper/Paper';
import { useEffectBase } from '@hooks/useEffectBase';
import { generateComponentClasses } from '@utilities/classForReact';
import { CPolymorphicRef, PropsRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { CardProperties, CardPropertySummary, SystemCCardProperties } from '@generic/systemComponentProperties';




export type CardProps =
    & SystemCCardProperties
    & Omit<PaperProps, keyof CardProperties>
    & {};

export const Card: CPolymorphicRef<'div', CardProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, CardProps>, ref?: PolymorphicRef<C>) => {


    const { generatedClasses, rest } = useMemo(
        () => {
            return generateComponentClasses(restProps, CardPropertySummary);
        },
        //eslint-disable-next-line
        [restProps.disabled]
    );
    useEffectBase(() => { }, [], generatedClasses);

    const arrayClasses = [
        'SUI-c-card',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    return (
        <Paper
            as={as}
            ref={ref}
            style={style}
            {...rest}
            className={classes}
        >
            {children}
        </Paper>
    );
});

export default Card;