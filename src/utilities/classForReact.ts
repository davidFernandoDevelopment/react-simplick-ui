import { SYSTEM_STYLE_PROPERTY_KEYS } from '../generic/systemStyleProperties';
import { Breakpoint, BreakpointsValues } from '../generic/setting';
import { ComponentPropertySummary, ObjectBreakpoint } from '../generic/utils';
import { createClass, createDeclaration } from './helpersForClass';


const generateDecimal = (val: number) => {
    let newVal: number | string = val;
    if (newVal.toString().includes('.')) {
        const [entero, decimal] = newVal.toString().split('.');
        newVal = `${entero}-${decimal}`;
    }

    return newVal;
};

const belongsToProperties = (key: string, PROPERTIES: any[]): any => PROPERTIES.find(([i]) => i === key);

const generateClassObject = (prefix: string, prop: any): string => {

    let result: any[] = [];
    if (prop && typeof prop == 'object' && Array.isArray(prop)) {
        let style = prop.map(bp => {
            let newSize = bp === 'xxs' ? '' : `-${bp}`;
            return `SUI-${prefix}${newSize}`;
        }).join(' ');
        result = [
            ...result,
            style
        ];
    } else if (prop && typeof prop == 'object') {
        let p = prop as ObjectBreakpoint;

        let keys = Object.keys(p) as Breakpoint[];

        keys.forEach((key: Breakpoint) => {
            if (p[key] !== false) {
                let size = key === 'xxs' ? `` : `-${key}`;
                let val = p[key] && typeof p[key] === 'number' ?
                    `-${generateDecimal(p[key] as unknown as number)}` :
                    (typeof p[key] === 'boolean' ? '' : `-${p[key]}`);
                let style = `SUI-${prefix}${size}${val}`;
                result = [
                    ...result,
                    style
                ];
            }
        });


    } else if (prop !== undefined && prop !== false) {
        let val = typeof prop === 'number' ?
            `-${generateDecimal(prop as unknown as number)}` :
            (typeof prop === 'boolean' ? '' : `-${prop}`);
        let style = `SUI-${prefix}${val}`;

        result = [
            ...result,
            style
        ];
    }
    return result.join(' ');
};


interface ResClasses {
    rest: any;
    restInherit?: any;
    existInTheStyleSystem?: boolean;
    generatedClasses: string;
}

interface Props {
    [key: string]: any;
}


export const generateClasses = (props: Props, PROPERTIES: any[] = SYSTEM_STYLE_PROPERTY_KEYS): ResClasses => {
    let restProps = {};
    let classes = '';
    let existInTheStyleSystem = false;
    for (let key in props) {

        let isProperty = belongsToProperties(key, PROPERTIES);
        if (!!isProperty) {
            classes += `${generateClassObject(isProperty[1], props[isProperty[0]])} `;
            existInTheStyleSystem = true;
        } else if (key === 'sx') {
            classes += generateClassesWithPropSx(props[key]);
        } else {
            restProps = {
                ...restProps,
                [`${key}`]: props[key]
            };
        }
    }

    return {
        rest: restProps,
        existInTheStyleSystem,
        generatedClasses: classes.trim()
    };
};

const generateClassesWithPropSx = (props: Props): string => {
    let classes = '';

    for (let prop in props) {
        let newProp = belongsToProperties(prop, SYSTEM_STYLE_PROPERTY_KEYS);
        if (newProp) {
            let newClasses = generateClassObject(newProp[1], props[newProp[0]]);
            classes += `${newClasses} `;
        } else {
            if (typeof props[prop] !== 'object') {
                const keyDate = Date.now().toString().slice(-6);
                const classAlias = `.sx-${prop}${keyDate}`;
                const declaration = createDeclaration(prop);


                if (typeof props[prop] === 'number') {
                    let decClass = `${declaration}: ${props[prop]}px`;
                    classes += `${classAlias.split('.')[1]} `;
                    createClass(classAlias, decClass);
                }
            } else {
                let classAlias = `.sx-${prop + Date.now().toString()}`;
                let declaration = createDeclaration(prop);

                classes += `${classAlias.split('.')[1]} `;


                (Object.keys(props[prop]) as Breakpoint[]).forEach((bpKey: Breakpoint) => {
                    let bp = BreakpointsValues[bpKey];
                    let decClass = `${declaration}: ${props[prop][bpKey]}px`;

                    createClass(classAlias, decClass, bp);
                });
            }
        }
    }
    return classes;
};


export const generateComponentClasses = (props: Props, componentPropertySummary: ComponentPropertySummary): ResClasses => {
    let classes = '';
    let restProps = {};
    let restInherit = {};

    const { defaultProperties, utilityProperties, propertyKeys, inheritProperties } = componentPropertySummary;
    let inheritProps = inheritProperties || [];
    props = { ...defaultProperties, ...props };

    for (let key in props) {

        let isPropertyComponent = belongsToProperties(key, propertyKeys);
        let isPropertyUtilities = belongsToProperties(key, utilityProperties);

        if (!!isPropertyComponent) {
            classes += `${generateClassObject(isPropertyComponent[1], props[isPropertyComponent[0]])} `;
        }
        else if (!!isPropertyUtilities) {
            classes += `${generateClassObject(isPropertyUtilities[1], props[isPropertyUtilities[0]])} `;
        } else if (key === 'sx') {
            classes += generateClassesWithPropSx(props[key]);
        } else {
            restProps = {
                ...restProps,
                [`${key}`]: props[key]
            };
        }

        if (inheritProps.includes(key)) {
            restInherit = {
                ...restInherit,
                [`${key}`]: props[key]
            };
        }
    };

    return {
        rest: restProps,
        restInherit,
        generatedClasses: classes.trim()
    };
};