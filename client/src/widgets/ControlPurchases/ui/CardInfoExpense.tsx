import SvgWallet from '@/shared/assets/svg/SvgWallet';
import { Progress } from '@/shared/ui/Progress';

export const CardInfoExpense = () => (
    <div className="border border-solid border-catskillWhite p-[14.89px]">
        <div className="flex justify-between font-manrope">
            <div>
                <div className="flex gap-[11.17px]">
                    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-magnolia">
                        <SvgWallet />
                    </span>
                    <div className="leading-none tracking-[0.372px]">
                        <h3 className="text-[11.164px] font-extrabold  text-tuna">
                            Expense
                        </h3>
                        <span className="text-[9.304px] font-medium text-cadetBlue">
                            increased By 10%
                        </span>
                    </div>
                </div>
            </div>
            <span className="text-[13.025px] font-extrabold tracking-[0.186px] text-tuna">
                $409.00
            </span>
        </div>
        <Progress
            aria-label="decorate-progress"
            className="mt-[12.1px] h-[5.6px] bg-primary/20"
            classNameIndicator="bg-primary"
            value={70}
        />
    </div>
);
