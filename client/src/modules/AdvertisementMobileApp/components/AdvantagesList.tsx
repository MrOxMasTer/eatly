import { TAdvantage } from '../advertisementMobileApp.types';
import { advantagesList } from '../constants/advantagesList';

const AdvantagesList = () => (
    <ul className="mt-[37px] grid gap-4 font-inter text-xs leading-[18px] text-doveGray">
        {advantagesList.map(({ advantage }: TAdvantage) => (
            <li className="flex gap-[3.5px] before:block before:content-['•']">
                {advantage}
            </li>
        ))}
    </ul>
);

export default AdvantagesList;
