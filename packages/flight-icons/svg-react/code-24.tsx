import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCode24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M14.447 3.026a.75.75 0 00-.92.527l-4.5 16.5a.75.75 0 001.447.394l4.5-16.5a.75.75 0 00-.527-.92zM16.207 6.232a.75.75 0 011.06-.025l5.5 5.25a.75.75 0 010 1.085l-5.5 5.25a.75.75 0 01-1.035-1.085L21.164 12l-4.932-4.707a.75.75 0 01-.024-1.06zM7.768 7.293a.75.75 0 00-1.036-1.086l-5.5 5.25a.75.75 0 000 1.085l5.5 5.25a.75.75 0 101.036-1.085L2.836 12l4.932-4.707z" />
                </g>
            </svg>
        );
    }
);
