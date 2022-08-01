import React, { useMemo } from 'react';
import classNames from 'classnames';

import { CPolymorphicRef, PropsRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import ButtonBase, { ButtonBaseProps } from '../c-buttonBase/ButtonBase';
import { SystemCCardActionAreaProperties, CardActionAreaProperties, CardActionAreaPropertySummary } from '@generic/systemComponentProperties';
import { generateComponentClasses } from '@utilities/classForReact';




export type CardActionAreaProps =
    & SystemCCardActionAreaProperties
    & Partial<Omit<ButtonBaseProps, keyof CardActionAreaProperties>>
    & {};

export const CardActionArea: CPolymorphicRef<'button', CardActionAreaProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, CardActionAreaProps>, ref?: PolymorphicRef<C>) => {

    const { generatedClasses, rest, restInherit } = useMemo(
        () => generateComponentClasses(
            restProps,
            CardActionAreaPropertySummary
        ),
        //eslint-disable-next-line
        [restProps.disabled]
    );

    const arrayClasses = [
        'SUI-c-cardActionArea',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);


    return (
        <ButtonBase
            as={as}
            ref={ref}
            className={classes}
            {...rest}
            {...restInherit}
        >
            {children}
        </ButtonBase>
    );
});

export default CardActionArea;
