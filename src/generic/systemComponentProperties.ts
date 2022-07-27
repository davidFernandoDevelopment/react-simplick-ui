import { Anchor, Breakpoint, ContainerlessBreakpoints, OriginAlign, Placement, ShadowValues, Sizes, ThemeColor, UnitValues } from './setting';
import { BORDER, COLOR, DISPLAY, FLEXBOX_CONTAINER, FLEXBOX_ITEM, SystemStyleProperties, TEXT } from './systemStyleProperties';
import { ComponentPropertyBasic, ComponentPropertySummary, ComponentPropertyValues } from './utils';

/* IMPORTANTE !!!! */
/* SOLO SE COLOCAN PROPIEDADES DEL COMPONENTE !!! */
/* EN CASO QUE UN COMPONENTE REQUIERA PROPIEDADES DE OTRO COMPONENTE SE DEFINIRA EN EL MISMO COMPONENTE !!! */

export type TouchRippleProperties = {
    centerRipple: boolean;
};
export type SystemCTouchRippleProperties = ComponentPropertyBasic<TouchRippleProperties>;



const BUTTON_BASE = [['disabled', 'c-buttonBase--disabled']];
type ButtonBasePropertyBasic = {
    disabled: boolean;
    disableRipple: boolean;
};
type ButtonBasePropertyValues = {};
const BUTTON_BASE_UTILITIES: any[] = [
    // ...DISPLAY
];
const BUTTON_BASE_INHERIT = ['disabled'];
export type ButtonBaseProperties = ButtonBasePropertyValues & ButtonBasePropertyBasic;
export type SystemCButtonBaseProperties = ComponentPropertyValues<ButtonBasePropertyValues> & ComponentPropertyBasic<ButtonBasePropertyBasic>;
export const ButtonBasePropertySummary: ComponentPropertySummary = {
    defaultProperties: {},
    propertyKeys: BUTTON_BASE,
    utilityProperties: BUTTON_BASE_UTILITIES,
    inheritProperties: BUTTON_BASE_INHERIT
};



const ICON_BASE = [['size', 'c-iconBase--size']] as const;
type IconBasePropertyValues = {
    rotate: boolean;
    size: Sizes | 'xsmall';
};
const ICON_BASE_DEFAULT: Partial<IconBaseProperties> = {
    size: 'normal'
};
const ICON_BASE_UTILITIES: any[] = [];
export type IconBaseProperties = IconBasePropertyValues;
export type SystemCIconBaseproperties = ComponentPropertyValues<IconBasePropertyValues>;
export const IconBasePropertySummary: ComponentPropertySummary = {
    propertyKeys: ICON_BASE,
    defaultProperties: ICON_BASE_DEFAULT,
    utilityProperties: ICON_BASE_UTILITIES
};



const BUTTON = [['size', 'c-button--size'], ['variant', 'c-button--variant'], ['fullWidth', 'c-button--fullWidth'], ['disableElevation', 'c-button--disableElevation'], ['disabled', 'c-button--disabled']] as const;
type ButtonPropertyBasic = {
    endIcon: React.ReactNode;
    startIcon: React.ReactNode;
    variant: 'default' | 'ghost' | 'link' | 'light';
    disabled: boolean;
    fullWidth: boolean;
    disableElevation: boolean;
    themeColor: ThemeColor;
};
type ButtonPropertyValues = {
    /**
     * Tamaño del botón
     */
    size: Sizes,
};
const BUTTON_DEFAULTS: Partial<ButtonProperties> = {
    variant: 'default',
    size: 'normal',
    themeColor: 'primary'
};
const BUTTON_UTILITIES: any[] = [...COLOR];
const BUTTON_INHERIT = ['disabled'];
export type ButtonProperties = ButtonPropertyBasic & ButtonPropertyValues;
export type SystemCButtonProperties = ComponentPropertyBasic<ButtonPropertyBasic> & ComponentPropertyValues<ButtonPropertyValues>;
export const ButtonPropertySummary: ComponentPropertySummary = {
    propertyKeys: BUTTON,
    defaultProperties: BUTTON_DEFAULTS,
    utilityProperties: BUTTON_UTILITIES,
    inheritProperties: BUTTON_INHERIT
};



const LOADER_BUTTON = [['loading', 'c-loaderButton--loading'], ['loadingPosition', 'c-loaderButton--position']];
type LoaderButtonPropertyBasic = {
    loading: boolean;
    loadingIndicator: React.ReactNode;
    loadingPosition: 'start' | 'center' | 'end';
};
type LoaderButtonPropertyValues = {};
const LOADER_BUTTON_DEAULTS: Partial<LoaderButtonProperties> = {};
const LOADER_BUTTON_UTILITIES: any[] = [];
export type LoaderButtonProperties = LoaderButtonPropertyBasic & LoaderButtonPropertyValues;
export type SystemCLoaderButtonProperties = ComponentPropertyBasic<LoaderButtonPropertyBasic> & ComponentPropertyValues<LoaderButtonPropertyValues>;
export const LoaderButtonPropertySummary: ComponentPropertySummary = {
    propertyKeys: LOADER_BUTTON,
    defaultProperties: LOADER_BUTTON_DEAULTS,
    utilityProperties: LOADER_BUTTON_UTILITIES
};



