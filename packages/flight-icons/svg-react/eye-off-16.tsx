import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconEyeOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M2.28 1.22a.75.75 0 00-1.06 1.06l1.664 1.665A10.99 10.99 0 00.977 5.994c-.295.41-.524.791-.683 1.103a4.16 4.16 0 00-.194.431A1.4 1.4 0 000 8c0 .155.041.296.067.375a3 3 0 00.122.31c.097.215.234.471.407.751.346.56.854 1.246 1.516 1.914C3.43 12.68 5.422 14 8 14c1.49 0 2.786-.442 3.868-1.071l1.852 1.851a.75.75 0 101.06-1.06l-4.645-4.646a.383.383 0 00-.008-.007v-.001l-3.19-3.19a.555.555 0 00-.014-.014L2.28 1.22zm3.127 5.248L3.95 5.01a9.444 9.444 0 00-1.754 1.857 7.362 7.362 0 00-.566.911c-.046.09-.08.164-.104.221l.03.067c.065.145.17.344.316.58a9.45 9.45 0 001.306 1.647C4.332 11.458 5.964 12.5 8 12.5c1.028 0 1.95-.264 2.763-.677l-1.23-1.23C9.078 10.858 8.552 11 8 11a3 3 0 01-3-3c0-.553.142-1.079.407-1.532zm2.985 2.985L6.547 7.608A1.62 1.62 0 006.5 8 1.5 1.5 0 008 9.5c.137 0 .269-.016.392-.047zM8 3.5c-.306 0-.602.023-.887.067a.75.75 0 11-.226-1.483C7.247 2.029 7.617 2 8 2c2.578 0 4.57 1.32 5.888 2.65.662.668 1.17 1.354 1.516 1.914.173.28.31.536.407.75.048.107.09.212.122.31.026.08.067.221.067.376 0 .21-.079.42-.126.537a4.99 4.99 0 01-.251.524c-.21.384-.515.857-.909 1.355a.75.75 0 11-1.176-.93c.343-.434.6-.836.768-1.144.078-.143.133-.258.168-.342a5.336 5.336 0 00-.346-.648 9.452 9.452 0 00-1.306-1.646C11.668 4.542 10.036 3.5 8 3.5zm6.511 4.604l-.002-.008.001.005.001.003z" />
                </g>
            </svg>
        );
    }
);
