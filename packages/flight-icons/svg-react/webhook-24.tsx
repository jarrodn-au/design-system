import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconWebhook24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.75 6a3.25 3.25 0 016.094-1.574.75.75 0 101.312-.728 4.75 4.75 0 10-7.307 5.856l-3.485 5.477A2.013 2.013 0 005.01 15H5a2 2 0 100 4h.01a2 2 0 001.623-3.17l3.852-6.052a.75.75 0 00-.23-1.035A3.247 3.247 0 018.75 6z" />
                    <path d="M12.364 7.969c-.115.02-.233.031-.354.031H12a2 2 0 110-4h.01a2 2 0 011.623 3.17l3.481 5.47a4.75 4.75 0 11.7 8.96.75.75 0 11.373-1.452 3.25 3.25 0 10-.931-5.89.75.75 0 01-1.037-.23l-3.855-6.06z" />
                    <path d="M2.184 15.376a.75.75 0 10-1.298-.752A4.75 4.75 0 109.69 17.75h7.454A2 2 0 0019 19h.01a2 2 0 100-4H19a2 2 0 00-1.855 1.25H9a.75.75 0 00-.75.75 3.25 3.25 0 11-6.066-1.624z" />
                </g>
            </svg>
        );
    }
);