const ICON_BUTTON = [['size', 'c-iconButton--size'], ['variant', 'c-iconButton--variant'], ['disabled', 'c-iconButton--disabled']] as const;
type IconButtonBasic = {
    disabled: boolean;
    edge: 'start' | 'end';
    variant: 'circle' | 'square';
    /**
     * Colores del componente, puede cambiar la sombra con la propiedad sx={{pallete}}
     */
    themeColor: ThemeColor;
};
type IconButtonPropertyValues = {
    /**
     * Tamaño del componente, Sizes = "small" | "normal" | "large" | "xlarge". Admite breakpoints
     */
    size: Sizes,
};
const ICON_BUTTON_DEFAULTS: Partial<IconButtonProperties> = {
    variant: 'circle',
    size: 'normal',
    themeColor: 'primary'
};
const ICON_BUTTON_UTILITIES = [...COLOR];
const ICON_BUTTON_INHERIT = ['disabled'];
export type IconButtonProperties = IconButtonPropertyValues & IconButtonBasic;
export type SystemCIconButtonProperties = ComponentPropertyValues<IconButtonPropertyValues> & ComponentPropertyBasic<IconButtonBasic>;
export const IconButtonPropertySummary: ComponentPropertySummary = {
    propertyKeys: ICON_BUTTON,
    defaultProperties: ICON_BUTTON_DEFAULTS,
    utilityProperties: ICON_BUTTON_UTILITIES,
    inheritProperties: ICON_BUTTON_INHERIT
};



const PAPER = [['square', 'c-paper--square'], ['variant', 'c-paper--variant'], ['elevation', 'c-paper--elevation']] as const;
type PaperPropertyBasic = {
    variant: 'outline' | 'elevation';
    square: boolean;
    elevation: ShadowValues;
};
type PaperPropertyValues = {};
const PAPER_DEFAULTS: Partial<PaperProperties> = {
    variant: 'elevation',
};
const PAPER_UTILITIES = [...BORDER, ...COLOR];
export type PaperProperties = PaperPropertyValues & PaperPropertyBasic;
export type SystemCPaperProperties = ComponentPropertyValues<PaperPropertyValues> & ComponentPropertyBasic<PaperPropertyBasic>;
export const PaperPropertySummary: ComponentPropertySummary = {
    propertyKeys: PAPER,
    utilityProperties: PAPER_UTILITIES,
    defaultProperties: PAPER_DEFAULTS
};



const CARD = [['spacing', 'c-card--spacing']] as const;
type CardPropertyBasic = {
    spacing: UnitValues;
};
type CardPropertyValues = {};
const CARD_DEFAULTS: CardProperties = {
    spacing: 0
};
const CARD_UTILITIES = [...FLEXBOX_CONTAINER];
export type CardProperties = CardPropertyValues & CardPropertyBasic;
export type SystemCCardProperties = ComponentPropertyValues<CardPropertyValues> & ComponentPropertyBasic<CardPropertyBasic>;
export const CardPropertySummary: ComponentPropertySummary = {
    propertyKeys: CARD,
    defaultProperties: CARD_DEFAULTS,
    utilityProperties: CARD_UTILITIES
};



const CARD_CONTENT = [['spacing', 'c-cardContent--spacing']] as const;
type CardContentPropertyBasic = {
    spacing: UnitValues;
};
type CardContentPropertyValues = {};
const CARD_CONTENT_DEFAULTS: Partial<CardContentProperties> = {
    spacing: 2
};
const CARD_CONTENT_UTILITIES = [...TEXT, ...FLEXBOX_ITEM, ...FLEXBOX_CONTAINER];
export type CardContentProperties = CardContentPropertyValues & CardContentPropertyBasic;
export type SystemCCardContentProperties = ComponentPropertyValues<CardContentPropertyValues> & ComponentPropertyBasic<CardContentPropertyBasic>;
export const CardContentPropertySummary: ComponentPropertySummary = {
    propertyKeys: CARD_CONTENT,
    defaultProperties: CARD_CONTENT_DEFAULTS,
    utilityProperties: CARD_CONTENT_UTILITIES
};



