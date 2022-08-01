import { Props } from '@generic/PolymorphicGeneric';
import { IconBasePropertySummary, SystemCIconBaseproperties } from '@generic/systemComponentProperties';
import { useClassGenerator } from '@hooks/useClassGenerator';


export interface IconBaseProps extends SystemCIconBaseproperties { }


export const IconBaseCSS = <C extends React.ElementType>({
    style,
    children,
    className,
    ...restProps
}: Props<C, IconBaseProps>) => {
    const p = "SUI-c-iconBase-css";
    const {
        rest,
        mainClasses: classes
    } = useClassGenerator({
        p,
        deps: [],
        className,
        mainClasses: [],
        props: restProps,
        propertySummary: IconBasePropertySummary
    });

    return (
        <span
            className={classes}
            style={style}
            {...rest}
        >
            {children}
        </span>
    );

};

export default IconBaseCSS;