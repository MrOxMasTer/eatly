import { AdvertisementMobileApp } from '@/modules/AdvertisementMobileApp';
import { ControlPurchases } from '@/modules/ControlPurchases';
import { EmailSubscribe } from '@/modules/EmailSubscribe';
import { Features } from '@/modules/Features';
import { HeroSection } from '@/modules/HeroSection';
import { QuoteCustomer } from '@/modules/QuoteCustomer';
import { TopDishes } from '@/modules/TopDishes';
import { TopRestaurants } from '@/modules/TopRestaurants';

const Home = () => (
    <main className="overflow-hidden bg-pureWhite">
        <HeroSection />
        <Features />
        <AdvertisementMobileApp />
        <TopRestaurants className="border-t border-solid border-silver" />
        <TopDishes />
        <ControlPurchases />
        <QuoteCustomer />
        <EmailSubscribe />
    </main>
);

export default Home;