const CARD_ACTIONS = [['spacing', 'c-cardActions--spacing'], ['gap', 'c-dialogActions--gap'], ['disableGap', 'c-cardActions--disableGap']] as const;
type CardActionsPropertyBasic = {
    disableGap: boolean;
    spacing: UnitValues;
    gap: UnitValues;
};
type CardActionsPropertyValues = {};
const CARD_ACTIONS_DEFAULTS: Partial<CardActionsProperties> = {
    gap: 2,
    spacing: 1,
    disableGap: false
};
const CARD_ACTIONS_UTILITIES = [...FLEXBOX_CONTAINER];
export type CardActionsProperties = CardActionsPropertyValues & CardActionsPropertyBasic;
export type SystemCCardActionsProperties = ComponentPropertyValues<CardActionsPropertyValues> & ComponentPropertyBasic<CardActionsPropertyBasic>;
export const CardActionsPropertySummary: ComponentPropertySummary = {
    propertyKeys: CARD_ACTIONS,
    defaultProperties: CARD_ACTIONS_DEFAULTS,
    utilityProperties: CARD_ACTIONS_UTILITIES
};



const CARD_ACTION_AREA = [] as const;
const CARD_ACTION_AREA_DEFAULTS: CardActionAreaProperties = {};
const CARD_ACTION_AREA_UTILITIES = [...FLEXBOX_CONTAINER];
const CARD_ACTION_AREA_INHERIT = ['disabled'];
type CardActionAreaPropertyValues = {};
export type CardActionAreaProperties = CardActionAreaPropertyValues;
export type SystemCCardActionAreaProperties = ComponentPropertyValues<CardActionAreaPropertyValues>;
export const CardActionAreaPropertySummary: ComponentPropertySummary = {
    propertyKeys: CARD_ACTION_AREA,
    defaultProperties: CARD_ACTION_AREA_DEFAULTS,
    utilityProperties: CARD_ACTION_AREA_UTILITIES,
    inheritProperties: CARD_ACTION_AREA_INHERIT
};



const CARD_MEDIA = [['variant', 'c-cardMedia--variant']] as const;
const CARD_MEDIA_DEFAULTS: Partial<CardMediaProperties> = {
    variant: 'ratio-9-16'
};
const CARD_MEDIA_UTILITIES = [...BORDER];
type CardMediaPropertyValues = {
    variant: 'ratio-9-16' | 'default';
};
export type CardMediaProperties = CardMediaPropertyValues;
export type SystemCCardMediaProperties = ComponentPropertyValues<CardMediaPropertyValues>;
export const CardMediaPropertySummary: ComponentPropertySummary = {
    propertyKeys: CARD_MEDIA,
    defaultProperties: CARD_MEDIA_DEFAULTS,
    utilityProperties: CARD_MEDIA_UTILITIES
};



const CARD_HEADER = [['spacing', 'c-cardHeader--spacing'], ['gap', 'c-cardHeader--gap']] as const;
type CardHeaderPropertyBasic = {
    spacing: UnitValues;
    gap: UnitValues;
    avatar: React.ReactNode;
    action: React.ReactNode;
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
};
type CardHeaderPropertyValues = {};
const CARD_HEADER_DEFAULTS: Partial<CardHeaderProperties> = {
    spacing: 2,
    gap: 2
};
const CARD_HEADER_UTILITIES: any[] = [];
export type CardHeaderProperties = CardHeaderPropertyBasic & CardHeaderPropertyValues;
export type SystemCCardHeaderProperties = ComponentPropertyValues<CardHeaderPropertyValues> & ComponentPropertyBasic<CardHeaderPropertyBasic>;
export const CardHeaderPropertySummary: ComponentPropertySummary = {
    propertyKeys: CARD_HEADER,
    defaultProperties: CARD_HEADER_DEFAULTS,
    utilityProperties: CARD_HEADER_UTILITIES
};



const AVATAR = [['size', 'c-avatar--size'], ['variant', 'c-avatar--variant']] as const;
type AvatarPropertyBasic = {
    src: string;
    alt: string;
    fallback: React.ReactNode;
    variant: 'circle' | 'square';
};
type AvatarPropertyValues = {
    size: Sizes;
};
const AVATAR_DEFAULTS: Partial<AvatarProperties> = {
    size: 'normal',
    variant: 'circle'
};
const AVATAR_UTILITIES = [...COLOR];
export type AvatarProperties = AvatarPropertyBasic & AvatarPropertyValues;
export type SystemCAvatarProperties = ComponentPropertyValues<AvatarPropertyValues> & ComponentPropertyBasic<AvatarPropertyBasic>;
export const AvatarPropertySummary: ComponentPropertySummary = {
    defaultProperties: AVATAR_DEFAULTS,
    propertyKeys: AVATAR,
    utilityProperties: AVATAR_UTILITIES
};



