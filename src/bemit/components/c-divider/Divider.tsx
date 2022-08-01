import { useMemo } from 'react';

import { DividerPropertySummary, SystemCDividerProperties } from '@generic/systemComponentProperties';
import { generateComponentClasses } from '@utilities/classForReact';
import { CPolymorphic, Props } from '@generic/PolymorphicGeneric';
import classNames from 'classnames';

type DividerProps =
    & SystemCDividerProperties
    & {};

const Divider: CPolymorphic<'hr', DividerProps> = <C extends React.ElementType>({
    as,
    style,
    children,
    className,
    ...restProps
}: Props<C, DividerProps>) => {

    const {
        generatedClasses
    } = useMemo(() =>
        generateComponentClasses(restProps, DividerPropertySummary),
        //eslint-disable-next-line
        []
    );
    const arrayClasses = [
        'SUI-c-divider',
        className,
        generatedClasses,
        { 'has-children': children },
    ];
    const classes = classNames(arrayClasses);


    const Component = children ? as || 'div' : 'hr';

    return (
        <Component
            style={style}
            className={classes}
        >
            {
                children ? (
                    <span className='SUI-c-divider__wrapper'>
                        {children}
                    </span>
                ) : null
            }
        </Component>
    );
};

export default Divider;