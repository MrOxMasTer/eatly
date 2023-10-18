'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const DynamicMenu = dynamic(() => import('../../../widgets/header/ui/Menu'));

export default function MenuModal() {
    const searchParams = useSearchParams();

    const modalActive = searchParams.get('modalActive') || 'false';

    useEffect(() => {
        if (modalActive === 'true') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modalActive]);

    return (
        <AnimatePresence>
            {modalActive === 'true' && (
                <motion.div
                    animate={{ height: '100vh' }}
                    className="absolute left-0 top-0 z-30 h-screen w-screen overflow-hidden bg-blueViolet"
                    exit={{ height: 0 }}
                    initial={{ height: 0 }}>
                    <div className="container">
                        <div className="relative">
                            <Link
                                href={{ query: { modalActive: false } }}
                                className="absolute right-0 top-[34px] z-50 text-white">
                                <X className="h-8 w-8" />
                            </Link>
                            <div className="relative pt-20">
                                <DynamicMenu />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// export const dynamic = 'force-dynamic';

{
    /* <motion.div
    animate={{ height: '100vh' }}
    className="fixed left-0 top-0 z-30 w-screen overflow-hidden"
    exit={{ height: 0 }}
    initial={{ height: 0 }}>
    <div className="h-screen w-screen bg-blueViolet">
        <div className="container relative">
            <Link
                href={{ query: { modalActive: false } }}
                className="absolute right-0 top-0 z-50 text-white">
                <X className="h-8 w-8" />
            </Link>
            <div className="relative pt-20">
                <Menu />
            </div>
        </div>
    </div>
</motion.div>; */
}
