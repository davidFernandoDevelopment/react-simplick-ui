import { SVGProps } from '@generic/PolymorphicGeneric';
import { IconBasePropertySummary, SystemCIconBaseproperties } from '@generic/systemComponentProperties';
import { useClassGenerator } from '@hooks/useClassGenerator';


export interface IconBaseProps extends SystemCIconBaseproperties { }


const IconBase = <C extends SVGSVGElement>({
    style,
    children,
    className,
    ...restProps
}: SVGProps<C, IconBaseProps>) => {
    const p = "SUI-c-iconBase-svg";
    const {
        rest,
        mainClasses: classes
    } = useClassGenerator({
        p,
        deps: [],
        className,
        props: restProps,
        propertySummary: IconBasePropertySummary,
        mainClasses: []
    });

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