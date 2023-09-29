import Banner from '@/components/Banner';
import { MenuContents } from '@/modules/MenuContents';
import { TopDishes } from '@/modules/TopDishes';
import { TopRestaurants } from '@/modules/TopRestaurants';

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
