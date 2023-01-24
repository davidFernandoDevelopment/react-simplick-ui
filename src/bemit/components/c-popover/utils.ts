import { VerticalBasiclAlign, HorizontalBasicAlign, Anchor, Placement, OriginAlign, Side } from '@generic/setting';


export function getOffsetTop(rect: Partial<DOMRect>, align?: VerticalBasiclAlign) {
    let offset = 0; // DEFAULT align: top
    if (align === 'center') {
        offset = rect.height! / 2;
    } else if (align === 'bottom') {
        offset = rect.height!;
    }

    return offset;
}

export function getOffsetLeft(rect: Partial<DOMRect>, align?: HorizontalBasicAlign) {
    let offset = 0; // DEFAULT align: left

    if (align === 'center') {
        offset = rect.width! / 2;
    } else if (align === 'right') {
        offset = rect.width!;
    }

    return offset;
}

export function resolveAnchorEl(anchor: Anchor | undefined) {
    return typeof anchor === 'function' ? anchor() : anchor;
}

export function getTransformOriginValue(transformOrigin: { horizontal: number; vertical: number; }): string {
    return [transformOrigin.horizontal, transformOrigin.vertical]
        .map((val: number) => `${val}px`)
        .join(' ');
}

function getOpposited(val: string, arr: string[]) {
    return arr.filter(v => v !== val)[0];
}

export function transformPlacementToOrigin(placement: Placement | undefined) {
    let anchorOrigin: OriginAlign = {};
    let transformOrigin: OriginAlign = {};

    let vertical = ['top', 'bottom'];
    let horizontal = ['right', 'left'];

    if (!placement) return null;
    let position = placement.split('-')[0];

    let isVertical = vertical.includes(position);

    let x = isVertical ?
        placement.includes('start') ? 'left' : (placement.includes('end') ? 'right' : 'center') :
        position as HorizontalBasicAlign;

    let y = !isVertical ?
        placement.includes('start') ? 'top' : (placement.includes('end') ? 'bottom' : 'center') :
        position as VerticalBasiclAlign;

    if (isVertical) {
        transformOrigin.horizontal = x;
        transformOrigin.vertical = getOpposited(y, vertical) as VerticalBasiclAlign;
    } else {
        transformOrigin.vertical = y;
        transformOrigin.horizontal = getOpposited(x, horizontal) as HorizontalBasicAlign;
    }

    anchorOrigin.horizontal = x;
    anchorOrigin.vertical = y;


    return {
        anchorOrigin,
        transformOrigin
    };
}

export function getTranslateArrow(placement: Placement): Side | null {
    let vertical = ['top', 'bottom'];

    let position = placement.split('-')[0];
    let align = placement.split('-')[1];

    let isVertical = vertical.includes(position);

    let anchor: Side | null = null;

    if (isVertical) {
        anchor = align === 'start' ? 'left' : (align === 'end' ? 'right' : null);
    } else {
        anchor = align === 'start' ? 'top' : (align === 'end' ? 'bottom' : null);
    }

    return anchor;
}