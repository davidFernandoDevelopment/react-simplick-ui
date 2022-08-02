import React, { useContext, useMemo } from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { ListItemIconProperties, ListItemIconPropertySummary } from '@generic/systemComponentProperties';

import { ListContext } from '../c-list/List';


type ListItemIconProps =
    & ListItemIconProperties
    & {};

const ListItemIcon: CPolymorphicRef<'div', ListItemIconProps> = React.forwardRef(function ListItemIcon<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, ListItemIconProps>, ref?: PolymorphicRef<C>) {

    const { alignItems } = useContext(ListContext);
    const {
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: restProps,
        propertySummary: ListItemIconPropertySummary,
        mainClasses: [
            'SUI-c-listItemIcon',
            { [`SUI-c-listItemIcon--${alignItems}`]: alignItems }
        ]
    });
    const Component = as || 'div';

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


export default ListItemIcon;