import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconRadio16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = title
            ? 'title-' + Math.random().toString(36).substr(2, 9)
            : undefined;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M3.41 2.476a.75.75 0 01-.013 1.06A6.235 6.235 0 001.5 8c0 1.67.68 3.276 1.897 4.463a.75.75 0 01-1.048 1.074A7.735 7.735 0 010 8c0-2.08.847-4.072 2.35-5.537a.75.75 0 011.06.013zM12.59 2.476a.75.75 0 011.06-.013A7.735 7.735 0 0116 8c0 2.08-.847 4.072-2.35 5.537a.75.75 0 01-1.047-1.074A6.234 6.234 0 0014.5 8c0-1.67-.68-3.276-1.897-4.463a.75.75 0 01-.013-1.06zM7 8a1 1 0 011-1h.01a1 1 0 010 2H8a1 1 0 01-1-1z" />
                    <path d="M5.864 6.046a.75.75 0 10-1.028-1.092c-.42.395-.756.867-.987 1.39a4.1 4.1 0 000 3.307c.23.523.567.994.987 1.39a.75.75 0 001.028-1.093 2.774 2.774 0 01-.642-.902 2.6 2.6 0 010-2.098c.147-.334.365-.641.642-.902zM11.164 4.96a.75.75 0 10-1.028 1.092c.277.26.495.567.642.902a2.601 2.601 0 010 2.098 2.775 2.775 0 01-.642.902.75.75 0 101.028 1.092c.42-.395.756-.866.986-1.39a4.1 4.1 0 000-3.307 4.273 4.273 0 00-.986-1.39z" />
                </g>
            </svg>
        );
    }
);
