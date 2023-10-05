'use client';

import { Dispatch, SetStateAction } from 'react';
import SvgArrowSwitch from '../assets/svg/SvgArrowSwitch';

interface ITextSlider {
    data: string[];
    setValue: Dispatch<SetStateAction<number>>;
    value: number;
}

export const TextSlider = ({ data, value, setValue }: ITextSlider) => {
    const handlerRight = () => {
        if (value === data.length - 1) {
            setValue(0);
        } else {
            setValue((prev: number) => prev + 1);
        }
    };

    const handlerLeft = () => {
        if (value === 0) {
            setValue(data.length - 1);
        } else {
            setValue((prev: number) => prev - 1);
        }
    };

    return (
        <div className="flex">
            <button className="sink" type="button" onClick={handlerLeft}>
                <SvgArrowSwitch />
            </button>
            <ul className="listSlider w-20">
                <li className="mx-auto">{data[value]}</li>
            </ul>
            <button className="" type="button" onClick={handlerRight}>
                <SvgArrowSwitch />
                <span />
            </button>
        </div>
    );
};
