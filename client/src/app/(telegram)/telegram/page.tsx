'use client';

import useTelegram from '@/shared/lib/hooks/useTelegram';
import { cn } from '@/shared/lib/utils/cn';
import { MenuContents } from '@/widgets/MenuContents';
import { LucideLoader } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Telegram = () => {
    const { wa, isLoading, isError } = useTelegram();
    const router = useRouter();

    useEffect(() => {
        if (wa && isError) {
            router.push('/');
        }

        wa?.ready();
    }, [wa, isError]);

    return (
        <main>
            {isLoading ? (
                <div
                    className={cn(
                        'flex h-screen w-full items-center justify-center',
                    )}>
                    <LucideLoader />
                </div>
            ) : (
                <MenuContents />
            )}
        </main>
    );
};

export default Telegram;
