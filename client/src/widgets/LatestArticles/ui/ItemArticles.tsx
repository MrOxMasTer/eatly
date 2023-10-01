import Link from 'next/link';

import { Skeleton } from '@/shared/ui/Skeleton';

export const ItemArticles = () => {
    // const { Avatar, Nick, date, src, title } = item;
    const linkArticle = '/';

    return (
        <div
            className="z-10 rounded-[0.6875rem] bg-white px-[0.8438rem] pb-[1.3438rem] pt-[1.0844rem]"
            style={{
                boxShadow: '0px 0px 40px 0px rgba(50, 49, 66, 0.2)',
            }}>
            <Link href={linkArticle}>
                <Skeleton className="h-[187px] w-full rounded-[0.525rem] bg-nobel/50" />
            </Link>
            <Link href={linkArticle}>
                <h3 className="mt-[0.9375rem] text-[0.9063rem] font-semibold leading-[1.0813rem]">
                    How To Order Food ?
                </h3>
            </Link>
            <div className="flex justify-between">
                <div className="mt-3.5 flex items-start gap-2">
                    <Skeleton className="h-[1.875rem] w-[1.875rem] rounded-full bg-nobel/50" />
                    <div className="mt-1.5">
                        <span className="block text-[0.5rem] leading-[8px] text-grayDarker">
                            Written By
                        </span>
                        <span className="block text-xs font-medium leading-[1rem]">
                            Nick
                        </span>
                    </div>
                </div>
                <span className="mt-auto text-[0.6875rem] font-medium leading-[1rem] text-nobel">
                    15 DEC, 2022
                </span>
            </div>
        </div>
    );
};
