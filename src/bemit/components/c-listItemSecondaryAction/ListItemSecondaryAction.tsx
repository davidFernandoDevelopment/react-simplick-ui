import React, { useContext } from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { ListItemSecondaryActionPropertySummary, SystemCListItemSecondaryActionProperties } from '@generic/systemComponentProperties';

import { ListContext } from '../c-list/List';


type ListItemSecondaryActionProps =
    & SystemCListItemSecondaryActionProperties
    & {};

const ListItemSecondaryAction: CPolymorphicRef<'div', ListItemSecondaryActionProps> = React.forwardRef(function ListItemSecondaryAction<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: PropsRef<C, ListItemSecondaryActionProps>, ref?: PolymorphicRef<C>) {

    const { alignItems } = useContext(ListContext);
    const {
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: restProps,
        mainClasses: [
            'SUI-c-listItemSecondaryAction',
            { [`SUI-c-listItemSecondaryAction--${alignItems}`]: alignItems }
        ],
        propertySummary: ListItemSecondaryActionPropertySummary
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


export default ListItemSecondaryAction;