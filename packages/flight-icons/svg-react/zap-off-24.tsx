import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconZapOff24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M2.28 1.22a.75.75 0 00-1.06 1.06l5.659 5.66-4.705 5.63a.75.75 0 00.493 1.226l8.48.94-.917 6.408a.75.75 0 001.318.587l4.608-5.515 5.564 5.564a.75.75 0 101.06-1.06l-6.067-6.067a.753.753 0 00-.154-.154L2.28 1.219zM15.09 16.15L7.945 9.004 4.222 13.46l7.86.87a.75.75 0 01.66.852l-.653 4.563 3.002-3.593z"
                        clipRule="evenodd"
                    />
                    <path d="M13.77 1.856a.75.75 0 00-1.318-.587l-2.57 3.075a.75.75 0 101.152.962l.877-1.05-.332 2.32a.75.75 0 101.485.213l.706-4.933zM14.973 8.5a.75.75 0 10-.165 1.49l4.97.552-1.673 2.002a.75.75 0 001.151.962l2.57-3.075a.75.75 0 00-.493-1.226l-6.36-.705z" />
                </g>
            </svg>
        );
    }
);
