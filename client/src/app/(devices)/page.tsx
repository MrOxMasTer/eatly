import { AdvertisementMobileApp } from '@/widgets/AdvertisementMobileApp/ui/AdvertisementMobileApp';
import { ControlPurchases } from '@/widgets/ControlPurchases';
import { Features } from '@/widgets/Features';
import { HeroSection } from '@/widgets/HeroSection';
import { QuoteCustomer } from '@/widgets/QuoteCustomer';
import { TopDishes } from '@/widgets/TopDishes';
import { TopRestaurants } from '@/widgets/TopRestaurants';

const Home = () => (
    <main className="overflow-hidden bg-pureWhite">
        <HeroSection />
        <Features />
        <AdvertisementMobileApp />
        <TopRestaurants className="border-t border-solid border-silver" />
        <TopDishes />
        <ControlPurchases />
        <QuoteCustomer />
    </main>
);

export default Home;
