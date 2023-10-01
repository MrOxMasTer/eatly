import { NavLink } from '@/shared/ui/NavLink';
import { navigationList } from '../constants/navigationList';

interface IMenuProps {
    onClose: () => void;
}

export const Menu = ({ onClose }: IMenuProps) => (
    <div className="h-screen w-screen bg-blueViolet">
        <div className="container">
            <div className="relative pt-20">
                <nav>
                    <ul className="grid gap-5 text-xl font-semibold text-white">
                        {navigationList.map(({ href, title }) => (
                            <li
                                key={href + title}
                                className="w-min hover:text-white/70"
                                onClick={onClose}
                                onKeyDown={onClose}>
                                <NavLink href={href}>{title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
);
