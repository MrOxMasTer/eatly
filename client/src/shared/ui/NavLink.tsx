'use client';

import type { LinkProps } from 'next/link';
import Link from 'next/link';

import type { UrlObject } from 'url';
import { format } from 'url';

import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils/cn';

interface NavLink extends LinkProps {
    children?: React.ReactNode;
    className?: string;
}

type Url = string | UrlObject;

const isActiveLink = (pathname: string, href: Url) => {
    if (typeof href !== 'string') {
        const normalizeUrl = format(href);

        return pathname.startsWith(normalizeUrl);
    }

    return pathname.startsWith(href);
};

export const NavLink = ({ children, href, className, ...props }: NavLink) => {
    const pathname = usePathname();

    const isActive = isActiveLink(pathname, href);

    return (
        <Link
            {...props}
            className={cn(className, { 'active-link': isActive })}
            href={href}>
            {children}
        </Link>
    );
};
