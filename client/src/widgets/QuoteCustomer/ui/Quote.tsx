import Image from 'next/image';

import SvgQuotes from '@/shared/assets/svg/SvgQuotes';
import SvgStars from '@/shared/assets/svg/SvgStars';
import Customer from '../../../../public/images/customer.png';

export const Quote = () => (
    <div className="relative z-10 mt-[3.4375rem] rounded-[15px] bg-white px-[25.62px] py-[22.64px]">
        <div className="flex items-center justify-between">
            <div className="flex gap-[11px]">
                <Image
                    alt="customer"
                    className="h-[42.3px] w-[42.3px] rounded-full object-contain"
                    src={Customer}
                />
                <div className=" py-auto font-medium leading-[15.561px]">
                    <span className="mt-1 block text-[12.449px] text-[#030314]">
                        Alexander R.
                    </span>
                    <span className="mt-[2px] block font-quicksand text-[10px] text-doveGray">
                        01 Year With Us
                    </span>
                </div>
            </div>
            <SvgQuotes />
        </div>
        <div className="mt-[19px]">
            <blockquote className="text-justify text-[10.725px] italic leading-[15.561px] text-[#636363]">
                “ Online invoice payment helps companies save time, are faster
                and save maximum effort for the clients and save maximum effort.
                Online invoice payment helps companies save time ”
            </blockquote>
        </div>
        <SvgStars className="mt-[22.8px] h-[13.704px] w-[82.224px]" />
    </div>
);
