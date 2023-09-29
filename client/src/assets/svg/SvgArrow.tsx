import { SVG } from '@/types/assets.types';

const SvgArrow = (props: SVG) => (
    <svg
        fill="none"
        height="47"
        viewBox="0 0 49 47"
        width="49"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
            d="M34.4837 5.302C38.8203 11.7931 41.2965 19.2119 38.7933 26.7979C36.5337 33.6452 30.3756 37.701 23.304 32.6209C19.9563 30.2162 17.784 25.363 19.959 21.7573C22.3821 17.7402 27.7599 21.2991 29.2188 24.0329C32.6263 30.4181 30.4186 39.0281 22.9224 42.9176C14.0451 47.5236 10.2245 38.7188 10.2946 38.7167"
            stroke="#665AB5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.25793"
        />
        <path
            d="M43.6739 7.14307C42.7604 7.32098 41.8652 7.1416 40.9616 7.00363C37.9945 6.55087 34.9607 5.21468 33.1174 3.01118C34.1792 5.83722 34.493 9.82642 32.233 12.2195"
            stroke="#665AB5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="1.5"
            strokeWidth="1.25793"
        />
    </svg>
);

export default SvgArrow;
