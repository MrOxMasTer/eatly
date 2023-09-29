import { dayArray } from '../constants/graphicDetails';

type TListDayProps = {
    day: string;
    onChangeDay: (day: string) => void;
};

const ListDay = ({ day, onChangeDay }: TListDayProps) => (
    <ul className="mt-[7.51px] flex justify-center gap-[4.5px]">
        {dayArray.map((item) => (
            <li key={item.title} className="max-h-[9px]">
                <label
                    className={`${
                        day === item.value
                            ? ' bg-mercury font-bold text-codGray'
                            : 'bg-white text-lightGray'
                    } relative bottom-[11px] cursor-pointer rounded-[8px] px-[3.84px] py-[2.46px] text-[3px]`}
                    htmlFor={`day-${item.title}`}>
                    {item.title}
                    <input
                        className="hidden"
                        id={`day-${item.title}`}
                        name="day"
                        type="radio"
                        value={item.value}
                        onChange={() => onChangeDay(item.value)}
                    />
                </label>
            </li>
        ))}
    </ul>
);

export default ListDay;
