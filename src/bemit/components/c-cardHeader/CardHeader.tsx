import React from 'react';
import classNames from 'classnames';

import { PropsRef, CPolymorphicRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { SystemCCardHeaderProperties, CardHeaderPropertySummary } from '@generic/systemComponentProperties';
import CardHeaderAvatar from './components/CardHeaderAvatar';
import CardHeaderAction from './components/CardHeaderAction';
import CardHeaderContent from './components/CardHeaderContent';
import Text from '../c-text/Text';
import { generateComponentClasses } from '@utilities/classForReact';
import { useMemo } from 'react';

export type CardHeaderProps =
    & SystemCCardHeaderProperties
    & {};


export const CardHeader: CPolymorphicRef<'div', CardHeaderProps> = React.forwardRef(<C extends React.ElementType>({
    as,
    title,
    action,
    avatar,
    subtitle,
    ...restProps
}: PropsRef<C, CardHeaderProps>, ref?: PolymorphicRef<C>) => {

    const { generatedClasses } = useMemo(
        () => generateComponentClasses(restProps, CardHeaderPropertySummary),
        //eslint-disable-next-line
        []
    );
    const arrayClasses = [
        'SUI-c-cardHeader',
        generatedClasses
    ];
    const classes = classNames(arrayClasses);

    const Component = as || 'div';

    return (
        <Component
            ref={ref}
            className={classes}
        >
            {avatar && (
                <CardHeaderAvatar className='SUI-c-cardHeader__avatar'>
                    {avatar}
                </CardHeaderAvatar>
            )}
            <CardHeaderContent className='SUI-c-cardHeader__content'>
                {
                    typeof title === 'string' ?
                        (
                            <Text variant='h5' fontWeight='medium'>
                                {title}
                            </Text>
                        ) :
                        title
                }
                {
                    typeof subtitle === 'string' ?
                        (
                            <Text variant='small' color='secondary-main'>
                                {subtitle}
                            </Text>
                        ) :
                        subtitle
                }
            </CardHeaderContent>
            {action && (
                <CardHeaderAction className='SUI-c-cardHeader__action'>
                    {action}
                </CardHeaderAction>
            )}
        </Component>
    );
});

export default CardHeader;