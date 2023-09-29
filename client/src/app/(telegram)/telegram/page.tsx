'use client';

import { useEffect } from 'react';

import { LucideLoader } from 'lucide-react';

import { cn } from '@/helpers/utils';
import useTelegram from '@/hooks/useTelegram';
import { MenuContents } from '@/modules/MenuContents';

const Telegram = () => {
    const { wa, isLoading } = useTelegram();

    useEffect(() => {
        wa?.ready();
    }, [wa]);

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
