import { Link } from 'lucide-react';

import { listSocials } from '../constants/listSocials';

const ListSocials = () => (
    <ul>
        {listSocials.map(({ name, href, src }) => (
            <li>
                <Link href={href}>
                    {/* <Image
                        alt={name}
                        className="h-auto w-auto"
                        height={16}
                        src={src}
                        width={16}
                    /> */}
                </Link>
            </li>
        ))}
    </ul>
);

export default ListSocials;
