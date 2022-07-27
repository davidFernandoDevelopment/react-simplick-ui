import React, { useMemo } from 'react';
import classNames from 'classnames';

import TouchRipple, { TouchRippleProps } from '../c-touchRipple/TouchRipple';

import { generateComponentClasses } from '../../../utilities/classForReact';
import { SystemSDisplayProperties } from '../../../generic/systemStyleProperties';
import { SystemCButtonBaseProperties, ButtonBasePropertySummary, ButtonBaseProperties } from '../../../generic/systemComponentProperties';
import { CPolymorphicRef, PolymorphicRef, PropsRef } from '../../../generic/PolymorphicGeneric';



export type ButtonBaseProps =
    & SystemCButtonBaseProperties
    // & Omit<SystemSDisplayProperties, keyof ButtonBaseProperties> // TIPO PARA UTILIDAD
    & Omit<TouchRippleProps, keyof ButtonBaseProperties>; // TIPO PARA COMPONENTE-DEP


export const ButtonBase: CPolymorphicRef<'button', ButtonBaseProps> = React.forwardRef(function ButtonBase<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    disableRipple = false,
    centerRipple = false, // PROPIEDAD QUE REQUIERE EL COMPONENTE-DEP TOUCHRIPPLE.
    ...restProps // RESTO DE PROPIEDADES QUE GENERARAN CLASSES O PROPIEDADES DE TAG.
}: PropsRef<C, ButtonBaseProps>, ref?: PolymorphicRef<C>) {

    const { generatedClasses, rest, restInherit } = useMemo(
        () => generateComponentClasses(restProps, ButtonBasePropertySummary),
        //eslint-disable-next-line
        [restProps.disabled]
    );

    const arrayClasses = [
        'SUI-c-buttonBase',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);
    const Component = as || 'button';


    return (
        <Component
            {...rest}
            {...restInherit}
            ref={ref}
            style={style}
            className={classes}
        >
            {children}
            {!disableRipple ? <TouchRipple centerRipple={centerRipple} /> : null}
        </Component>
    );
});

export default ButtonBase;
