import { TDishe } from '@/shared/api';
import SvgHeart from '@/shared/assets/svg/SvgHeart';
import SvgStar from '@/shared/assets/svg/SvgStar';
import { StatusBar } from '@/shared/ui/StatusBar';

type TListItemDishes = {
    dishe: TDishe;
};

export const CardDishe = ({ dishe }: TListItemDishes) => (
    <div
        className="relative overflow-hidden rounded-[22.6px] bg-white pt-[17px]"
        style={{
            boxShadow: '4.48px 53.75px 26.88px 0px rgba(229, 229, 229, 0.70)',
        }}>
        <button
            title="Add to favorites"
            className="absolute right-[14px] top-[15px] z-10"
            type="button">
            <SvgHeart />
        </button>
        <div className="h-[120px] bg-white">
            {/* <Image
                alt={dishe.title}
                className="mx-auto object-contain"
                height={120}
                src={dishe.src}
                width={120}
            /> */}
        </div>
        <div className="px-[15px] pb-5">
            <StatusBar
                className="px-[4.9px] text-[7.5px] leading-[1.935]"
                status={dishe.status}
            />
            <span className="text-[15px] font-semibold leading-6 text-tuna">
                {dishe.title}
            </span>
            <div>
                <span className="flex items-center gap-[3.77px] font-manrope text-[11.3px] leading-[20.5px] text-grey">
                    {dishe.deliveryTime}min •
                    <SvgStar className="h-[15px] w-[15px] translate-y-[-0.5px]" />
                    {dishe.rating}
                </span>
            </div>
            <div className="flex items-end justify-between">
                <span className="font-manrope text-[17px] font-bold leading-[26px]">
                    ${Math.floor(dishe.price)}
                    <span className="text-xs text-grey">
                        .
                        {Math.round(
                            (dishe.price - Math.floor(dishe.price)) * 100,
                        )}
                    </span>
                </span>
                <button
                    className=" rounded-[5.84px] bg-tuna px-[9.37px] py-[1px] text-[14.55px] text-white"
                    type="button">
                    +
                </button>
            </div>
        </div>
    </div>
);
