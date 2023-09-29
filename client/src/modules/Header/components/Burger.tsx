import { ButtonHTMLAttributes } from 'react';

const Burger = ({ onClick }: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button className="relative" type="button" onClick={onClick}>
        <div className="flex h-[24px] w-[31.5px] items-center">
            <span className="menu-button block" />
        </div>
    </button>
);

export default Burger;
