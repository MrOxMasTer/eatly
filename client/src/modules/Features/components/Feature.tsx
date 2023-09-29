import { TListItem } from '../features.types';

type TFeatureProps = { feature: TListItem };

const Feature = ({ feature }: TFeatureProps) => (
    <div className="border-t border-solid border-lightSilver py-[60px] first:border-none first:text-spindle">
        <h3 className="font-pbSans text-[2.7rem] font-bold leading-[54px] text-white">
            {feature.title}
        </h3>
        <p className="mt-[10.8px] whitespace-pre-line font-inter text-[0.9rem] font-medium leading-[21.6px] text-geyser">
            {feature.subtitle}
        </p>
    </div>
);

export default Feature;
