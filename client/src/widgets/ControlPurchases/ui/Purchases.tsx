'use client';

import { useState } from 'react';

import { options } from '../constants/optionsPurchases';

import { CardInfoExpense } from './CardInfoExpense';
import { CardInfoVocherUsage } from './CardInfoVocherUsage';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/shared/ui/Select';

export const Purchases = () => {
    const [value, setValue] = useState('month');

    return (
        <div className="relative z-10 mt-[100px] rounded-[15px] bg-white px-[24px] py-[27px]">
            <div className="flex justify-between">
                <h3 className="mt-[2px] font-manrope text-[16.75px] font-extrabold tracking-[0.186px]">
                    Purchases
                </h3>
                <Select
                    value={value}
                    onValueChange={(newValue) => setValue(newValue)}>
                    <SelectTrigger
                        aria-label="decorate-select"
                        className="h-8 w-[104px] rounded-[7.443px] bg-alabaster px-[10.8px] py-[7.32px] font-manrope text-[11px] font-semibold tracking-[0.372px] text-tuna focus:border-none">
                        <SelectValue className="text-tuna" />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((item) => (
                            <SelectItem
                                key={`${item.value}${item.value}`}
                                value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="mt-[26.31px] grid gap-[13px]">
                <CardInfoExpense />
                <CardInfoVocherUsage />
            </div>
        </div>
    );
};
