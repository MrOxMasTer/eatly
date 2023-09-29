'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { cn } from '@/helpers/utils';
import { ILink } from '@/types/ui.types';

const NavLink = ({ children, href, className, ...props }: ILink) => {
    const pathname = usePathname();
    const isActive = pathname.startsWith(href);

    return (
        <Link
            {...props}
            className={cn(className, { 'active-link': isActive })}
            href={href}>
            {children}
        </Link>
    );
};

export default NavLink;
