import Link from 'next/link';

import SvgLogo from '@/assets/svg/SvgLogo';

const Logo = () => (
    <Link className="block w-fit" href="/">
        <SvgLogo />
    </Link>
);

export default Logo;
