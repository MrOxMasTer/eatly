import { SVG } from '@/types/assets.types';

const SvgArrowSwitch = (props: SVG) => (
    <svg
        fill="none"
        height="19"
        viewBox="0 0 18 19"
        width="18"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            d="M8.87695 4.479L14.0501 9.6522L8.87695 14.8254"
            stroke="#ACADB9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.47805"
        />
    </svg>
);

export default SvgArrowSwitch;
