import React, { useMemo } from 'react';

import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { SystemCListItemProperties, ListItemPropertySummary } from '@generic/systemComponentProperties';
import { generateComponentClasses } from '@utilities/classForReact';
import classNames from 'classnames';
import { useContext } from 'react';
import { ListContext } from '../c-list/List';
import ListItemSecondaryAction from '../c-listItemSecondaryAction/ListItemSecondaryAction';



export type ListItemProps =
    & SystemCListItemProperties
    & {};

export const ListItem: CPolymorphicRef<'li', ListItemProps> = React.forwardRef(function ListItem<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    alignItems,
    disablePadding,
    secondaryAction,
    ...restProps
}: PropsRef<C, ListItemProps>, ref?: PolymorphicRef<C>) {

    const { dense } = useContext(ListContext);
    const context = {
        dense,
        alignItems
    };

    const {
        generatedClasses
    } = useMemo(
        () => generateComponentClasses({
            ...restProps,
            ...(dense && !disablePadding ? { dense } : {}),
            ...(disablePadding ? { disablePadding } : {}),
            ...(alignItems ? { alignItems } : {})
        }, ListItemPropertySummary),
        //eslint-disable-next-line
        []
    );
    const arrayClasses = [
        'SUI-c-listItem',
        className,
        generatedClasses,
        { 'SUI-c-listItem--secondaryAction': secondaryAction }
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'li';

    return (
        <ListContext.Provider
            value={context}
        >
            <Component
                ref={ref}
                style={style}
                className={classes}
            >
                {children}
                {
                    secondaryAction && (
                        <ListItemSecondaryAction>
                            {secondaryAction}
                        </ListItemSecondaryAction>
                    )
                }
            </Component>
        </ListContext.Provider>
    );
});

export default ListItem;