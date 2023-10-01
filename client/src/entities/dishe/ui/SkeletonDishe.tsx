import { Skeleton } from '@/shared/ui/Skeleton';

export const SkeletonDishe = () => (
    <div
        className="rounded-3xl"
        style={{
            boxShadow: '4.73px 56.75px 28.38px 0px rgba(229, 229, 229, 0.70)',
        }}>
        <Skeleton className="h-[140px] rounded-t-3xl" />
        <div className="rounded-b-3xl bg-white px-[15px] py-2 pb-[20px]">
            <div>
                <Skeleton className=" h-[19.75px] w-[52.4px] rounded-[4.3px] " />
                <Skeleton className="my-[4px] h-[26.2px] w-[95px] rounded-[4.3px]" />
                <Skeleton className="h-[21px] w-[75px] rounded-[4.3px]" />
                <Skeleton className="mt-[7.6px] h-[26px] w-[45px] rounded-[4.3px]" />
            </div>
        </div>
    </div>
);
