'use client';

import { useState } from 'react';

import { useFormContext } from 'react-hook-form';

import { Slider } from '@/shared/ui/Slider';

import { arrayRecomended } from '../constants/listRecomended';

import { listMostPopular } from '../constants/listMostPopular';

import { listSliderPrice } from '../constants/listSliderPrice';

import { ListCategory } from './ListCategory';

import { TextSlider } from '@/shared/ui/TextSlider';

export const Filter = () => {
    const { setValue, getValues } = useFormContext();

    const [price, setPrice] = useState<number>(0);
    const [recomended, setRecomended] = useState<number>(
        getValues('recomended'),
    );
    const [mostPopular, setMostPopular] = useState<number>(
        getValues('mostPopular'),
    );

    const middlewareSlider = (newValue: number[]) => {
        const actualValue = newValue[0];

        // 0 - $0
        // 18 - $25
        // 36 - $50
        // 55 - $100
        // 76 - $500
        // 100 - $1000

        if (actualValue === 0) {
            // Метка

            setPrice(0);
        } else if (actualValue >= 1 && actualValue <= 17) {
            // 17 частей на 24 денег

            setPrice(Math.round(actualValue * 1.412));
        } else if (actualValue === 18) {
            // Метка
            setPrice(25);
        } else if (actualValue >= 19 && actualValue <= 35) {
            // 17 +[17] + (1) = 35 частей на 24 + [24] + (1) = 49 денег
            setPrice(Math.round(actualValue * 1.4286));
        } else if (actualValue === 36) {
            // Метка
            setPrice(50);
        } else if (actualValue >= 37 && actualValue <= 54) {
            // 18 + [34] + (2) = 54 частей на 49 + [48] + (2) = 99 денег
            setPrice(Math.round(actualValue * 1.8333));
        } else if (actualValue === 55) {
            // Метка
            setPrice(100);
        } else if (actualValue >= 56 && actualValue <= 75) {
            // 20 + [52] + (3) = 75 частей на 399 + [97] + (3) = 499 денег
            setPrice(Math.round(actualValue * 6.6533));
        } else if (actualValue === 76) {
            // Метка
            setPrice(500);
        } else if (actualValue >= 77 && actualValue <= 99) {
            // 23 + [72] + (4) = 99 частей на 499 + [496] + (4) = 999 денег
            setPrice(Math.round(actualValue * 10.0909));
        } else if (actualValue === 100) {
            // Метка
            setPrice(1000);
        }
    };

    // const returnValueRecomended = (textSliderValue: string) =>
    //     setRecomended(textSliderValue);

    // const returnValueMostPopular = (textSliderValue: string) =>
    //     setMostPopular(textSliderValue);

    const handlerForm = () => {
        setValue('mostPopular', mostPopular);
        setValue('recomended', recomended);
        setValue('price', price);
    };

    return (
        <div
            className="mt-[75px] rounded-[20px] bg-white px-[27.65px] pb-[32.7px] pt-[27px]"
            style={{
                boxShadow:
                    '4.79px 7.98px 23.94px 0.8px rgba(108, 95, 188, 0.12)',
            }}>
            <span className="block text-lg font-semibold text-tuna">
                Category
            </span>
            <ListCategory />
            <span className="mt-5 block text-lg font-semibold text-tuna">
                Sort By
            </span>
            <div className="mt-2.5 flex justify-between">
                <span className="text-[13px] font-medium text-darkGray">
                    Recomended
                </span>
                <TextSlider
                    value={recomended}
                    data={arrayRecomended}
                    setValue={setRecomended}
                />
            </div>
            <div className="mt-[6.65px] flex justify-between">
                <span className="text-[13px] font-medium text-darkGray">
                    Most Popular
                </span>
                <TextSlider
                    value={mostPopular}
                    data={listMostPopular}
                    setValue={setMostPopular}
                />
            </div>
            <span className="mt-5 block text-lg font-semibold text-tuna">
                Price
            </span>
            <div className="mt-[15px]">
                <Slider
                    defaultValue={[0]}
                    max={100}
                    step={1}
                    onValueCommit={(newValue) => {
                        middlewareSlider(newValue);
                    }}
                />
                <ul className="mx-1 mt-2 flex justify-between text-[0.5563rem] font-medium text-frenchGray">
                    {listSliderPrice.map((item) => (
                        <li key={item}>${item}</li>
                    ))}
                </ul>
            </div>
            <button
                className="btn mt-8 w-full rounded-[11.44px] py-[13px] text-[11.5px] font-semibold"
                type="button"
                onClick={handlerForm}>
                Apply
            </button>
        </div>
    );
};
