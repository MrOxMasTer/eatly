import Link from 'next/link';

import SvgArrowRight from '@/assets/svg/SvgArrowRight';
import { IViewAll } from '@/types/components.types';

const ViewAll = ({ className, ...props }: IViewAll) => (
    <Link
        className={`${className} flex items-center text-xl font-medium leading-[45px] tracking-[-0.1px] text-darkGray`}
        {...props}>
        View All <SvgArrowRight className="arrow-right-gray ml-5" />
    </Link>
);

export default ViewAll;
