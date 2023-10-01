import SvgMoney from '@/shared/assets/svg/SvgMoney';
import { Progress } from '@/shared/ui/Progress';

export const CardInfoVocherUsage = () => (
    <div className="border border-solid border-catskillWhite p-[14.89px]">
        <div className="flex justify-between font-manrope">
            <div>
                <div className="flex gap-[11.17px]">
                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-whiteIce">
                        <SvgMoney />
                    </span>
                    <div className="leading-none tracking-[0.372px]">
                        <h3 className="text-[11.164px] font-extrabold  text-tuna">
                            Vocher Usage
                        </h3>
                        <span className="text-[9.304px] font-medium text-cadetBlue">
                            increased By 5%
                        </span>
                    </div>
                </div>
            </div>
            <span className="text-[13.025px] font-extrabold tracking-[0.186px] text-tuna">
                $45.78
            </span>
        </div>
        <Progress
            className="mt-[12.1px] h-[5.6px] bg-sun/20"
            classNameIndicator="bg-sun"
            value={60}
        />
    </div>
);
