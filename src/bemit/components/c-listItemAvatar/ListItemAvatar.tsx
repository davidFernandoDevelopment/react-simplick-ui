import React, { useContext } from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { ListItemAvatarProperties, ListItemAvatarPropertySummary } from '@generic/systemComponentProperties';

import { ListContext } from '../c-list/List';


type ListItemAvatarProps =
    & ListItemAvatarProperties
    & {};

const ListItemAvatar: CPolymorphicRef<'div', ListItemAvatarProps> = React.forwardRef(function ListItemAvatar<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, ListItemAvatarProps>, ref?: PolymorphicRef<C>) {

    const { alignItems } = useContext(ListContext);
    const {
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: restProps,
        propertySummary: ListItemAvatarPropertySummary,
        mainClasses: [
            'SUI-c-listItemAvatar',
            { [`SUI-c-listItemAvatar--${alignItems}`]: alignItems }
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


export default ListItemAvatar;