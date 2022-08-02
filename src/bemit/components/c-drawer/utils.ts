export type Anchor = 'top' | 'bottom' | 'right' | 'left';

export function isHorizontal(anchor: Anchor): boolean {
    return ['left', 'right'].indexOf(anchor) !== -1;
}
export function calculatevisibleTouchSurface(anchor: Anchor, transitionPrev: number, element: Element): number {
    return isHorizontal(anchor) ? element.clientWidth - transitionPrev : element.clientHeight - transitionPrev;
}
export function getMaxTranslate(isHorizontal: boolean, element: Element) {
    return isHorizontal ? element.clientWidth : element.clientHeight;
}
export function getTranslate(anchor: Anchor, startPosition: number, currentPosition: number): number | null {
    let changes = startPosition - currentPosition;
    const multiplier = ['left', 'top'].indexOf(anchor) !== -1 ? 1 : -1;
    if (multiplier > 0 && changes < 0) return null;
    if (multiplier < 0 && changes > 0) return null;

    return changes * multiplier;
}