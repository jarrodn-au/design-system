import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVolume216 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M13.242 2.184a.75.75 0 10-.984 1.132C13.709 4.578 14.5 6.266 14.5 8s-.79 3.422-2.242 4.684a.75.75 0 00.984 1.132C14.992 12.293 16 10.204 16 8c0-2.204-1.008-4.293-2.758-5.816z" />
                    <path
                        fillRule="evenodd"
                        d="M7.033 2.686A1.25 1.25 0 019 3.71v8.58a1.25 1.25 0 01-1.967 1.024L3.728 11H1.25C.56 11 0 10.44 0 9.75v-3.5C0 5.56.56 5 1.25 5h2.478l3.305-2.314zM7.5 4.19L4.523 6.274a1.25 1.25 0 01-.716.226H1.5v3h2.307c.256 0 .506.079.716.226L7.5 11.809V4.19z"
                        clipRule="evenodd"
                    />
                    <path d="M10.701 5.239a.75.75 0 011.06-.038A3.826 3.826 0 0113 8c0 1.06-.453 2.066-1.239 2.799A.75.75 0 1110.74 9.7c.494-.46.761-1.074.761-1.701s-.267-1.24-.761-1.701a.75.75 0 01-.038-1.06z" />
                </g>
            </svg>
        );
    }
);
