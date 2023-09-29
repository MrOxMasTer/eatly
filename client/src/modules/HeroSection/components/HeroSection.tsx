import Link from 'next/link';

import Hero from './Hero';

import BlockText from './BlockText';
import Trustpilot from './Trustpilot';

const HeroSection = () => (
    <section>
        <div className="container pb-[4.6875rem] pt-14">
            <BlockText />
            <div className="mt-[2.5625rem] flex justify-center gap-[0.875rem]">
                <Link
                    className="btn px-[1.525rem] pb-[0.6325rem] pt-[0.72rem] text-[0.8125rem] font-medium capitalize tracking-[0.0081rem] "
                    href="/">
                    Get Started
                </Link>
                <Link
                    className="btn-light px-[1.525rem] pb-[0.6325rem] pt-[0.72rem] text-[0.8125rem] font-medium capitalize tracking-[0.0081rem] "
                    href="/">
                    Go Pro
                </Link>
            </div>
            <Trustpilot />
            <Hero />
        </div>
    </section>
);

export default HeroSection;