const AVATAR_GROUP = [['spacing', 'c-avatarGroup--spacing']] as const;
type AvatarGroupPropertyValues = {};
type AvatarGroupPropertyBasic = {
    spacing: UnitValues;
    max: number;
    total: number;
    size: Sizes;
    variant: 'circle' | 'square';
};
const AVATAR_GROUP_DEFAULTS: Partial<AvatarGroupProperties> = {
    spacing: 1,
    size: 'normal',
    variant: 'circle'
};
const AVATAR_GROUP_UTILITIES: any[] = [];
export type AvatarGroupProperties = AvatarGroupPropertyBasic & AvatarGroupPropertyValues;
export type SystemCAvatarGroupProperties = ComponentPropertyBasic<AvatarGroupPropertyBasic> & ComponentPropertyValues<AvatarGroupPropertyValues>;
export const AvatarGroupPropertySummary: ComponentPropertySummary = {
    propertyKeys: AVATAR_GROUP,
    defaultProperties: AVATAR_GROUP_DEFAULTS,
    utilityProperties: AVATAR_GROUP_UTILITIES
};



const BACK_DROP = [['open', 'c-backDrop--open'], ['invisible', 'c-backDrop--invisible']] as const;
type BackDropPropertiesValues = {};
type BackDropPropertiesBasic = {
    open: boolean;
    invisible: boolean;
};
const BACK_DROP_DEFAULTS: Partial<BackDropProperties> = {
    open: false,
    invisible: false
};
const BACK_DROP_UTILITIES: any[] = [];
export type BackDropProperties = BackDropPropertiesBasic & BackDropPropertiesValues;
export type SystemCBackDropProperties = ComponentPropertyBasic<BackDropPropertiesBasic> & ComponentPropertyValues<BackDropPropertiesValues>;
export const BackDropPropertySummary: ComponentPropertySummary = {
    propertyKeys: BACK_DROP,
    defaultProperties: BACK_DROP_DEFAULTS,
    utilityProperties: BACK_DROP_UTILITIES
};



const MODAL = [] as const;
type ModalPropertiesValues = {
};
type ModalPropertiesBasic = {
    open: boolean;
    hideBackdrop: boolean;
    staticBackdrop: boolean;
    disableScrollLock: boolean;
    disableAnimationContent: boolean;
    keepMounted: boolean;
    onClose: {
        bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
    }['bivarianceHack'];
};
const MODAL_DEFAULTS: Partial<ModalProperties> = {

};
const MODAL_UTILITIES: any[] = [];
export type ModalProperties = ModalPropertiesBasic & ModalPropertiesValues;
export type SystemCModalProperties = ComponentPropertyBasic<ModalPropertiesBasic> & ComponentPropertyValues<ModalPropertiesValues>;
export const ModalPropertySummary: ComponentPropertySummary = {
    propertyKeys: MODAL,
    defaultProperties: MODAL_DEFAULTS,
    utilityProperties: MODAL_UTILITIES
};



const DIALOG = [] as const;
type DialogPropertiesValues = {};
type DialogPropertiesBasic = {
    maxWidth?: Exclude<Breakpoint, ContainerlessBreakpoints>[] | undefined;
};
const DIALOG_DEFAULTS: Partial<DialogProperties> = {};
const DIALOG_UTILITIES: any[] = [];
export type DialogProperties = DialogPropertiesValues & DialogPropertiesBasic;
export type SystemCDialogProperties = ComponentPropertyBasic<DialogPropertiesBasic> & ComponentPropertyValues<DialogPropertiesValues>;
export const DialogPropertySummary: ComponentPropertySummary = {
    propertyKeys: DIALOG,
    defaultProperties: DIALOG_DEFAULTS,
    utilityProperties: DIALOG_UTILITIES
};



const DIALOG_ACTIONS = [['spacing', 'c-dialogActions--spacing'], ['gap', 'c-dialogActions--gap']] as const;
type DialogActionsPropertiesValues = {};
type DialogActionsPropertiesBasic = {
    spacing: UnitValues;
    gap: UnitValues;
};
const DIALOG_ACTIONS_DEFAULTS: Partial<DialogActionsProperties> = {
    gap: 1,
    spacing: 1
};
const DIALOG_ACTIONS_UTILITIES: any[] = [...FLEXBOX_CONTAINER];
export type DialogActionsProperties = DialogActionsPropertiesValues & DialogActionsPropertiesBasic;
export type SystemCDialogActionsProperties = ComponentPropertyBasic<DialogActionsPropertiesBasic> & ComponentPropertyValues<DialogActionsPropertiesValues>;
export const DialogActionsPropertySummary: ComponentPropertySummary = {
    propertyKeys: DIALOG_ACTIONS,
    defaultProperties: DIALOG_ACTIONS_DEFAULTS,
    utilityProperties: DIALOG_ACTIONS_UTILITIES
};



