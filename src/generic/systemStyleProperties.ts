import { Colors, PalleteColor, PercentValues, UnitValues, ThemeColor, ContainerlessBreakpoints, Breakpoint, ShadowValues } from './setting';
import { StylePropertyValues, Ran } from './utils';

const CONTAINER = [['maxWidthContainer', 'o-container']];
export type ContainerProperties = {
    maxWidthContainer?: Exclude<Breakpoint, ContainerlessBreakpoints>[];
};



const GRID_SISTEM = [['spacing', 'o-g'], ['rowSpacing', 'o-gx'], ['columnSpacing', 'o-gy']] as const;
export type GridSystem = {
    [key in typeof GRID_SISTEM[number][0]]: UnitValues
};


const BORDER_SHORTHAND = [['border', 'u-border'], ['borderTop', 'u-border-top'], ['borderBottom', 'u-border-bottom'], ['borderLeft', 'u-border-left'], ['borderRight', 'u-border-right']] as const;
const BORDER_WIDTH = [['borderWidth', 'u-border-width'], ['borderTopWidth', 'u-border-top-width'], ['borderBottomWidth', 'u-border-bottom-width'], ['borderLeftWidth', 'u-border-left-width'], ['borderRightWidth', 'u-border-right-width']] as const;
const BORDER_STYLE = [['borderStyle', 'u-border-style'], ['borderTopStyle', 'u-border-top-style'], ['borderBottomStyle', 'u-border-bottom-style'], ['borderLeftStyle', 'u-border-left-style'], ['borderRightStyle', 'u-border-right-style']] as const;
const BORDER_RADIUS = [['borderRadius', 'u-border-radius'], ['borderRadiusTL', 'u-border-tl-radius'], ['borderRadiusTR', 'u-border-tr-radius'], ['borderRadiusBL', 'u-border-bl-radius'], ['borderRadiusBR', 'u-border-br-radius']] as const;
export const BORDER = [...BORDER_SHORTHAND, ...BORDER_STYLE, ...BORDER_WIDTH, ...BORDER_RADIUS];
type BorderShorthandProperties = {
    [key in typeof BORDER_SHORTHAND[number][0]]: true | 'none';
};
type BorderWidthProperties = {
    [key in typeof BORDER_WIDTH[number][0]]: UnitValues;
};
type BorderStyleProperties = {
    [key in typeof BORDER_STYLE[number][0]]: "dashed" | "dotted" | "double" | "groove" | "hidden";
};
type BorderRadiusProperties = {
    [key in typeof BORDER_RADIUS[number][0]]: UnitValues | 50;
};
export type BorderProperties = Partial<BorderShorthandProperties & BorderWidthProperties & BorderStyleProperties & BorderRadiusProperties>;
export type SystemSBorderProperties = StylePropertyValues<BorderProperties>;


export const SHADOW = [['shadow', 'u-shadow']] as const;
export type ShadowProperties = {
    shadow: ShadowValues;
};
export type SystemSShadowProperties = StylePropertyValues<ShadowProperties>;



export const COLOR = [['color', 'u-text'], ['bgColor', 'u-bg'], ['borderColor', 'u-border'], ['pallete', 'u-pallete'], ['themeColor', 'u-theme-color']] as const;
type ColorPropertyKeys = typeof COLOR[number][0];
export type ColorProperties = Partial<{
    [key in ColorPropertyKeys]: key extends 'pallete' ?
    PalleteColor :
    (
        key extends 'themeColor' ?
        ThemeColor :
        Colors
    );
}>;
export type SystemColorProperties = StylePropertyValues<ColorProperties>;


const SPACING = [['marginTop', 'u-mt'], ['marginRight', 'u-mr'], ['marginBottom', 'u-mb'], ['marginLeft', 'u-ml'], ['pxy', 'u-pxy'], ['paddingTop', 'u-pt'], ['paddingRigth', 'u-pr'], ['paddingBottom', 'u-pb'], ['paddingLeft', 'u-pl'], ['px', 'u-px'], ['py', 'u-py']] as const;
type SpacingPropertyKeys = typeof SPACING[number][0];
export type SpacingProperties = {
    [key in SpacingPropertyKeys]: UnitValues;
};


