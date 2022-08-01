import React, { useMemo } from 'react';
import classNames from 'classnames';

import { AvatarGroupPropertySummary, SystemCAvatarGroupProperties } from '@generic/systemComponentProperties';
import { CPolymorphicRef, PropsRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { generateComponentClasses } from '@utilities/classForReact';
import Avatar from '../c-avatar/Avatar';


export type AvatarGroupProps =
    & SystemCAvatarGroupProperties
    & {};

export const AvatarGroup: CPolymorphicRef<'div', AvatarGroupProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    max = 5,
    total,
    style,
    className,
    children: childrenProp,
    ...restProps
}: PropsRef<C, AvatarGroupProps>, ref?: PolymorphicRef<C>) => {

    const {
        rest,
        generatedClasses
    } = useMemo(
        () => generateComponentClasses(restProps, AvatarGroupPropertySummary),
        //eslint-disable-next-line
        []);
    const arrayClasses = [
        'SUI-c-avatarGroup',
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';


    const children = React.Children.toArray(childrenProp).filter((child) => React.isValidElement(child));

    let maxTemp = (max && max < 2) ? 2 : max;
    let totalAvatars = total || children.length;
    if (maxTemp === totalAvatars) maxTemp += 1;
    maxTemp = Math.min(totalAvatars + 1, maxTemp);
    let maxAvatars = Math.min(children.length, maxTemp - 1);
    let extraAvatars = Math.max(totalAvatars - maxTemp, totalAvatars - maxAvatars, 0);


    return (
        <Component
            ref={ref}
            style={style}
            className={classes}
        >
            {
                extraAvatars ? (
                    <Avatar
                        {...rest}
                    >+{extraAvatars}</Avatar>
                ) : null
            }
            {
                children
                    .slice(0, maxAvatars)
                    .reverse()
                    .map((child: any, _) => {
                        return React.cloneElement(
                            child,
                            { ...rest }
                        );
                    })
            }
        </Component>
    );
});

export default AvatarGroup;