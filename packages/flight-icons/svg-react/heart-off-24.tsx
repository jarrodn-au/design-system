import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconHeartOff24 = forwardRef<SVGSVGElement, IconProps>(
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
                        d="M2.28 1.22a.75.75 0 00-1.06 1.06L3.28 4.342c-.165.13-.324.27-.475.42A5.974 5.974 0 001 9.03c0 1.605.651 3.14 1.806 4.27l8.67 8.485a.75.75 0 001.048 0l4.145-4.056 5.05 5.05a.75.75 0 101.061-1.06L2.28 1.22zm13.328 15.449L4.351 5.412c-.174.128-.34.269-.496.421A4.474 4.474 0 002.5 9.031c0 1.196.485 2.347 1.355 3.198L12 20.2l3.608-3.532z"
                        clipRule="evenodd"
                    />
                    <path d="M14.508 3.457a6.246 6.246 0 014.693 0 6.153 6.153 0 011.993 1.304 6.024 6.024 0 011.336 1.957 5.931 5.931 0 010 4.626 6.022 6.022 0 01-1.336 1.957l-1.04 1.017a.75.75 0 01-1.049-1.072l1.04-1.017c.43-.421.771-.921 1.003-1.47a4.431 4.431 0 000-3.456 4.524 4.524 0 00-1.003-1.47 4.653 4.653 0 00-1.508-.986 4.746 4.746 0 00-3.566 0 4.653 4.653 0 00-1.507.986l-1.04 1.018a.75.75 0 01-1.049 0l-1.04-1.018a4.644 4.644 0 00-1.257-.875.75.75 0 11.644-1.356c.61.29 1.173.68 1.663 1.16l.515.503.515-.504a6.154 6.154 0 011.993-1.304z" />
                </g>
            </svg>
        );
    }
);
