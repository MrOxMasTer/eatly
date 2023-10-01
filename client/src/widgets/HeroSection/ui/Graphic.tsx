'use client';

import {
    CartesianGrid,
    Line,
    LineChart,
    ReferenceDot,
    ResponsiveContainer,
} from 'recharts';

import { useEffect, useState } from 'react';

import { main } from '../constants/dataGraphic';

export const Graphic = () => {
    const [yes, setYes] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setYes(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative mt-[10px] w-full overflow-hidden">
            <ResponsiveContainer height={50} width="100%">
                <LineChart
                    className="relative"
                    data={main}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <CartesianGrid
                        horizontal
                        horizontalPoints={[17, 29, 41]}
                        opacity={0.09}
                        stroke="#6C5FBC"
                        strokeLinecap="round"
                        strokeWidth={0.277816}
                        vertical={false}
                    />
                    <Line
                        dataKey="money"
                        dot={false}
                        stroke="#6C5FBC"
                        strokeWidth={0.944}
                        type="monotone"
                    />
                    <ReferenceDot
                        className={!yes ? 'hidden' : 'block'}
                        fill="#C5BFED"
                        r={1.5}
                        stroke="#6C5FBC"
                        strokeWidth={1}
                        x={11}
                        y={409}>
                        {/* <Label
                            offset={0}
                            position="insideBottom"
                            value="$409"
                        /> */}
                    </ReferenceDot>
                </LineChart>
            </ResponsiveContainer>
            <span
                className={`${
                    !yes ? 'hidden' : 'block'
                } absolute right-[8px] top-[8px] block h-[6px] w-fit rounded-[7.955px] bg-primary px-[2.5px] py-[0.8px] text-[2.6px] font-semibold text-white`}>
                <span className="relative right-[0.3px] top-[-10px]">$409</span>
            </span>
        </div>
    );
};

/* <Label
    className="rounded-[7.955px] bg-primary px-[2.5px] py-[0.8px]"
    offset={1}
    position="insideTopRight"
    value="$409"></Label>; */
