'use client';

import { useEffect, useState } from 'react';

import SvgArrowSwitch from '@/assets/svg/SvgArrowSwitch';
import { ITextSlider } from '@/types/ui.types';

const TextSlider = ({ data, returnValue }: ITextSlider) => {
    const [value, setValue] = useState<number>(0);

    const handlerRight = () => {
        if (value === data.length - 1) {
            setValue(0);
        } else {
            setValue((prev) => prev + 1);
        }
    };

    const handlerLeft = () => {
        if (value === 0) {
            setValue(data.length - 1);
        } else {
            setValue((prev) => prev - 1);
        }
    };

    useEffect(() => {
        returnValue(data[value]);
    }, [value]);

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

export default TextSlider;
