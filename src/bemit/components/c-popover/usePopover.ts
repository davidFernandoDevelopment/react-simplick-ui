import { useCallback, useRef, useEffect } from 'react';

import { Anchor, OriginAlign, Side, Placement } from '@generic/setting';
import { resolveAnchorEl, getOffsetTop, getOffsetLeft, getTransformOriginValue, transformPlacementToOrigin, getTranslateArrow } from './utils';



interface IUsePopover {
    anchorEl?: Anchor;
    placement?: Placement;
    anchorOrigin?: OriginAlign;
    transformOrigin?: OriginAlign;
    childTransformOrigin?: boolean;
}

export const usePopover = ({ anchorEl, anchorOrigin, transformOrigin, placement, childTransformOrigin = false }: IUsePopover) => {

    const paperRef = useRef<HTMLDivElement | null>(null);
    const arrowRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (!anchorEl) {
            paperRef.current = null;
            arrowRef.current = null;
        }
    }, [anchorEl]);

    if (placement) {
        anchorOrigin = transformPlacementToOrigin(placement)?.anchorOrigin;
        transformOrigin = transformPlacementToOrigin(placement)?.transformOrigin;
    }

    const getAnchorOffset = useCallback(() => {
        const resolvedAnchorEl = resolveAnchorEl(anchorEl);
        const elementAnchor = resolvedAnchorEl && resolvedAnchorEl?.nodeType === 1 ? resolvedAnchorEl : document.body;

        const anchorRect: DOMRect = elementAnchor.getBoundingClientRect();

        return {
            width: anchorRect.width,
            height: anchorRect.height,
            top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin?.vertical),
            left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin?.horizontal)
        };

    }, [anchorEl, anchorOrigin?.vertical, anchorOrigin?.horizontal]);

    const getTransformOrigin = useCallback((elRect: Partial<DOMRect>) => {
        return {
            horizontal: getOffsetLeft(elRect, transformOrigin?.horizontal),
            vertical: getOffsetTop(elRect, transformOrigin?.vertical)
        };
    }, [transformOrigin?.horizontal, transformOrigin?.vertical]);

    const getPositioningStyle = useCallback((element: HTMLElement) => {
        const elRect: Partial<DOMRect> = {
            width: element.offsetWidth,
            height: element.offsetHeight
        };

        const elTransformOrigin = getTransformOrigin(elRect);
        const anchorOffset = getAnchorOffset();

        let top = anchorOffset.top - elTransformOrigin.vertical;
        let left = anchorOffset.left - elTransformOrigin.horizontal;

        let arrowX = anchorOffset.width / 2;
        let arrowY = anchorOffset.height / 2;

        return {
            elTransformOrigin,
            top: `${Math.round(top)}px`,
            left: `${Math.round(left)}px`,
            arrowX: Math.round(arrowX),
            arrowY: Math.round(arrowY),
            transformOrigin: getTransformOriginValue(elTransformOrigin)
        };

    }, [getAnchorOffset, getTransformOrigin]);

    const setPositioningStyle = useCallback(() => {
        const el = paperRef?.current;
        const arrow = arrowRef?.current;

        if (!el) return;

        const { top, left, arrowX, arrowY, elTransformOrigin } = getPositioningStyle(el);

        let plcm = el.dataset.placement as Placement;
        const anchorRef: Side | null = getTranslateArrow(plcm);
        if (anchorRef === 'top') {
            elTransformOrigin.vertical = elTransformOrigin.vertical + arrowY - 7;
        } else if (anchorRef === 'bottom') {
            elTransformOrigin.vertical = elTransformOrigin.vertical - arrowY + 7;
        } else if (anchorRef === 'left') {
            elTransformOrigin.horizontal = elTransformOrigin.horizontal + arrowX - 7;
        } else if (anchorRef === 'right') {
            elTransformOrigin.horizontal = elTransformOrigin.horizontal - arrowX + 7;
        }
        let newTransformOrigin = getTransformOriginValue(elTransformOrigin);

        el.style.top = top;
        el.style.left = left;

        if (childTransformOrigin) {
            (el.firstChild as HTMLElement).style.transformOrigin = newTransformOrigin;
        } else {
            el.style.transformOrigin = newTransformOrigin;
        }

        if (arrow) {
            if (anchorRef === 'top') {
                arrow.style.top = `${arrowY}px`;
                arrow.style.transform = 'translateY(-7px)';
            } else if (anchorRef === 'bottom') {
                arrow.style.bottom = `${arrowY}px`;
                arrow.style.transform = 'translateY(7px)';
            } else if (anchorRef === 'left') {
                arrow.style.left = `${arrowX}px`;
                arrow.style.transform = 'translateX(-7px)';
            } else if (anchorRef === 'right') {
                arrow.style.right = `${arrowX}px`;
                arrow.style.transform = 'translateX(7px)';
            } else {
                let orientation = plcm.split('-')[0];
                if (['left', 'right'].includes(orientation)) {
                    arrow.style.top = `50%`;
                    arrow.style.transform = 'translateY(-50%)';
                } else {
                    arrow.style.left = `50%`;
                    arrow.style.transform = 'translateX(-50%)';
                }
            }
            arrow.style.transformOrigin = newTransformOrigin;
        }


    }, [getPositioningStyle, childTransformOrigin]);

    return { paperRef, arrowRef, setPositioningStyle };
};