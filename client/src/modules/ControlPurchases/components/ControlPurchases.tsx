import MiniListDishes from './MiniListDishes';
import Purchases from './Purchases';

const ControlPurchases = () => (
    <section className="border-t border-solid border-silver">
        <div className="container py-[85px]">
            <div className="controlPurchases relative before:bg-controlPurchases before:bg-no-repeat">
                <h2 className="text-3xl font-bold capitalize leading-8 text-woodsmoke">
                    Control
                    <span className="text-primary"> Purchases </span>
                    Via Dashboard
                </h2>
                <MiniListDishes />
                <Purchases />
            </div>
        </div>
    </section>
);

export default ControlPurchases;
