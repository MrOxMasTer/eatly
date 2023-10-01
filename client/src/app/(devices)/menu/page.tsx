import { Banner } from '@/shared/ui/Banner';
import { MenuContents } from '@/widgets/MenuContents';
import { TopDishes } from '@/widgets/TopDishes';
import { TopRestaurants } from '@/widgets/TopRestaurants';

const Menu = () => (
    <>
        <div className="container">
            <Banner />
        </div>
        <MenuContents />
        <TopRestaurants />
        <TopDishes />
    </>
);

export default Menu;