const SIZING = [['w', 'u-w'], ['h', 'u-h'], ['mw', 'u-mw'], ['mh', 'u-mh']] as const;
type SizingPropertyKeys = typeof SIZING[number][0];
export type SizingWithoutClass = {
    maxWidth: number;
    minWidth: number;
};
export type SizingWithClass = {
    [key in SizingPropertyKeys]: PercentValues;
};
export type SizingProperties = SizingWithoutClass & SizingWithClass;


export const FLEXBOX_CONTAINER = [['typeDisplay', 'u-d'], ['flexDirection', 'u-fd'], ['justifyContent', 'u-jc'], ['alignItems', 'u-ai'], ['alignContent', 'u-ac'], ['flexWrap', 'u-fwrap'], ['flexGap', 'u-fg']];
export type FlexboxContainerProperties = {
    typeDisplay: 'flex' | 'inline-flex';
    flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    justifyContent: 'start' | 'center' | 'end' | 'between' | 'around' | 'distribute';
    alignItems: 'start' | 'end' | 'center' | 'baseline';
    alignContent: 'start' | 'end' | 'center' | 'baseline';
    flexWrap: 'wrap' | 'no-wrap' | 'wrap-reverse';
    flexGap: UnitValues;
};
export type SystemSFlexboxContainerProperties = StylePropertyValues<FlexboxContainerProperties>;


export const FLEXBOX_ITEM = [['alignSelf', 'u-as'], ['order', 'u-order'], ['flexShrink', 'u-fshrink'], ['flexGrow', 'u-fgrow'], ['flexBasis', 'u-fbasis']];
export type FlexboxItemProperties = {
    alignSelf: 'start' | 'end' | 'center',
    order: 0 | Ran<13>,
    flexShrink: 0 | Ran<13>,
    flexGrow: 0 | Ran<13>;
    flexBasis: 'auto' | 'max-content' | 'min-content' | string;
};
export type SystemSFlexboxItemProperties = StylePropertyValues<FlexboxItemProperties>;


export const DISPLAY = [['display', 'u-d'], ['position', 'u-position'], ['overflow', 'u-overflow']];
export type DisplayProperties = {
    display: 'none' | 'block' | 'inline' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid';
    position: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    overflow: 'hidden' | 'scroll' | 'auto' | 'visible';
};
export type SystemSDisplayProperties = StylePropertyValues<DisplayProperties>;



export const TEXT = [['variant', 'o'], ['textAlign', 'u-ta'], ['whiteSpace', 'u-ws'], ['textTransform', 'u-tt'], ['textDecoration', 'u-td'], ['fontSize', 'u-fs'], ['fontWeight', 'u-fw']];
export type TextProperties = {
    variant: 'big-title' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'smaller' | 'small' | 'normal' | 'big' | 'bigger' | 'biggest';
    textAlign: 'left' | 'center' | 'right' | 'justify';
    whiteSpace: 'wrap' | 'nowrap';
    textTransform: 'uppercase' | 'lowercase' | 'capitalize';
    textDecoration: 'underline' | 'middle' | 'none';
    fontSize: 'h1' | 'h2' | 'h3' | 'normal' | 'small' | 'smaller' | UnitValues;
    fontWeight: 'normal' | 'medium' | 'semi-bold' | 'bold';
};
export type SystemSTextProperties = StylePropertyValues<TextProperties>;


const BLOCK_ALIGMENTS = [['alignTo', 'u-to'], ['alignBlockTo', 'u-block']];
export type BlockAligmentsProperties = {
    alignTo: 'left' | 'center' | 'right';
    alignBlockTo: 'left' | 'center' | 'right';
};


export type SystemStyleProperties =
    & StylePropertyValues<BorderProperties>
    & StylePropertyValues<ShadowProperties>
    & StylePropertyValues<ColorProperties>
    & StylePropertyValues<SpacingProperties>
    & StylePropertyValues<SizingProperties>
    & StylePropertyValues<FlexboxContainerProperties>
    & StylePropertyValues<FlexboxItemProperties>
    & StylePropertyValues<DisplayProperties>
    & StylePropertyValues<TextProperties>
    & StylePropertyValues<BlockAligmentsProperties>;

export const SYSTEM_STYLE_PROPERTY_KEYS = [
    ...CONTAINER,
    ...GRID_SISTEM,
    ...BORDER,
    ...SHADOW,
    ...COLOR,
    ...SPACING,
    ...SIZING,
    ...FLEXBOX_CONTAINER,
    ...FLEXBOX_ITEM,
    ...DISPLAY,
    ...TEXT,
    ...BLOCK_ALIGMENTS
];
