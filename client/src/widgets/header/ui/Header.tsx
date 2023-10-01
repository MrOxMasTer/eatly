'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';

import { Menu } from './Menu';

import useMatchMedia from '@/shared/lib/hooks/useMatchMedia';
import { Logo } from '@/shared/ui/Logo';

const DynamicBurger = dynamic(() => import('@/shared/ui/Burger'));

export const Header = () => {
    const { isMobile } = useMatchMedia();

    const [isVisibleMenu, setVisibleMenu] = useState(false);

    return (
        <header className=" bg-pureWhite">
            <div className="container">
                <div className="flex justify-between border-b border-solid border-silver pb-[30px] pt-8">
                    <h1 className="visually-hidden">eatly</h1>
                    <Logo href="/" />
                    {isMobile && (
                        <div className="flex w-[31.5px] cursor-pointer items-center justify-center">
                            {!isVisibleMenu ? (
                                <DynamicBurger
                                    onClick={() => setVisibleMenu(true)}
                                />
                            ) : (
                                <button
                                    className="z-50 text-white"
                                    type="button"
                                    onClick={() => setVisibleMenu(false)}>
                                    <X className="h-8 w-8" />
                                </button>
                            )}
                        </div>
                    )}
                </div>
                <AnimatePresence>
                    {isVisibleMenu && (
                        <motion.div
                            animate={{ height: '100vh' }}
                            className="fixed left-0 top-0 z-30 w-screen overflow-hidden"
                            exit={{ height: 0 }}
                            initial={{ height: 0 }}>
                            <Menu onClose={() => setVisibleMenu(false)} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
