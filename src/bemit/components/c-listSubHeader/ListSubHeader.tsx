import React from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { ListSubHeaderPropertySummary, SystemCListSubHeaderProperties } from '@generic/systemComponentProperties';



const defaultType: React.ElementType = 'li';
type ListSubHeaderProps =
    & SystemCListSubHeaderProperties
    & {};

const ListSubHeader: CPolymorphicRef<typeof defaultType, ListSubHeaderProps> = React.forwardRef(function ListSubHeader<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    disableSticky,
    disableGutters,
    ...restProps
}: PropsRef<C, ListSubHeaderProps>, ref?: PolymorphicRef<C>) {

    const {
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: restProps,
        propertySummary: ListSubHeaderPropertySummary,
        mainClasses: [
            'SUI-c-listSubHeader',
            { 'SUI-c-listSubHeader--disableGutters': disableGutters },
            { 'SUI-c-listSubHeader--disableSticky': disableSticky }
        ]
    });
    const Component = as || defaultType;

    return (
        <Component
            ref={ref}
            style={style}
            className={classes}
        >
            {children}
        </Component>
    );
});


export default ListSubHeader;