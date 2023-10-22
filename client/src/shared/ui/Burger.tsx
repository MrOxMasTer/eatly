import Link from 'next/link';

const Burger = () => (
    <Link
        aria-label="burger"
        className="flex h-[24px] w-[31.5px] items-center"
        href={{ query: { modalActive: true } }}>
        <div className="menu-button" />
    </Link>
);

export default Burger;
