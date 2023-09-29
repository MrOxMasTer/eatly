import AdvantagesList from './AdvantagesList';
import Mobile from './Mobile';

const AdvertisementMobileApp = () => (
    <article>
        <div className="container py-[4.125rem]">
            <h2 className="text-center text-3xl font-bold capitalize leading-[2.1375rem] text-woodsmoke">
                Premium <span className="text-primary">Quality</span>
                <br />
                For Your Health
            </h2>
            <AdvantagesList />
            <Mobile />
        </div>
    </article>
);

export default AdvertisementMobileApp;
