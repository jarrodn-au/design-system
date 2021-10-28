import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconDollarSign24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12.5 1.75a.75.75 0 00-1.5 0V4H9.396c-1.165 0-2.282.46-3.107 1.28a4.365 4.365 0 000 6.19 4.406 4.406 0 003.107 1.28H11v5.75H5.75a.75.75 0 000 1.5H11v2.25a.75.75 0 001.5 0V20h2.104c1.165 0 2.282-.46 3.107-1.28a4.365 4.365 0 000-6.19 4.407 4.407 0 00-3.107-1.28H12.5V5.5h4.708a.75.75 0 000-1.5H12.5V1.75zM11 5.5H9.396c-.77 0-1.507.304-2.05.844a2.865 2.865 0 000 4.062c.543.54 1.28.844 2.05.844H11V5.5zm1.5 7.25v5.75h2.104c.77 0 1.507-.304 2.05-.844a2.864 2.864 0 000-4.062 2.906 2.906 0 00-2.05-.844H12.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