const DIALOG_CONTENT = [['spacing', 'c-dialogContent--spacing'], ['gap', 'c-dialogContent--gap']] as const;
type DialogContentPropertiesValues = {};
type DialogContentPropertiesBasic = {
    gap: UnitValues;
    divider: boolean;
    spacing: UnitValues;
};
const DIALOG_CONTENT_DEFAULTS: Partial<DialogContentProperties> = {
    gap: 1,
    spacing: 1
};
const DIALOG_CONTENT_UTILITIES: any[] = [...FLEXBOX_CONTAINER];
export type DialogContentProperties = DialogContentPropertiesValues & DialogContentPropertiesBasic;
export type SystemCDialogContentProperties = ComponentPropertyBasic<DialogContentPropertiesBasic> & ComponentPropertyValues<DialogContentPropertiesValues>;
export const DialogContentPropertySummary: ComponentPropertySummary = {
    propertyKeys: DIALOG_CONTENT,
    defaultProperties: DIALOG_CONTENT_DEFAULTS,
    utilityProperties: DIALOG_CONTENT_UTILITIES
};



const DIALOG_TITLE = [['spacing', 'c-dialogTitle--spacing'], ['gap', 'c-dialogTitle--gap']] as const;
type DialogTitlePropertiesValues = {};
type DialogTitlePropertiesBasic = {
    gap: UnitValues;
    spacing: UnitValues;
    closeButton: boolean;
};
const DIALOG_TITLE_DEFAULTS: Partial<DialogTitleProperties> = {
    gap: 1,
    spacing: 2
};
const DIALOG_TITLE_UTILITIES = [...FLEXBOX_CONTAINER];
export type DialogTitleProperties = DialogTitlePropertiesValues & DialogTitlePropertiesBasic;
export type SystemCDialogTitleProperties = ComponentPropertyBasic<DialogTitlePropertiesBasic> & ComponentPropertyValues<DialogTitlePropertiesValues>;
export const DialogTitlePropertySummary: ComponentPropertySummary = {
    propertyKeys: DIALOG_TITLE,
    defaultProperties: DIALOG_TITLE_DEFAULTS,
    utilityProperties: DIALOG_TITLE_UTILITIES
};



const DIVIDER = [['variant', 'c-divider--variant'], ['orientation', 'c-divider--orientation'], ['textAlign', 'c-divider--textAlign']] as const;
type DividerPropertiesValues = {};
type DividerPropertiesBasic = {
    variant: 'middle' | 'inset' | 'fullWidth';
    orientation: 'horizontal' | 'vertical';
    textAlign: 'center' | 'right' | 'left';
};
const DIVIDER_DEFAULTS: Partial<DividerProperties> = {
    textAlign: 'center',
    variant: 'fullWidth',
    orientation: 'horizontal'
};
const DIVIDER_UTILITIES: any[] = [];
export type DividerProperties = DividerPropertiesValues & DividerPropertiesBasic;
export type SystemCDividerProperties = ComponentPropertyBasic<DividerPropertiesBasic> & ComponentPropertyValues<DividerPropertiesValues>;
export const DividerPropertySummary: ComponentPropertySummary = {
    propertyKeys: DIVIDER,
    defaultProperties: DIVIDER_DEFAULTS,
    utilityProperties: DIVIDER_UTILITIES
};



const LIST = [['dense', 'c-list--dense'], ['disablePadding', 'c-list--disablePadding']] as const;
type ListPropertiesValues = {};
type ListPropertiesBasic = {
    dense: boolean;
    disablePadding: boolean;
    subheader: React.ReactNode;
};
const LIST_DEFAULTS: Partial<DividerProperties> = {};
const LIST_UTILITIES: any[] = [];
export type ListProperties = ListPropertiesValues & ListPropertiesBasic;
export type SystemCListProperties = ComponentPropertyBasic<ListPropertiesBasic> & ComponentPropertyValues<ListPropertiesValues>;
export const ListPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST,
    defaultProperties: LIST_DEFAULTS,
    utilityProperties: LIST_UTILITIES
};



const LIST_ITEM = [['disablePadding', 'c-listItem--disablePadding'], ['dense', 'c-listItem--dense'], ['disableGutters', 'c-listItem--disableGutters'], ['alignItems', 'c-listItem--alignItems']] as const;
type ListItemPropertiesValues = {};
type ListItemPropertiesBasic = {
    dense: boolean;
    alignItems: 'start' | 'center';
    disableGutters: boolean;
    disablePadding: boolean;
    secondaryAction: React.ReactNode;
};
const LIST_ITEM_DEFAULTS: Partial<ListItemProperties> = {
    alignItems: 'center',
};
const LIST_ITEM_UTILITIES: any[] = [];
export type ListItemProperties = ListItemPropertiesValues & ListItemPropertiesBasic;
export type SystemCListItemProperties = ComponentPropertyBasic<ListItemPropertiesBasic> & ComponentPropertyValues<ListItemPropertiesValues>;
export const ListItemPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_ITEM,
    defaultProperties: LIST_ITEM_DEFAULTS,
    utilityProperties: LIST_ITEM_UTILITIES
};



