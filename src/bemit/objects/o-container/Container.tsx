import React from 'react';
import classNames from 'classnames';


import { generateClasses } from '../../../utilities/classForReact';
import { ContainerProperties } from '../../../generic/systemStyleProperties';
import { Props, CPolymorphic } from '../../../generic/PolymorphicGeneric';


interface OContainerProps extends ContainerProperties {
    p?: string;
}

const OContainer: CPolymorphic<'div', OContainerProps> = <C extends React.ElementType>({
    p,
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, OContainerProps>) => {

    const { generatedClasses } = generateClasses(restProps);
    const arrayClasses = [
        generatedClasses,
        { [`${p}__container`]: p },
        { [`${className}`]: className },
        { 'o-container': !generatedClasses },
    ];

    let classes = classNames(arrayClasses);
    let Component = as || 'div';

    return (
        <Component className={classes} style={style}>
            {children}
        </Component>
    );
};

export default OContainer;