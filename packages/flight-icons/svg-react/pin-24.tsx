import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconPin24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M13.614 3.482a1.75 1.75 0 012.464.012l4.425 4.425a1.75 1.75 0 010 2.475l-2.612 2.612a.75.75 0 01-.53.22h-1.634l-2.025 2.025-.275 2.48c-.144 1.295-1.622 2.005-2.713 1.218-.773-.559-1.768-1.309-2.573-2.026l-3.86 3.86a.75.75 0 11-1.061-1.06l3.86-3.861c-.717-.805-1.467-1.8-2.025-2.573-.788-1.09-.077-2.568 1.217-2.712l2.48-.276 1.964-1.963V6.643a.75.75 0 01.225-.535l2.673-2.626zm1.403 1.072a.25.25 0 00-.352-.001l-2.449 2.404V8.65a.75.75 0 01-.22.53l-2.369 2.369a.75.75 0 01-.447.215l-2.742.305c-.195.021-.257.218-.167.343.692.959 1.621 2.174 2.384 2.937.763.763 1.979 1.692 2.937 2.385.125.09.322.027.344-.168l.304-2.741a.75.75 0 01.216-.448l2.43-2.43a.75.75 0 01.53-.22h1.634l2.393-2.393a.25.25 0 000-.353l-4.426-4.426z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
