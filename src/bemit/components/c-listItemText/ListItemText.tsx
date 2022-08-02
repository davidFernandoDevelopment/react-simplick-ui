import classNames from 'classnames';
import React, { useContext } from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { ListItemTextPropertySummary, SystemCListItemTextProperties } from '@generic/systemComponentProperties';

import Text from '../c-text/Text';
import { ListContext } from '../c-list/List';





type ListItemTextProps =
    & SystemCListItemTextProperties
    & {};

const ListItemText: CPolymorphicRef<'div', ListItemTextProps> = React.forwardRef(function ListItemText<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    disableCText = false,
    primary: primaryProps,
    secondary: secondaryProps,
    ...restProps
}: PropsRef<C, ListItemTextProps>, ref?: PolymorphicRef<C>) {

    const { dense } = useContext(ListContext);
    let primary = primaryProps || children;
    let secondary = secondaryProps;
    const {
        mainClasses: classes
    } = useClassGenerator({
        props: restProps,
        propertySummary: ListItemTextPropertySummary,
        mainClasses: [
            'SUI-c-listItemText',
            { 'SUI-c-listItemText--multiline': !!primary && !!secondary }
        ]
    });
    const Component = as || 'div';

    if (primary && typeof primary === 'string' && !disableCText) {
        primary = (
            <Text
                display='block'
                variant={!dense ? 'normal' : 'small'}
                color='primary-main'
            >
                {primary}
            </Text>
        );
    }
    if (secondary && typeof secondary === 'string' && !disableCText) {
        secondary = (
            <Text
                display='block'
                variant='small'
                color='secondary-dark'
            >
                {secondary}
            </Text>
        );
    }



    return (
        <Component
            ref={ref}
            style={style}
            className={classes}
        >
            {primary}
            {secondary}
        </Component>
    );
});


export default ListItemText;