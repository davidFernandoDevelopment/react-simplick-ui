import React, { useMemo } from 'react';
import { CPolymorphic, Props } from '@generic/PolymorphicGeneric';
import { ColorProperties, DisplayProperties, FlexboxItemProperties, SpacingProperties, TextProperties } from '@generic/systemStyleProperties';
import { generateClasses } from '@utilities/classForReact';
import classNames from 'classnames';
import { StylePropertyValues } from '@generic/utils';
import { useEffectBase } from '@hooks/useEffectBase';


type PropsFI = StylePropertyValues<FlexboxItemProperties>;
type PropsSP = StylePropertyValues<SpacingProperties>;
type PropsTP = StylePropertyValues<TextProperties>;
type PropsCP = StylePropertyValues<ColorProperties>;
type PropsDP = StylePropertyValues<DisplayProperties>;

type TextProps = PropsSP & PropsTP & PropsFI & PropsCP & PropsDP & {};


const Text: CPolymorphic<'span', TextProps> = <C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, TextProps>) => {
    const { rest, generatedClasses } = useMemo(() => generateClasses(restProps), [restProps]);
    const arrayClasses = [
        className,
        generatedClasses
    ];
    useEffectBase(() => { }, [], generatedClasses);
    const classes = classNames(arrayClasses);

    const Component = as || 'span';

    return (
        <Component
            {...rest}
            className={classes}
            style={style}
        >
            {children}
        </Component>
    );
};



export default Text;