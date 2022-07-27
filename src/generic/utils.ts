import { Breakpoint, Globals } from './setting';

type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? Exclude<R[number], 0> : _Range<T, [R['length'], ...R]>;
export type Ran<T extends number> = number extends T ? never : _Range<T, []>;


type AddGlobalProperties<T> = {
    [K in keyof T]: T[K] | Globals
};
type ObjectValuesBreakpoint<T, U extends keyof T> = {
    [bp in Breakpoint]?: U extends keyof T ? T[U] : never;
};
export type ObjectBreakpoint = {
    [bp in Breakpoint]?: any;
};
export type StylePropertyValues<P> = {
    [key in keyof P]?: AddGlobalProperties<P>[key] | ObjectValuesBreakpoint<AddGlobalProperties<P>, key>;
};
export type ComponentPropertyBasic<P> = {
    [key in keyof P]?: P[key];
};
export type ComponentPropertyValues<P> = {
    [key in keyof P]?:
    | P[key]
    | (P[key] extends boolean ?
        P[key] :
        ObjectValuesBreakpoint<P, key>
    );
};


export type ComponentPropertySummary = {
    propertyKeys: any & { lenght?: number; };
    defaultProperties: { [key: string]: any; };
    utilityProperties: any[];
    inheritProperties?: any[];
};