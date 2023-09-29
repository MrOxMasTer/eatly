'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import Graphic from './Graphic';
import ListDay from './ListDay';
import ListRange from './ListRange';

const BlockGraphic = () => {
    const [range, setRange] = useState('main');
    const [day, setDay] = useState('2D');

    const blockGraphicVariants = {
        hidden: { x: -100, opacity: 0 },
        show: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className="absolute bottom-[15px] left-[12px] h-[97.5px] w-[98.2px] rounded-[8px] bg-white"
            style={{
                filter: 'drop-shadow(6.36px -7.95px 13.26px rgba(0, 0, 0, 0.15))',
            }}
            variants={blockGraphicVariants}>
            <div className="graphic relative pb-[5px] pt-1.5 before:bg-graphic">
                <ListRange
                    range={range}
                    onChangeRange={(item) => setRange(item)}
                />
                <Graphic />
                <ListDay day={day} onChangeDay={(item) => setDay(item)} />
            </div>
        </motion.div>
    );
};

export default BlockGraphic;
