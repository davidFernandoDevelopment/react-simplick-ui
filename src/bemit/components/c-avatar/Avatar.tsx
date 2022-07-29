import React, { useEffect, useRef } from 'react';
import { SystemCAvatarProperties, AvatarProperties, AvatarPropertySummary } from '@generic/systemComponentProperties';
import { useImageStatus } from '@hooks/useImageStatus';
import Notification from '../c-icons/icons/Notification';
import Loader from '../c-icons/icons/Loader';
import { useClassGenerator } from '@hooks/useClassGenerator';
import { CPolymorphic, Props } from '@generic/PolymorphicGeneric';



export type AvatarProps =
    & SystemCAvatarProperties
    & {};

export const Avatar: CPolymorphic<'div', AvatarProps> = <C extends React.ElementType>({
    as,
    src,
    alt,
    style,
    fallback,
    className,
    children: childrenProp,
    ...restProps
}: Props<C, AvatarProps>) => {

    const p = 'c-avatar';
    let children: React.ReactNode = null;
    const [stateImage, image] = useImageStatus(src);
    const containerRef = useRef<HTMLElement | null>(null);

    const hasImg = src;
    const hasImgNotFailing = hasImg && stateImage === 'loaded';

    const {
        rest,
        mainClasses: classes
    } = useClassGenerator({
        p,
        deps: [],
        className,
        props: restProps,
        mainClasses: ['SUI-c-avatar'],
        propertySummary: AvatarPropertySummary,
    });

    useEffect(() => {
        if (hasImgNotFailing) {
            image.classList.add('SUI-c-avatar__img');
            containerRef.current?.appendChild(image);
        }
    }, [hasImgNotFailing, image]);


    if (stateImage === 'loading') {
        children = <Loader />;
    } else if (childrenProp) {
        children = childrenProp;
    } else if (hasImg && alt) {
        children = alt[0].toUpperCase();
    } else {
        children = fallback || <Notification />;
    }


    const Component = as || 'div';

    return (
        <Component
            ref={containerRef}
            style={style}
            className={classes}
            {...rest}
        >
            {hasImgNotFailing ? null : children}
        </Component>
    );
};

export default Avatar;
