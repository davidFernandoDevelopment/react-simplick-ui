import React, { createContext, useMemo } from 'react';

import { CPolymorphicRef, PolymorphicRef, PropsRef } from '@generic/PolymorphicGeneric';
import { SystemCListProperties, ListPropertySummary } from '@generic/systemComponentProperties';

import { useClassGenerator } from '@hooks/useClassGenerator';

interface IList {
    dense?: boolean;
    alignItems?: 'start' | 'center';
}
export const ListContext = createContext<IList>({} as IList);


export type ListProps =
    & SystemCListProperties
    & {};

const List: CPolymorphicRef<'ul', ListProps> = React.forwardRef(function List<C extends React.ElementType>({
    as,
    style,
    children,
    className,
    subheader,
    dense = false,
    ...restProps
}: PropsRef<C, ListProps>, ref?: PolymorphicRef<C>) {

    const context = useMemo(() => ({ dense }), [dense]);
    const {
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: {
            ...restProps,
            ...(dense ? { dense } : {})
        },
        mainClasses: [
            'SUI-c-list',
            { 'SUI-c-list--subheader': subheader },
        ],
        propertySummary: ListPropertySummary,
    });

    const Component = as || 'ul';


    return (
        <ListContext.Provider value={context}>
            <Component
                ref={ref}
                style={style}
                className={classes}
            >
                {subheader}
                {children}
            </Component>
        </ListContext.Provider>
    );
});

export default List;