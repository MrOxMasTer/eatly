import Link from 'next/link';

import { listNavigation } from '../constants/listNavigation';

const ListNavigation = () => (
    <ul className="mt-5 grid gap-[30px] py-[32.5px] font-inter text-sm font-medium uppercase text-doveGray">
        {listNavigation.map(({ title, href }) => (
            <li>
                <Link href={href}>{title}</Link>
            </li>
        ))}
    </ul>
);

export default ListNavigation;
