import Link from 'next/link';

import Copyright from './Copyright';
import ListNavigation from './ListNavigation';

import SvgLogo from '@/assets/svg/SvgLogo';

const Footer = () => (
    <footer className="mt-auto bg-gallery">
        <div className="container pt-[55px]">
            <div className="flex justify-center">
                <Link href="/">
                    <SvgLogo className="w-[99.4px]" />
                </Link>
            </div>
            <ListNavigation />
            <Copyright />
        </div>
    </footer>
);

export default Footer;
