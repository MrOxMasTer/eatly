'use client';

import dynamic from 'next/dynamic';

import useMatchMedia from '@/shared/lib/hooks/useMatchMedia';
import { Logo } from '@/shared/ui/Logo';
import { useSearchParams } from 'next/navigation';

const DynamicBurger = dynamic(() => import('@/shared/ui/Burger'));

export const Header = () => {
    const { isMobile } = useMatchMedia();

    const searchParams = useSearchParams();

    const modalActive = searchParams.get('modalActive') || 'false';

    return (
        <header className=" bg-pureWhite">
            <div className="container">
                <div className="flex justify-between border-b border-solid border-silver pb-[30px] pt-8">
                    <h1 className="visually-hidden">eatly</h1>
                    <Logo href="/" />
                    {isMobile && !(modalActive === 'true') && (
                        <div className="flex w-[31.5px] cursor-pointer items-center justify-center">
                            <DynamicBurger />,
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
