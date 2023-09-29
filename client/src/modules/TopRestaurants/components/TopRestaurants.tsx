import ListRestaurants from './ListRestaurants';

import ViewAll from '@/components/ViewAll';

const TopRestaurants = ({
    className = '',
    ...props
}: {
    className?: string;
}) => (
    <section className={className} {...props}>
        <div className="container py-[66px]">
            <h2 className="mt-[1.125rem] text-center text-[1.875rem] font-semibold leading-[120%] text-tuna">
                Our Top <span className="text-primary">Restaurants</span>
            </h2>
            <ListRestaurants />
            <ViewAll className="ml-auto mt-[60px] w-fit" href="/" />
        </div>
    </section>
);

export default TopRestaurants;
