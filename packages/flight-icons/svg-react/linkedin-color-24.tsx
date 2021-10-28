import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconLinkedinColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#0A66C2"
                    d="M19.041 19.041h-2.963v-4.64c0-1.107-.02-2.532-1.541-2.532-1.544 0-1.78 1.206-1.78 2.45v4.722H9.794V9.497h2.844v1.305h.04a3.121 3.121 0 012.807-1.542c3.004 0 3.558 1.976 3.558 4.546l-.002 5.235zM6.45 8.193c-.944 0-1.72-.776-1.72-1.72 0-.943.776-1.72 1.72-1.72.943 0 1.719.777 1.72 1.72 0 .943-.777 1.72-1.72 1.72zM7.93 19.04H4.965V9.497h2.966v9.544zM20.52 2.001H3.476A1.466 1.466 0 002 3.444v17.114c.01.8.675 1.451 1.476 1.443h17.043A1.47 1.47 0 0022 20.557V3.442A1.469 1.469 0 0020.519 2v.002z"
                />
            </svg>
        );
    }
);
