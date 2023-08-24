import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAwsCdkColor16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                    fill="#000"
                    fillRule="evenodd"
                    d="M14.91 12.673l-2.655 1.423V10.76l2.655-1.422v3.335zm-3.19-2.778l-2.659-1.42 2.661-1.477 2.66 1.471-2.662 1.426zm-4.254 2.788L4.81 14.105V10.76l2.657-1.428v3.35zm-6.4-3.342l2.677 1.421v3.28l-2.676-1.634V9.34zM7.99 1.077l2.615 1.402L8 3.734 5.392 2.49 7.99 1.077zm3.198 5.054L8.533 7.606V4.601l2.655-1.279v2.81zM7.466 7.595L4.81 6.13V3.334l2.657 1.268v2.993zm-3.192 2.3L1.6 8.475l2.676-1.478 2.66 1.467-2.662 1.431zm6.914 4.203l-2.655-1.416V9.343l2.655 1.418v3.337zm4.527-6.052l-.004-.002-3.456-1.913V2.504A.495.495 0 0012 2.077c-.014-.008-.03-.006-.044-.012l.006-.01L8.252.065a.564.564 0 00-.532.001l-3.712 2.02.001.002c-.003.002-.008.001-.011.003a.496.496 0 00-.255.427v3.612L.267 8.051l-.002.001-.002.001A.497.497 0 000 8.484v4.195c0 .169.09.327.242.419l3.743 2.287.004-.005c.009.005.01.014.02.019a.57.57 0 00.532.002L8 13.548l3.453 1.84v.002l.005.002v-.001a.566.566 0 00.528 0l3.722-1.994a.495.495 0 00.27-.434V8.476c0-.177-.101-.34-.263-.43z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
