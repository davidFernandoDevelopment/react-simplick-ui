import React from 'react';

import { useClassGenerator } from '@hooks/useClassGenerator';
import { CPolymorphicRef, PropsRef, PolymorphicRef } from '@generic/PolymorphicGeneric';
import { LoaderButtonPropertySummary, SystemCLoaderButtonProperties, LoaderButtonProperties } from '@generic/systemComponentProperties';

import Button, { ButtonProps } from '../c-button/Button';
import Loader from '../c-icons/icons/i-loader/Loader';


export type LoaderButtonProps =
    & SystemCLoaderButtonProperties
    & Omit<ButtonProps, keyof LoaderButtonProperties> & {};



export const LoaderButton: CPolymorphicRef<'button', LoaderButtonProps> = React.forwardRef(function LoaderButton<C extends React.ElementType>({
    as,
    children,
    className,
    startIcon,
    endIcon,
    loading = false,
    loadingIndicator = <Loader />,
    loadingPosition = 'center',
    ...restProps
}: PropsRef<C, LoaderButtonProps>, ref?: PolymorphicRef<C>) {

    const {
        rest,
        mainClasses: classes
    } = useClassGenerator({
        className,
        props: { ...restProps, loadingPosition },
        propertySummary: LoaderButtonPropertySummary,
        mainClasses: [
            'SUI-c-loaderButton',
            { 'SUI-c-loaderButton--loading': loading }
        ]
    });


    return (
        <Button
            {...rest}
            as={as}
            ref={ref}
            className={classes}
            startIcon={loading && loadingPosition === 'start' ? loadingIndicator : startIcon}
            endIcon={loading && loadingPosition === 'end' ? loadingIndicator : endIcon}
            disabled={loading}
        >
            {children}
            {
                loadingPosition === 'center' &&
                loadingIndicator &&
                loading &&
                <span className='SUI-c-loaderButton__loader'>
                    {loadingIndicator}
                </span>
            }
        </Button>
    );
});


export default LoaderButton;