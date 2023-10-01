import { ButtonHTMLAttributes } from 'react';

const Burger = ({
    onClick,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button
        className="flex h-[24px] w-[31.5px] items-center"
        type="button"
        onClick={onClick}
        {...props}>
        <div className="menu-button" />
    </button>
);

export default Burger;