const LIST_ITEM_BUTTON = [['disabled', 'c-listItemButton--disabled'], ['disablePadding', 'c-listItemButton--disablePadding'], ['dense', 'c-listItemButton--dense'], ['disableGutters', 'c-listItemButton--disableGutters'], ['divider', 'c-listItemButton--divider'], ['selected', 'c-listItemButton--selected'], ['alignItems', 'c-listItemButton--alignItems']] as const;
type ListItemButtonPropertiesValues = {

};
type ListItemButtonPropertiesBasic = {
    dense: boolean;
    divider: boolean;
    selected: boolean;
    disabled: boolean;
    disablePadding: boolean;
    disableGutters: boolean;
    alignItems: 'start' | 'center';
};
const LIST_ITEM_BUTTON_DEFAULTS: Partial<ListItemButtonProperties> = {};
const LIST_ITEM_BUTTON_UTILITIES: any[] = [];
const LIST_ITEM_BUTTON_INHERIT = ['disabled'];
export type ListItemButtonProperties = ListItemButtonPropertiesValues & ListItemButtonPropertiesBasic;
export type SystemCListItemButtonProperties = ComponentPropertyBasic<ListItemButtonPropertiesBasic> & ComponentPropertyValues<ListItemButtonPropertiesValues>;
export const ListItemButtonPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_ITEM_BUTTON,
    defaultProperties: LIST_ITEM_BUTTON_DEFAULTS,
    utilityProperties: LIST_ITEM_BUTTON_UTILITIES,
    inheritProperties: LIST_ITEM_BUTTON_INHERIT
};



const LIST_ITEM_ICON = [] as const;
type ListItemIconPropertiesValues = {};
type ListItemIconPropertiesBasic = {};
const LIST_ITEM_ICON_DEFAULTS: Partial<ListItemIconProperties> = {};
const LIST_ITEM_ICON_UTILITIES: any[] = [];
export type ListItemIconProperties = ListItemIconPropertiesValues & ListItemIconPropertiesBasic;
export type SystemCListItemIconProperties = ComponentPropertyBasic<ListItemIconPropertiesBasic> & ComponentPropertyValues<ListItemIconPropertiesValues>;
export const ListItemIconPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_ITEM_ICON,
    defaultProperties: LIST_ITEM_ICON_DEFAULTS,
    utilityProperties: LIST_ITEM_ICON_UTILITIES
};




const LIST_ITEM_TEXT = [['inset', 'c-listItemText--inset']] as const;
type ListItemTextPropertiesValues = {};
type ListItemTextPropertiesBasic = {
    inset: boolean;
    disableCText: boolean;
    primary: React.ReactNode;
    secondary: React.ReactNode;
};
const LIST_ITEM_TEXT_DEFAULTS: Partial<ListItemTextProperties> = {};
const LIST_ITEM_TEXT_UTILITIES: any[] = [];
export type ListItemTextProperties = ListItemTextPropertiesValues & ListItemTextPropertiesBasic;
export type SystemCListItemTextProperties = ComponentPropertyBasic<ListItemTextPropertiesBasic> & ComponentPropertyValues<ListItemTextPropertiesValues>;
export const ListItemTextPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_ITEM_TEXT,
    defaultProperties: LIST_ITEM_TEXT_DEFAULTS,
    utilityProperties: LIST_ITEM_TEXT_UTILITIES
};




const LIST_ITEM_AVATAR = [] as const;
type ListItemAvatarPropertiesValues = {};
type ListItemAvatarPropertiesBasic = {
};
const LIST_ITEM_AVATAR_DEFAULTS: Partial<ListItemAvatarProperties> = {};
const LIST_ITEM_AVATAR_UTILITIES: any[] = [];
export type ListItemAvatarProperties = ListItemAvatarPropertiesValues & ListItemAvatarPropertiesBasic;
export type SystemCListItemAvatarProperties = ComponentPropertyBasic<ListItemAvatarPropertiesBasic> & ComponentPropertyValues<ListItemAvatarPropertiesValues>;
export const ListItemAvatarPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_ITEM_AVATAR,
    defaultProperties: LIST_ITEM_AVATAR_DEFAULTS,
    utilityProperties: LIST_ITEM_AVATAR_UTILITIES
};



