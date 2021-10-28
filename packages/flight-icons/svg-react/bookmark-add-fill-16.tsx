import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconBookmarkAddFill16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M4.25 1A2.25 2.25 0 002 3.25v10.83a1 1 0 001.478.878l4.403-2.394a.25.25 0 01.238 0l4.403 2.394A1 1 0 0014 14.08V3.25A2.25 2.25 0 0011.75 1h-7.5zM7 4.75a.75.75 0 011.5 0V6h1.25a.75.75 0 010 1.5H8.5v1.25a.75.75 0 01-1.5 0V7.5H5.75a.75.75 0 010-1.5H7V4.75z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
