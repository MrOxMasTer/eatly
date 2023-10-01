// import Image from 'next/image';

import { TRestaurant } from '@/shared/api';
import SvgBookmark from '@/shared/assets/svg/SvgBookmark';
import SvgStar from '@/shared/assets/svg/SvgStar';
import { StatusBar } from '@/shared/ui/StatusBar';
import Link from 'next/link';

type TListItemRestaurantsProps = {
    restaurant: TRestaurant;
    environment?: string;
};

export const CardRestaurant = ({
    restaurant,
    environment,
}: TListItemRestaurantsProps) => {
    const link = `/${environment ? 'telegram' : 'menu'}/restaurants/${
        restaurant.id
    }`;

    return (
        <div
            className="overflow-hidden rounded-3xl"
            style={{
                boxShadow:
                    '4.73px 56.75px 28.38px 0px rgba(229, 229, 229, 0.70)',
            }}>
            <Link href={link}>
                <div className="relative h-[140px] bg-nobel/60">
                    {/* <Image fill alt={restaurant.title} src={restaurant.src} /> */}
                </div>
            </Link>
            <div className="relative py-2 pb-[13.5px] pl-[27.1px] pr-[21px]">
                <div>
                    <StatusBar
                        className="h-[19.75px] px-[6.7px] text-[10px]"
                        status={restaurant.status}
                    />
                    <Link href={link}>
                        <h4 className="break-all text-[1.2813rem] font-semibold leading-[2.0812rem] text-tuna">
                            {restaurant.title}
                        </h4>
                    </Link>
                    <div>
                        <span className="flex gap-[5px] font-manrope text-[15.3px] leading-[20.5px] text-grey">
                            {restaurant.deliveryTime}min •
                            <SvgStar className="translate-y-[-2.1px]" />
                            {restaurant.rating}
                        </span>
                    </div>
                </div>
                <button
                    className="absolute bottom-[13.5px] right-[21.2px] h-[33px] w-[33px] cursor-pointer rounded-full bg-lightPrimary hover:scale-105"
                    style={{ transition: 'transform 0.2s' }}
                    type="button"
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    <SvgBookmark />
                </button>
            </div>
        </div>
    );
};
