import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconTools16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M5 3v-.75A2.25 2.25 0 017.25 0h1.5A2.25 2.25 0 0111 2.25V3h.79a2.25 2.25 0 011.609.678l1.96 2.007c.411.42.641.985.641 1.573v5.492A2.25 2.25 0 0113.75 15H2.25A2.25 2.25 0 010 12.75V7.258c0-.588.23-1.152.64-1.573l1.961-2.007A2.25 2.25 0 014.211 3H5zm1.5-.75a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75V3h-3v-.75zM3.674 4.726a.75.75 0 01.537-.226h7.578a.75.75 0 01.537.226l1.96 2.008a.75.75 0 01.214.524V8h-4v-.25c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25V8h-4v-.742a.75.75 0 01.213-.524l1.961-2.008zM5.5 9.5h-4v3.25c0 .414.336.75.75.75h11.5a.75.75 0 00.75-.75V9.5h-4v.25c0 .69-.56 1.25-1.25 1.25h-2.5c-.69 0-1.25-.56-1.25-1.25V9.5zm1.5 0V8h2v1.5H7z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
