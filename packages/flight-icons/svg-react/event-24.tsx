import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconEvent24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M12.673 7.668a.75.75 0 00-1.345 0l-1.526 3.09-3.41.498a.75.75 0 00-.415 1.28l2.467 2.403-.582 3.395a.75.75 0 001.088.79L12 17.522l3.05 1.604a.75.75 0 001.088-.79l-.582-3.396 2.467-2.403a.75.75 0 00-.415-1.28l-3.41-.498-1.525-3.09zm-1.7 4.107L12 9.695l1.027 2.08a.75.75 0 00.564.41l2.298.336-1.662 1.619a.75.75 0 00-.216.664l.392 2.286-2.054-1.08a.75.75 0 00-.698 0l-2.054 1.08.392-2.286a.75.75 0 00-.216-.664L8.111 12.52l2.298-.336a.75.75 0 00.564-.41z" />
                    <path d="M17 2a.75.75 0 00-1.5 0v1h-7V2A.75.75 0 007 2v1H4.75A2.75 2.75 0 002 5.75v14.5A2.75 2.75 0 004.75 23h14.5A2.75 2.75 0 0022 20.25V5.75A2.75 2.75 0 0019.25 3H17V2zM7 6V4.5H4.75c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H17V6a.75.75 0 01-1.5 0V4.5h-7V6A.75.75 0 017 6z" />
                </g>
            </svg>
        );
    }
);
