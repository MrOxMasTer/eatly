import { NavLink } from '@/shared/ui/NavLink';
import { navigationList } from '../constants/navigationList';

const Menu = () => (
    <nav>
        <ul className="grid gap-5 text-xl font-semibold text-white">
            {navigationList.map(({ href, title }) => (
                <li key={href + title} className="w-min hover:text-white/70">
                    <NavLink href={href}>{title}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default Menu;
