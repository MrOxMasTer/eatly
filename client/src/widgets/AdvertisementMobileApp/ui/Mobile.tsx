'use client';

import Image from 'next/image';

import Link from 'next/link';

import { motion } from 'framer-motion';

import SvgArrowRight from '@/shared/assets/svg/SvgArrowRight';
import MobileScreen from '../../../../public/images/mobile-screen.png';

export const Mobile = () => (
    <div className="relative bg-mobile bg-no-repeat">
        <Link
            className="btn mx-auto mt-[35px] rounded-[9.61px] px-[17px] py-[13px]  text-xs font-medium capitalize leading-[15px]"
            href="/">
            Download <SvgArrowRight className="ml-[9px]" />
        </Link>
        <div className="pt-[6.875rem]">
            <div className="relative mx-auto w-fit after:absolute after:right-[-40px] after:top-[-10px] after:content-mobileIllustration">
                <motion.div
                    animate={{
                        y: [0, 15, -0],
                    }}
                    className=""
                    initial={{
                        y: 0,
                    }}
                    transition={{
                        repeatDelay: 0,
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}>
                    <Image
                        alt="mobile app"
                        className="w-[170.73px]"
                        src={MobileScreen}
                    />
                </motion.div>
            </div>
        </div>
    </div>
);
