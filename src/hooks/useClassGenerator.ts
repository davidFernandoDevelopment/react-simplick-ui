import { useMemo, useRef } from 'react';
import classNames from 'classnames';
import { generateComponentClasses } from '../utilities/classForReact';
import { ComponentPropertySummary } from '../generic/utils';



interface IProps {
    [key: string]: any;
}

interface IUseClassGenerator {
    p?: string;
    deps: any[];
    props: IProps;
    className?: string;
    propertySummary: ComponentPropertySummary;
    mainClasses?: (string | IProps)[];
}


export const useClassGenerator = ({ p, deps, props, className, propertySummary, mainClasses = [] }: IUseClassGenerator, ...args: (string | IProps)[]) => {
    const {
        rest,
        restInherit,
        generatedClasses
    } = useMemo(() => generateComponentClasses(props, propertySummary),
        //eslint-disable-next-line
        [...deps, propertySummary, props]
    );
    let extraClasses = useRef<string[]>([]);

    const arrayClasses = [
        [...mainClasses],
        { [`${p}`]: p },
        className,
        generatedClasses
    ];
    const classes = classNames(arrayClasses);
    extraClasses.current = args.map((arr) => classNames(arr));


    return {
        rest,
        restInherit,
        mainClasses: classes,
        extraClasses: extraClasses.current
    };

};