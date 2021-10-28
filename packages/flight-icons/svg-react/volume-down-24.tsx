import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconVolumeDown24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M12 6.075c0-1.537-1.838-2.327-2.954-1.27l-3.3 3.126A.25.25 0 015.574 8H2.75A1.75 1.75 0 001 9.75v4.5c0 .966.784 1.75 1.75 1.75h2.824a.25.25 0 01.172.068l3.3 3.127c1.116 1.057 2.954.266 2.954-1.27V6.075zm-1.922-.182a.25.25 0 01.422.182v11.85a.25.25 0 01-.422.181l-3.3-3.127a1.75 1.75 0 00-1.204-.48H2.75a.25.25 0 01-.25-.25v-4.5a.25.25 0 01.25-.25h2.824a1.75 1.75 0 001.203-.479l3.301-3.127z"
                        clipRule="evenodd"
                    />
                    <path d="M16.271 7.96a.75.75 0 10-1.042 1.08A4.118 4.118 0 0116.5 12c0 1.105-.454 2.17-1.271 2.96a.75.75 0 101.042 1.08A5.617 5.617 0 0018 12c0-1.52-.625-2.972-1.729-4.04z" />
                </g>
            </svg>
        );
    }
);
