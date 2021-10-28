import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLayout16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M1 3.25A2.25 2.25 0 013.25 1h9.5A2.25 2.25 0 0115 3.25v9.5A2.25 2.25 0 0112.75 15h-9.5A2.25 2.25 0 011 12.75v-9.5zM6.5 13.5h6.25a.75.75 0 00.75-.75V6.5h-7v7zM5 6.5v7H3.25a.75.75 0 01-.75-.75V6.5H5zM13.5 5V3.25a.75.75 0 00-.75-.75h-9.5a.75.75 0 00-.75.75V5h11z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
