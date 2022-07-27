import React, { useMemo } from 'react';
import classNames from 'classnames';


import { generateComponentClasses } from '../../../utilities/classForReact';
import { ButtonProperties, ButtonPropertySummary, SystemCButtonProperties } from '../../../generic/systemComponentProperties';
import { PropsRef, PolymorphicRef, CPolymorphicRef } from '../../../generic/PolymorphicGeneric';
import ButtonBase, { ButtonBaseProps } from '../c-buttonBase/ButtonBase';




export type ButtonProps =
    & SystemCButtonProperties
    & Omit<ButtonBaseProps, keyof ButtonProperties>;



export const Button: CPolymorphicRef<'button', ButtonProps> = React.forwardRef(function Button<C extends React.ElementType>({
    as,
    children,
    className,
    startIcon,
    endIcon,
    ...restProps
}: PropsRef<C, ButtonProps>, ref?: PolymorphicRef<C>) {

    const { generatedClasses, rest, restInherit } = useMemo(
        () => generateComponentClasses(
            restProps,
            ButtonPropertySummary
        ),
        //eslint-disable-next-line
        [restProps.disabled]
    );

    const arrayClasses = [
        'SUI-c-button',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);


    return (
        <ButtonBase
            as={as}
            ref={ref}
            {...rest}
            {...restInherit}
            className={classes}
        >
            {startIcon && <span className='SUI-c-button__icon'>{startIcon}</span>}
            {children}
            {endIcon && <span className='SUI-c-button__icon'>{endIcon}</span>}
        </ButtonBase>
    );
});


export default Button;