import Image from 'next/image';

import { TMiniDishes } from '../controlPurchases.types';

import { cn } from '@/helpers/utils';

type TMiniListCardDishesProps = {
    dishe: TMiniDishes;
};

const MiniListCardDishes = ({ dishe }: TMiniListCardDishesProps) => (
    <li className=" max-h-[58.3px] max-w-[228px] rounded-[8px] bg-white px-[11px]">
        <div className="relative flex items-center gap-[13px]">
            <Image
                alt={dishe.title}
                className="mt-[2px] h-[47.7px] w-[47.7px] object-contain"
                height={97}
                src={dishe.src}
                width={97}
            />
            <div className=" text-tuna">
                <h3 className="mt-[11.2px] text-[12.5px] font-semibold leading-[0px]">
                    {dishe.title}
                </h3>
                <span
                    className={cn('text-[8px] font-medium leading-[0px]', {
                        'text-burntSienna': dishe.state === 'Cancelled',
                    })}>
                    {dishe.state}
                </span>
            </div>
            <span className="absolute bottom-[6.5px] right-0 text-[8.6px] font-medium leading-[140%] text-darkGray">
                {dishe.time}
            </span>
        </div>
    </li>
);

export default MiniListCardDishes;
