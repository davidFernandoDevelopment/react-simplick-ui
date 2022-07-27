import { Ran } from './utils';

export type Globals = "inherit" | "initial" | "unset";
export type Container = Element | (() => Element | null) | null;
export type Anchor = HTMLElement | ((el?: HTMLElement) => HTMLElement) | null;


type CombinedTypes<T extends string, U extends string> = T extends any ? `${T}-${U}` : never;
type SubTypeColor = 'light' | 'main' | 'dark';
export type ThemeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'title';
export type PalleteColor = 'blue' | 'yellow' | 'red' | 'green' | 'gray';
export type Colors =
    | CombinedTypes<ThemeColor, SubTypeColor>
    | CombinedTypes<'background', 'primary' | 'secondary'>
    | 'white' | 'black' | 'disabled' | 'transparent';


export type UnitValues = 0 | 0.125 | 0.25 | 0.5 | 0.75 | 1.25 | 1.5 | 1.75 | 2.5 | Ran<7>;
export type PercentValues = 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 | '100vh' | '100vw';
export type ShadowValues = 'none' | Ran<7> | 8 | 12 | 16 | 24;
export type Breakpoint = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export const BreakpointsValues: { [key in Breakpoint]: string } = {
    xxs: '0px',
    xs: '350px',
    sm: '576px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    xxl: '1400px',
};
export type ContainerlessBreakpoints = 'xxs' | 'xs';
export type NumColumns = {
    xxs?: Ran<5>;
    xs?: Ran<5>;
    sm?: Ran<7>;
    md?: Ran<7>;
    lg?: Ran<13>;
    xl?: Ran<13>;
    xxl?: Ran<13>;
};
export type PushColumns = {
    xxsPush?: Ran<5> | 'none';
    xsPush?: Ran<5> | 'none';
    smPush?: Ran<7> | 'none';
    mdPush?: Ran<7> | 'none';
    lgPush?: Ran<13> | 'none';
    xlPush?: Ran<13> | 'none';
    xxlPush?: Ran<13> | 'none';
};
export type Sizes = 'small' | 'normal' | 'large' | 'xlarge';

export type VerticalBasiclAlign = 'top' | 'center' | 'bottom';
export type HorizontalBasicAlign = 'left' | 'center' | 'right';
export type Side = 'top' | 'bottom' | 'left' | 'right';
type Align = 'start' | 'center' | 'end';

export type Placement = CombinedTypes<Side, Align>;
export type OriginAlign = {
    horizontal?: HorizontalBasicAlign;
    vertical?: VerticalBasiclAlign;
};

