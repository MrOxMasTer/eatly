import Link from 'next/link';

import SvgStars from '@/assets/svg/SvgStars';
import SvgTrustpilot from '@/assets/svg/SvgTrustpilot';

const Trustpilot = () => (
    <div className="mt-[26px]">
        <Link className="flex items-end justify-center" href="/">
            <SvgTrustpilot />
            <SvgStars className="mb-[3.5px] ml-4" />
            <span className="ml-[0.4375rem] font-plsJakSans text-xs font-medium leading-5 text-pickledBluewood opacity-70">
                4900+
            </span>
        </Link>
    </div>
);

export default Trustpilot;