const LIST_SUB_HEADER = [['inset', 'c-listSubHeader--inset']] as const;
type ListSubHeaderPropertiesValues = {};
type ListSubHeaderPropertiesBasic = {
    inset: boolean;
    disableSticky: boolean;
    disableGutters: boolean;
};
const LIST_SUB_HEADER_DEFAULTS: Partial<ListSubHeaderProperties> = {};
const LIST_SUB_HEADER_UTILITIES: any[] = [];
export type ListSubHeaderProperties = ListSubHeaderPropertiesValues & ListSubHeaderPropertiesBasic;
export type SystemCListSubHeaderProperties = ComponentPropertyBasic<ListSubHeaderPropertiesBasic> & ComponentPropertyValues<ListSubHeaderPropertiesValues>;
export const ListSubHeaderPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_SUB_HEADER,
    defaultProperties: LIST_SUB_HEADER_DEFAULTS,
    utilityProperties: LIST_SUB_HEADER_UTILITIES
};




const LIST_ITEM_SECONDARY_ACTION = [] as const;
type ListItemSecondaryActionPropertiesValues = {};
type ListItemSecondaryActionPropertiesBasic = {
    inset: boolean;
    disableSticky: boolean;
    disableGutters: boolean;
};
const LIST_ITEM_SECONDARY_ACTION_DEFAULTS: Partial<ListItemSecondaryActionProperties> = {};
const LIST_ITEM_SECONDARY_ACTION_UTILITIES: any[] = [];
export type ListItemSecondaryActionProperties = ListItemSecondaryActionPropertiesValues & ListItemSecondaryActionPropertiesBasic;
export type SystemCListItemSecondaryActionProperties = ComponentPropertyBasic<ListItemSecondaryActionPropertiesBasic> & ComponentPropertyValues<ListItemSecondaryActionPropertiesValues>;
export const ListItemSecondaryActionPropertySummary: ComponentPropertySummary = {
    propertyKeys: LIST_ITEM_SECONDARY_ACTION,
    defaultProperties: LIST_ITEM_SECONDARY_ACTION_DEFAULTS,
    utilityProperties: LIST_ITEM_SECONDARY_ACTION_UTILITIES
};




const DRAWER = [['variant', 'c-drawer--variant'], ['anchor', 'c-drawer--anchor']] as const;
type DrawerPropertiesValues = {};
type DrawerPropertiesBasic = {
    open: boolean;
    variant: 'permanent' | 'temporary' | 'persistent';
    anchor: 'top' | 'bottom' | 'left' | 'right';
    swipeableEdge: boolean;
    swipeableEdgeIcon: React.ReactNode;
    swipeableEdgeExtra: React.ReactNode;
    paperProps: SystemStyleProperties;
};
const DRAWER_DEFAULTS: Partial<DrawerProperties> = {
    variant: 'temporary'
};
const DRAWER_UTILITIES: any[] = [];
const DRAWER_INHERIT = ['open'];
export type DrawerProperties = DrawerPropertiesValues & DrawerPropertiesBasic;
export type SystemCDrawerProperties = ComponentPropertyBasic<DrawerPropertiesBasic> & ComponentPropertyValues<DrawerPropertiesValues>;
export const DrawerPropertySummary: ComponentPropertySummary = {
    propertyKeys: DRAWER,
    defaultProperties: DRAWER_DEFAULTS,
    utilityProperties: DRAWER_UTILITIES,
    inheritProperties: DRAWER_INHERIT
};





const POPOVER = [['placement', 'c-popover--placement']] as const;
type PopoverPropertiesValues = {};
type PopoverPropertiesBasic = {
    open: boolean;
    arrow: boolean;
    anchorEl: Anchor;
    elevation: ShadowValues;
    anchorOrigin: OriginAlign;
    transformOrigin: OriginAlign;
    placement: Placement;
    paperProps: SystemStyleProperties;
    paperClasses: string;
};
const POPOVER_DEFAULTS: Partial<PopoverProperties> = {};
const POPOVER_UTILITIES: any[] = [];
const POPOVER_INHERIT = ['open', 'p'];
export type PopoverProperties = PopoverPropertiesValues & PopoverPropertiesBasic;
export type SystemCPopoverProperties = ComponentPropertyBasic<PopoverPropertiesBasic> & ComponentPropertyValues<PopoverPropertiesValues>;
export const PopoverPropertySummary: ComponentPropertySummary = {
    propertyKeys: POPOVER,
    defaultProperties: POPOVER_DEFAULTS,
    utilityProperties: POPOVER_UTILITIES,
    inheritProperties: POPOVER_INHERIT
};


