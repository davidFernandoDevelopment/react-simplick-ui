import classNames from 'classnames';

import { SVGProps } from '../../../generic/PolymorphicGeneric';
import { generateComponentClasses } from '../../../utilities/classForReact';
import { IconBasePropertySummary, SystemCIconBaseproperties } from '../../../generic/systemComponentProperties';


export interface IconBaseProps extends SystemCIconBaseproperties { }


const IconBase = <C extends SVGSVGElement>({
    style,
    children,
    className,
    ...restProps
}: SVGProps<C, IconBaseProps>) => {

    const { generatedClasses, rest } = generateComponentClasses(
        restProps,
        IconBasePropertySummary
    );
    const arrayClasses = [
        generatedClasses,
        'SUI-c-iconBase',
        className,
    ];
    const classes = classNames(arrayClasses);

    return (
        <svg
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            className={classes}
            style={style}
            {...rest}
        >
            {children}
        </svg>
    );

};

export default IconBase;