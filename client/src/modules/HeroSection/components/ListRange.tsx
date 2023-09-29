import { rangeArray } from '../constants/graphicDetails';

export type TListRangeProps = {
    range: string;
    onChangeRange: (range: string) => void;
};

const ListRange = ({ range, onChangeRange }: TListRangeProps) => (
    <ul className="flex max-h-[8px] justify-center">
        {rangeArray.map((item) => (
            <li key={item.value}>
                <label
                    className={`${
                        range === item.value
                            ? ' bg-primary text-white'
                            : 'bg-white text-lightGray'
                    } relative bottom-[12px] cursor-pointer rounded-[7px] px-[5.2px] py-[1.84px] text-[3px] tracking-[0.033px]`}
                    htmlFor={`range-${item.title}`}>
                    {item.title}
                    <input
                        className="hidden"
                        id={`range-${item.title}`}
                        name="range"
                        type="radio"
                        value={item.value}
                        onChange={() => onChangeRange(item.value)}
                    />
                </label>
            </li>
        ))}
    </ul>
);

export default ListRange;
