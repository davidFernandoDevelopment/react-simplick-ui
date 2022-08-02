import React, { useContext } from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { SystemCListItemButtonProperties, ListItemButtonPropertySummary } from '@generic/systemComponentProperties';

import { ListContext } from '../c-list/List';
import ButtonBase from '../c-buttonBase/ButtonBase';


type ListItemButtonProps =
    & SystemCListItemButtonProperties
    & {};

const ListItemButton: CPolymorphicRef<'div', ListItemButtonProps> = React.forwardRef(function ListItemButton<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    alignItems,
    disablePadding,
    ...restProps
}: PropsRef<C, ListItemButtonProps>, ref?: PolymorphicRef<C>) {

    const { dense } = useContext(ListContext);
    const context = {
        dense,
        alignItems
    };
    const {
        rest,
        restInherit,
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: {
            ...restProps,
            ...(dense && !disablePadding ? { dense } : {}),
            ...(disablePadding ? { disablePadding } : {}),
            ...(alignItems ? { alignItems } : {})
        },
        propertySummary: ListItemButtonPropertySummary,
        mainClasses: ['SUI-c-listItemButton']
    });


    return (
        <ListContext.Provider
            value={context}
        >
            <ButtonBase
                as={as}
                ref={ref}
                style={style}
                className={classes}
                {...rest}
                {...restInherit}
            >
                {children}
            </ButtonBase>
        </ListContext.Provider>
    );
});

export default ListItemButton;