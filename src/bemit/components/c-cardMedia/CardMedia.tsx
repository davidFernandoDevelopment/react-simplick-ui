import React, { useMemo } from 'react';
import classNames from 'classnames';

import { Props } from '@generic/PolymorphicGeneric';
import { CardMediaPropertySummary, SystemCCardMediaProperties } from '@generic/systemComponentProperties';
import { generateComponentClasses } from '@utilities/classForReact';


export type CardMediaProps =
    & SystemCCardMediaProperties
    & {};

export const CardMedia = <C extends React.ElementType = 'img'>({
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, CardMediaProps>) => {

    const { generatedClasses, rest } = useMemo(
        () => generateComponentClasses(restProps, CardMediaPropertySummary),
        //eslint-disable-next-line
        []
    );

    const arrayClasses = [
        'SUI-c-cardMedia',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);


    const Component = as || 'img';

    return (
        <div
            style={style}
            className={classes}
        >
            <Component
                className='SUI-c-cardMedia__img'
                {...rest}
            />
        </div>
    );
};


export default CardMedia;