const POPPER = [['placement', 'c-popper--placement']] as const;
type PopperPropertiesValues = {};
type PopperPropertiesBasic = {
    open: boolean;
    arrow: boolean;
    anchorEl: Anchor;
    elevation: ShadowValues;
    anchorOrigin: OriginAlign;
    transformOrigin: OriginAlign;
    placement: Placement;
    paperProps: SystemStyleProperties;
    paperClasses: string;
    withoutModal: boolean;
    keepMounted: boolean;
};
const POPPER_DEFAULTS: Partial<PopperProperties> = {};
const POPPER_UTILITIES: any[] = [];
const POPPER_INHERIT = ['p'];
export type PopperProperties = PopperPropertiesValues & PopperPropertiesBasic;
export type SystemCPopperProperties = ComponentPropertyBasic<PopperPropertiesBasic> & ComponentPropertyValues<PopperPropertiesValues>;
export const PopperPropertySummary: ComponentPropertySummary = {
    propertyKeys: POPPER,
    defaultProperties: POPPER_DEFAULTS,
    utilityProperties: POPPER_UTILITIES,
    inheritProperties: POPPER_INHERIT
};





const TOOLTIP = [['placement', 'c-tooltip--placement'], ['hovered', 'c-tooltip--hovered']] as const;
type TooltipPropertiesValues = {};
type TooltipPropertiesBasic = {
    arrow: boolean;
    placement: Placement;
    paperProps: SystemStyleProperties;
    paperClasses: string;
    title: React.ReactNode;
};
const TOOLTIP_DEFAULTS: Partial<TooltipProperties> = {};
const TOOLTIP_UTILITIES: any[] = [];
const TOOLTIP_INHERIT = ['open'];
export type TooltipProperties = TooltipPropertiesValues & TooltipPropertiesBasic;
export type SystemCTooltipProperties = ComponentPropertyBasic<TooltipPropertiesBasic> & ComponentPropertyValues<TooltipPropertiesValues>;
export const TooltipPropertySummary: ComponentPropertySummary = {
    propertyKeys: TOOLTIP,
    defaultProperties: TOOLTIP_DEFAULTS,
    utilityProperties: TOOLTIP_UTILITIES,
    inheritProperties: TOOLTIP_INHERIT
};



const MENU = [[]];
type MenuPropertiesValues = {};
type MenuPropertiesBasic = {};
const MENU_DEFAULTS: Partial<MenuProperties> = {};
const MENU_UTILITIES: any[] = [];
const MENU_INHERIT: any[] = [];
export type MenuProperties = MenuPropertiesValues & MenuPropertiesBasic;
export type SystemCMenuProperties = ComponentPropertyBasic<MenuPropertiesBasic> & ComponentPropertyValues<MenuPropertiesValues>;
export const MenuPropertySummary: ComponentPropertySummary = {
    propertyKeys: MENU,
    defaultProperties: MENU_DEFAULTS,
    utilityProperties: MENU_UTILITIES,
    inheritProperties: MENU_INHERIT
};



const MENU_LIST = [[]];
type MenuListPropertiesValues = {};
type MenuListPropertiesBasic = {};
const MENU_LIST_DEFAULTS: Partial<MenuListProperties> = {};
const MENU_LIST_UTILITIES: any[] = [];
const MENU_LIST_INHERIT: any[] = [];
export type MenuListProperties = MenuListPropertiesValues & MenuListPropertiesBasic;
export type SystemCMenuListProperties = ComponentPropertyBasic<MenuListPropertiesBasic> & ComponentPropertyValues<MenuListPropertiesValues>;
export const MenuListPropertySummary: ComponentPropertySummary = {
    propertyKeys: MENU_LIST,
    defaultProperties: MENU_LIST_DEFAULTS,
    utilityProperties: MENU_LIST_UTILITIES,
    inheritProperties: MENU_LIST_INHERIT
};




const MENU_ITEM = [['disableGutters', 'c-menuItem--disableGutters'], ['divider', 'c-menuItem--divider']];
type MenuItemPropertiesValues = {};
type MenuItemPropertiesBasic = {
    divider: boolean;
    disableGutters: boolean;
};
const MENU_ITEM_DEFAULTS: Partial<MenuItemProperties> = {};
const MENU_ITEM_UTILITIES: any[] = [];
const MENU_ITEM_INHERIT: any[] = [];
export type MenuItemProperties = MenuItemPropertiesValues & MenuItemPropertiesBasic;
export type SystemCMenuItemProperties = ComponentPropertyBasic<MenuItemPropertiesBasic> & ComponentPropertyValues<MenuItemPropertiesValues>;
export const MenuItemPropertySummary: ComponentPropertySummary = {
    propertyKeys: MENU_ITEM,
    defaultProperties: MENU_ITEM_DEFAULTS,
    utilityProperties: MENU_ITEM_UTILITIES,
    inheritProperties: MENU_ITEM_INHERIT
};