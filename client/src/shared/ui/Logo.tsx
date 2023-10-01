import type { LinkProps } from 'next/link';
import Link from 'next/link';

import SvgLogo from '../assets/svg/SvgLogo';
import { cn } from '../lib/utils/cn';

interface ILogoProps extends LinkProps {
    className?: string;
}

export const Logo = ({ href, className }: ILogoProps) => (
    <Link className={cn('block w-fit', className)} href={href}>
        <SvgLogo />
    </Link>
);
