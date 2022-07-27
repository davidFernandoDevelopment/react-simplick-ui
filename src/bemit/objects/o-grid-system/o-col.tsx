import React from 'react';
import classNames from 'classnames';


import { generateClasses } from '../../../utilities/classForReact';
import { Props, CPolymorphic } from '../../../generic/PolymorphicGeneric';
import { PushColumns, NumColumns } from '../../../generic/setting';




type OColProps = NumColumns & PushColumns & {
    p?: string;
    cols?: NumColumns & PushColumns;
};

const OCol: CPolymorphic<'div', OColProps> = <C extends React.ElementType>({
    as,
    p,
    xxs: vxxs, xxsPush: vxxsPush,
    xs: vxs, xsPush: vxsPush,
    sm: vsm, smPush: vsmPush,
    md: vmd, mdPush: vmdPush,
    lg: vlg, lgPush: vlgPush,
    xl: vxl, xlPush: vxlPush,
    xxl: vxxl, xxlPush: vxxlPush,
    cols = {},
    style,
    children,
    className,
    ...restProps
}: Props<C, OColProps>) => {

    const {
        xxs, xs, sm, md, lg, xl, xxl,
        xxsPush, xsPush, smPush, mdPush, lgPush, xlPush, xxlPush
    } = cols;

    const { generatedClasses, rest } = generateClasses(restProps);
    const arrayClasses = [
        'SUI-o-col',
        className,
        generatedClasses,
        { [`${p}__col`]: p },
        { [`SUI-o-col-${xxs || vxxs}`]: xxs || vxxs },
        { [`SUI-o-col-push-${xxsPush || vxxsPush}`]: xxsPush || vxxsPush },
        { [`SUI-o-col-xs-${xs || vxs}`]: xs || vxs },
        { [`SUI-o-col-push-xs-${xsPush || vxsPush}`]: xsPush || vxsPush },
        { [`SUI-o-col-sm-${sm || vsm}`]: sm || vsm },
        { [`SUI-o-col-push-sm-${smPush || vsmPush}`]: smPush || vsmPush },
        { [`SUI-o-col-md-${md || vmd}`]: md || vmd },
        { [`SUI-o-col-push-md-${mdPush || vmdPush}`]: mdPush || vmdPush },
        { [`SUI-o-col-lg-${lg || vlg}`]: lg || vlg },
        { [`SUI-o-col-push-lg-${lgPush || vlgPush}`]: lgPush || vlgPush },
        { [`SUI-o-col-xl-${xl || vxl}`]: xl || vxl },
        { [`SUI-o-col-push-xl-${xlPush || vxlPush}`]: xlPush || vxlPush },
        { [`SUI-o-col-xxl-${xxl || vxxl}`]: xxl || vxxl },
        { [`SUI-o-col-push-xxl-${xxlPush || vxxlPush}`]: xxlPush || vxxlPush },
    ];
    const classes = classNames(arrayClasses);
    const Component = as || 'div';

    return (
        <Component style={style} className={classes} {...rest}>
            {children}
        </Component>
    );
};

export default OCol;