"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.MenuItemPropertySummary = exports.MenuListPropertySummary = exports.MenuPropertySummary = exports.TooltipPropertySummary = exports.PopperPropertySummary = exports.PopoverPropertySummary = exports.DrawerPropertySummary = exports.ListItemSecondaryActionPropertySummary = exports.ListSubHeaderPropertySummary = exports.ListItemAvatarPropertySummary = exports.ListItemTextPropertySummary = exports.ListItemIconPropertySummary = exports.ListItemButtonPropertySummary = exports.ListItemPropertySummary = exports.ListPropertySummary = exports.DividerPropertySummary = exports.DialogTitlePropertySummary = exports.DialogContentPropertySummary = exports.DialogActionsPropertySummary = exports.DialogPropertySummary = exports.ModalPropertySummary = exports.BackDropPropertySummary = exports.AvatarGroupPropertySummary = exports.AvatarPropertySummary = exports.CardHeaderPropertySummary = exports.CardMediaPropertySummary = exports.CardActionAreaPropertySummary = exports.CardActionsPropertySummary = exports.CardContentPropertySummary = exports.CardPropertySummary = exports.PaperPropertySummary = exports.IconButtonPropertySummary = exports.LoaderButtonPropertySummary = exports.ButtonPropertySummary = exports.IconBasePropertySummary = exports.ButtonBasePropertySummary = void 0;
var systemStyleProperties_1 = require("./systemStyleProperties");
var BUTTON_BASE = [['disabled', 'c-buttonBase--disabled']];
var BUTTON_BASE_UTILITIES = [
// ...DISPLAY
];
var BUTTON_BASE_INHERIT = ['disabled'];
exports.ButtonBasePropertySummary = {
    defaultProperties: {},
    propertyKeys: BUTTON_BASE,
    utilityProperties: BUTTON_BASE_UTILITIES,
    inheritProperties: BUTTON_BASE_INHERIT
};
var ICON_BASE = [['size', 'c-iconBase--size']];
var ICON_BASE_DEFAULT = {
    size: 'normal'
};
var ICON_BASE_UTILITIES = [];
exports.IconBasePropertySummary = {
    propertyKeys: ICON_BASE,
    defaultProperties: ICON_BASE_DEFAULT,
    utilityProperties: ICON_BASE_UTILITIES
};
var BUTTON = [['size', 'c-button--size'], ['variant', 'c-button--variant'], ['fullWidth', 'c-button--fullWidth'], ['disableElevation', 'c-button--disableElevation'], ['disabled', 'c-button--disabled']];
var BUTTON_DEFAULTS = {
    variant: 'default',
    size: 'normal',
    themeColor: 'primary'
};
var BUTTON_UTILITIES = __spreadArrays(systemStyleProperties_1.COLOR);
var BUTTON_INHERIT = ['disabled'];
exports.ButtonPropertySummary = {
    propertyKeys: BUTTON,
    defaultProperties: BUTTON_DEFAULTS,
    utilityProperties: BUTTON_UTILITIES,
    inheritProperties: BUTTON_INHERIT
};
var LOADER_BUTTON = [['loading', 'c-loaderButton--loading'], ['loadingPosition', 'c-loaderButton--position']];
var LOADER_BUTTON_DEAULTS = {};
var LOADER_BUTTON_UTILITIES = [];
exports.LoaderButtonPropertySummary = {
    propertyKeys: LOADER_BUTTON,
    defaultProperties: LOADER_BUTTON_DEAULTS,
    utilityProperties: LOADER_BUTTON_UTILITIES
};
var ICON_BUTTON = [['size', 'c-iconButton--size'], ['variant', 'c-iconButton--variant'], ['disabled', 'c-iconButton--disabled']];
var ICON_BUTTON_DEFAULTS = {
    variant: 'circle',
    size: 'normal',
    themeColor: 'primary'
};
var ICON_BUTTON_UTILITIES = __spreadArrays(systemStyleProperties_1.COLOR);
var ICON_BUTTON_INHERIT = ['disabled'];
exports.IconButtonPropertySummary = {
    propertyKeys: ICON_BUTTON,
    defaultProperties: ICON_BUTTON_DEFAULTS,
    utilityProperties: ICON_BUTTON_UTILITIES,
    inheritProperties: ICON_BUTTON_INHERIT
};
var PAPER = [['square', 'c-paper--square'], ['variant', 'c-paper--variant'], ['elevation', 'c-paper--elevation']];
var PAPER_DEFAULTS = {
    variant: 'elevation'
};
var PAPER_UTILITIES = [];
exports.PaperPropertySummary = {
    propertyKeys: PAPER,
    utilityProperties: PAPER_UTILITIES,
    defaultProperties: PAPER_DEFAULTS
};
var CARD = [['spacing', 'c-card--spacing']];
var CARD_DEFAULTS = {
    spacing: 0
};
var CARD_UTILITIES = [];
exports.CardPropertySummary = {
    propertyKeys: CARD,
    defaultProperties: CARD_DEFAULTS,
    utilityProperties: CARD_UTILITIES
};
var CARD_CONTENT = [['spacing', 'c-cardContent--spacing']];
var CARD_CONTENT_DEFAULTS = {
    spacing: 2
};
var CARD_CONTENT_UTILITIES = [];
exports.CardContentPropertySummary = {
    propertyKeys: CARD_CONTENT,
    defaultProperties: CARD_CONTENT_DEFAULTS,
    utilityProperties: CARD_CONTENT_UTILITIES
};
var CARD_ACTIONS = [['spacing', 'c-cardActions--spacing'], ['gap', 'c-cardActions--gap'], ['disableGap', 'c-cardActions--disableGap']];
var CARD_ACTIONS_DEFAULTS = {
    gap: 1,
    spacing: 1,
    disableGap: false
};
var CARD_ACTIONS_UTILITIES = __spreadArrays(systemStyleProperties_1.FLEXBOX_CONTAINER);
exports.CardActionsPropertySummary = {
    propertyKeys: CARD_ACTIONS,
    defaultProperties: CARD_ACTIONS_DEFAULTS,
    utilityProperties: CARD_ACTIONS_UTILITIES
};
var CARD_ACTION_AREA = [];
var CARD_ACTION_AREA_DEFAULTS = {};
var CARD_ACTION_AREA_UTILITIES = [];
var CARD_ACTION_AREA_INHERIT = ['disabled'];
exports.CardActionAreaPropertySummary = {
    propertyKeys: CARD_ACTION_AREA,
    defaultProperties: CARD_ACTION_AREA_DEFAULTS,
    utilityProperties: CARD_ACTION_AREA_UTILITIES,
    inheritProperties: CARD_ACTION_AREA_INHERIT
};
var CARD_MEDIA = [['variant', 'c-cardMedia--variant']];
var CARD_MEDIA_DEFAULTS = {
    variant: 'ratio-9-16'
};
var CARD_MEDIA_UTILITIES = [];
exports.CardMediaPropertySummary = {
    propertyKeys: CARD_MEDIA,
    defaultProperties: CARD_MEDIA_DEFAULTS,
    utilityProperties: CARD_MEDIA_UTILITIES
};
var CARD_HEADER = [['spacing', 'c-cardHeader--spacing'], ['gap', 'c-cardHeader--gap']];
var CARD_HEADER_DEFAULTS = {
    spacing: 2,
    gap: 2
};
var CARD_HEADER_UTILITIES = [];
exports.CardHeaderPropertySummary = {
    propertyKeys: CARD_HEADER,
    defaultProperties: CARD_HEADER_DEFAULTS,
    utilityProperties: CARD_HEADER_UTILITIES
};
var AVATAR = [['size', 'c-avatar--size'], ['variant', 'c-avatar--variant']];
var AVATAR_DEFAULTS = {
    size: 'normal',
    variant: 'circle'
};
var AVATAR_UTILITIES = [];
exports.AvatarPropertySummary = {
    defaultProperties: AVATAR_DEFAULTS,
    propertyKeys: AVATAR,
    utilityProperties: AVATAR_UTILITIES
};
var AVATAR_GROUP = [['spacing', 'c-avatarGroup--spacing']];
var AVATAR_GROUP_DEFAULTS = {
    spacing: 1,
    size: 'normal',
    variant: 'circle'
};
var AVATAR_GROUP_UTILITIES = [];
exports.AvatarGroupPropertySummary = {
    propertyKeys: AVATAR_GROUP,
    defaultProperties: AVATAR_GROUP_DEFAULTS,
    utilityProperties: AVATAR_GROUP_UTILITIES
};
var BACK_DROP = [['open', 'c-backDrop--open'], ['invisible', 'c-backDrop--invisible']];
var BACK_DROP_DEFAULTS = {
    open: false,
    invisible: false
};
var BACK_DROP_UTILITIES = [];
exports.BackDropPropertySummary = {
    propertyKeys: BACK_DROP,
    defaultProperties: BACK_DROP_DEFAULTS,
    utilityProperties: BACK_DROP_UTILITIES
};
var MODAL = [];
var MODAL_DEFAULTS = {};
var MODAL_UTILITIES = [];
exports.ModalPropertySummary = {
    propertyKeys: MODAL,
    defaultProperties: MODAL_DEFAULTS,
    utilityProperties: MODAL_UTILITIES
};
var DIALOG = [];
var DIALOG_DEFAULTS = {};
var DIALOG_UTILITIES = [];
exports.DialogPropertySummary = {
    propertyKeys: DIALOG,
    defaultProperties: DIALOG_DEFAULTS,
    utilityProperties: DIALOG_UTILITIES
};
var DIALOG_ACTIONS = [['spacing', 'c-dialogActions--spacing'], ['gap', 'c-dialogActions--gap']];
var DIALOG_ACTIONS_DEFAULTS = {
    gap: 1,
    spacing: 1
};
var DIALOG_ACTIONS_UTILITIES = __spreadArrays(systemStyleProperties_1.FLEXBOX_CONTAINER);
exports.DialogActionsPropertySummary = {
    propertyKeys: DIALOG_ACTIONS,
    defaultProperties: DIALOG_ACTIONS_DEFAULTS,
    utilityProperties: DIALOG_ACTIONS_UTILITIES
};
var DIALOG_CONTENT = [['spacing', 'c-dialogContent--spacing'], ['gap', 'c-dialogContent--gap']];
var DIALOG_CONTENT_DEFAULTS = {
    gap: 1,
    spacing: 1
};
var DIALOG_CONTENT_UTILITIES = __spreadArrays(systemStyleProperties_1.FLEXBOX_CONTAINER);
exports.DialogContentPropertySummary = {
    propertyKeys: DIALOG_CONTENT,
    defaultProperties: DIALOG_CONTENT_DEFAULTS,
    utilityProperties: DIALOG_CONTENT_UTILITIES
};
var DIALOG_TITLE = [['spacing', 'c-dialogTitle--spacing'], ['gap', 'c-dialogTitle--gap']];
var DIALOG_TITLE_DEFAULTS = {
    gap: 1,
    spacing: 2
};
var DIALOG_TITLE_UTILITIES = [];
exports.DialogTitlePropertySummary = {
    propertyKeys: DIALOG_TITLE,
    defaultProperties: DIALOG_TITLE_DEFAULTS,
    utilityProperties: DIALOG_TITLE_UTILITIES
};
var DIVIDER = [['variant', 'c-divider--variant'], ['orientation', 'c-divider--orientation'], ['textAlign', 'c-divider--textAlign']];
var DIVIDER_DEFAULTS = {
    textAlign: 'center',
    variant: 'fullWidth',
    orientation: 'horizontal'
};
var DIVIDER_UTILITIES = [];
exports.DividerPropertySummary = {
    propertyKeys: DIVIDER,
    defaultProperties: DIVIDER_DEFAULTS,
    utilityProperties: DIVIDER_UTILITIES
};
var LIST = [['dense', 'c-list--dense'], ['disablePadding', 'c-list--disablePadding']];
var LIST_DEFAULTS = {};
var LIST_UTILITIES = [];
exports.ListPropertySummary = {
    propertyKeys: LIST,
    defaultProperties: LIST_DEFAULTS,
    utilityProperties: LIST_UTILITIES
};
var LIST_ITEM = [['disablePadding', 'c-listItem--disablePadding'], ['dense', 'c-listItem--dense'], ['disableGutters', 'c-listItem--disableGutters'], ['alignItems', 'c-listItem--alignItems']];
var LIST_ITEM_DEFAULTS = {
    alignItems: 'center'
};
var LIST_ITEM_UTILITIES = [];
exports.ListItemPropertySummary = {
    propertyKeys: LIST_ITEM,
    defaultProperties: LIST_ITEM_DEFAULTS,
    utilityProperties: LIST_ITEM_UTILITIES
};
var LIST_ITEM_BUTTON = [['disabled', 'c-listItemButton--disabled'], ['disablePadding', 'c-listItemButton--disablePadding'], ['dense', 'c-listItemButton--dense'], ['disableGutters', 'c-listItemButton--disableGutters'], ['divider', 'c-listItemButton--divider'], ['selected', 'c-listItemButton--selected'], ['alignItems', 'c-listItemButton--alignItems']];
var LIST_ITEM_BUTTON_DEFAULTS = {};
var LIST_ITEM_BUTTON_UTILITIES = [];
var LIST_ITEM_BUTTON_INHERIT = ['disabled'];
exports.ListItemButtonPropertySummary = {
    propertyKeys: LIST_ITEM_BUTTON,
    defaultProperties: LIST_ITEM_BUTTON_DEFAULTS,
    utilityProperties: LIST_ITEM_BUTTON_UTILITIES,
    inheritProperties: LIST_ITEM_BUTTON_INHERIT
};
var LIST_ITEM_ICON = [];
var LIST_ITEM_ICON_DEFAULTS = {};
var LIST_ITEM_ICON_UTILITIES = [];
exports.ListItemIconPropertySummary = {
    propertyKeys: LIST_ITEM_ICON,
    defaultProperties: LIST_ITEM_ICON_DEFAULTS,
    utilityProperties: LIST_ITEM_ICON_UTILITIES
};
var LIST_ITEM_TEXT = [['inset', 'c-listItemText--inset']];
var LIST_ITEM_TEXT_DEFAULTS = {};
var LIST_ITEM_TEXT_UTILITIES = [];
exports.ListItemTextPropertySummary = {
    propertyKeys: LIST_ITEM_TEXT,
    defaultProperties: LIST_ITEM_TEXT_DEFAULTS,
    utilityProperties: LIST_ITEM_TEXT_UTILITIES
};
var LIST_ITEM_AVATAR = [];
var LIST_ITEM_AVATAR_DEFAULTS = {};
var LIST_ITEM_AVATAR_UTILITIES = [];
exports.ListItemAvatarPropertySummary = {
    propertyKeys: LIST_ITEM_AVATAR,
    defaultProperties: LIST_ITEM_AVATAR_DEFAULTS,
    utilityProperties: LIST_ITEM_AVATAR_UTILITIES
};
var LIST_SUB_HEADER = [['inset', 'c-listSubHeader--inset']];
var LIST_SUB_HEADER_DEFAULTS = {};
var LIST_SUB_HEADER_UTILITIES = [];
exports.ListSubHeaderPropertySummary = {
    propertyKeys: LIST_SUB_HEADER,
    defaultProperties: LIST_SUB_HEADER_DEFAULTS,
    utilityProperties: LIST_SUB_HEADER_UTILITIES
};
var LIST_ITEM_SECONDARY_ACTION = [];
var LIST_ITEM_SECONDARY_ACTION_DEFAULTS = {};
var LIST_ITEM_SECONDARY_ACTION_UTILITIES = [];
exports.ListItemSecondaryActionPropertySummary = {
    propertyKeys: LIST_ITEM_SECONDARY_ACTION,
    defaultProperties: LIST_ITEM_SECONDARY_ACTION_DEFAULTS,
    utilityProperties: LIST_ITEM_SECONDARY_ACTION_UTILITIES
};
var DRAWER = [['variant', 'c-drawer--variant'], ['anchor', 'c-drawer--anchor']];
var DRAWER_DEFAULTS = {
    variant: 'temporary'
};
var DRAWER_UTILITIES = [];
var DRAWER_INHERIT = ['open'];
exports.DrawerPropertySummary = {
    propertyKeys: DRAWER,
    defaultProperties: DRAWER_DEFAULTS,
    utilityProperties: DRAWER_UTILITIES,
    inheritProperties: DRAWER_INHERIT
};
var POPOVER = [['placement', 'c-popover--placement']];
var POPOVER_DEFAULTS = {};
var POPOVER_UTILITIES = [];
var POPOVER_INHERIT = ['open', 'p'];
exports.PopoverPropertySummary = {
    propertyKeys: POPOVER,
    defaultProperties: POPOVER_DEFAULTS,
    utilityProperties: POPOVER_UTILITIES,
    inheritProperties: POPOVER_INHERIT
};
var POPPER = [['placement', 'c-popper--placement']];
var POPPER_DEFAULTS = {};
var POPPER_UTILITIES = [];
var POPPER_INHERIT = ['p'];
exports.PopperPropertySummary = {
    propertyKeys: POPPER,
    defaultProperties: POPPER_DEFAULTS,
    utilityProperties: POPPER_UTILITIES,
    inheritProperties: POPPER_INHERIT
};
var TOOLTIP = [['placement', 'c-tooltip--placement'], ['hovered', 'c-tooltip--hovered']];
var TOOLTIP_DEFAULTS = {};
var TOOLTIP_UTILITIES = [];
var TOOLTIP_INHERIT = ['open'];
exports.TooltipPropertySummary = {
    propertyKeys: TOOLTIP,
    defaultProperties: TOOLTIP_DEFAULTS,
    utilityProperties: TOOLTIP_UTILITIES,
    inheritProperties: TOOLTIP_INHERIT
};
var MENU = [[]];
var MENU_DEFAULTS = {};
var MENU_UTILITIES = [];
var MENU_INHERIT = [];
exports.MenuPropertySummary = {
    propertyKeys: MENU,
    defaultProperties: MENU_DEFAULTS,
    utilityProperties: MENU_UTILITIES,
    inheritProperties: MENU_INHERIT
};
var MENU_LIST = [[]];
var MENU_LIST_DEFAULTS = {};
var MENU_LIST_UTILITIES = [];
var MENU_LIST_INHERIT = [];
exports.MenuListPropertySummary = {
    propertyKeys: MENU_LIST,
    defaultProperties: MENU_LIST_DEFAULTS,
    utilityProperties: MENU_LIST_UTILITIES,
    inheritProperties: MENU_LIST_INHERIT
};
var MENU_ITEM = [['disableGutters', 'c-menuItem--disableGutters'], ['divider', 'c-menuItem--divider']];
var MENU_ITEM_DEFAULTS = {};
var MENU_ITEM_UTILITIES = [];
var MENU_ITEM_INHERIT = [];
exports.MenuItemPropertySummary = {
    propertyKeys: MENU_ITEM,
    defaultProperties: MENU_ITEM_DEFAULTS,
    utilityProperties: MENU_ITEM_UTILITIES,
    inheritProperties: MENU_ITEM_INHERIT
};
