'use client';

import { Menu } from '@/widgets/header/ui/Menu';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function MenuModal() {
    const searchParams = useSearchParams();

    const modalActive = searchParams.get('modalActive') || 'false';

    return (
        <AnimatePresence>
            {modalActive === 'true' && (
                <motion.div
                    animate={{ height: '100vh' }}
                    className="fixed left-0 top-0 z-30 w-screen overflow-hidden"
                    exit={{ height: 0 }}
                    initial={{ height: 0 }}>
                    <Link
                        href={{ query: { modalActive: false } }}
                        className="absolute right-[3.75rem] top-[2.35rem] z-50 text-white">
                        <X className="h-8 w-8" />
                    </Link>
                    <Menu />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
