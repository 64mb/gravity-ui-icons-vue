import * as React from 'react';
import {SVGProps} from 'react';
const ArrowsOppositeToDots = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.28 4.78a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06L6.94 3.5H1.75a.75.75 0 0 0 0 1.5h5.19L5.72 6.22a.75.75 0 0 0 1.06 1.06l2.5-2.5Zm-.06 3.94-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L9.06 12.5h5.19a.75.75 0 0 0 0-1.5H9.06l1.22-1.22a.75.75 0 1 0-1.06-1.06ZM14 4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0ZM3.75 13.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default ArrowsOppositeToDots;
