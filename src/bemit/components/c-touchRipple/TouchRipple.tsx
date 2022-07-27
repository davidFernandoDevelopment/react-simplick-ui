import React, { MouseEvent, useRef } from 'react';
import { SystemCTouchRippleProperties } from '../../../generic/systemComponentProperties';



export interface TouchRippleProps extends SystemCTouchRippleProperties { }


export const TouchRipple = ({ centerRipple }: TouchRippleProps) => {

    const ref = useRef<HTMLDivElement>(null);

    const rippleEffect = (e: MouseEvent<HTMLElement>) => {
        if (ref.current) {
            let circle = document.createElement('span');
            circle.classList.add('SUI-c-touch__ripple');

            if (e.currentTarget) {
                let offsetLeft = ref.current.getBoundingClientRect().left;
                let offsetTop = ref.current.getBoundingClientRect().top;
                let x = e.clientX - offsetLeft;
                let y = e.clientY - offsetTop;
                const sizeX =
                    Math.max((ref.current.offsetWidth - x), x) * 3;
                const sizeY =
                    Math.max((ref.current.offsetHeight - y), y) * 3;
                const rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);

                circle.style.width = `${rippleSize}px`;
                circle.style.height = `${rippleSize}px`;

                if (centerRipple) {
                    circle.style.left = `${-(rippleSize / 2) + ref.current.getBoundingClientRect().width / 2}px`;
                    circle.style.top = `${-(rippleSize / 2) + ref.current.getBoundingClientRect().height / 2}px`;
                } else {
                    circle.style.left = `${-(rippleSize / 2) + x}px`;
                    circle.style.top = `${-(rippleSize / 2) + y}px`;
                }

                ref.current?.appendChild(circle);
                setTimeout(() => {
                    circle.remove();
                }, 550);
            }
        }
    };

    return (
        <span
            ref={ref}
            onClick={rippleEffect}
            className='SUI-c-touch'
        ></span>
    );
};

export default React.memo(TouchRipple);