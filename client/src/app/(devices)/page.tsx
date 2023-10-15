import { AdvertisementMobileApp } from '@/widgets/AdvertisementMobileApp/ui/AdvertisementMobileApp';
import { ControlPurchases } from '@/widgets/ControlPurchases';
import { Features } from '@/widgets/Features';
import { HeroSection } from '@/widgets/HeroSection';
import { QuoteCustomer } from '@/widgets/QuoteCustomer';
import { TopDishes } from '@/widgets/TopDishes';
import { TopRestaurants } from '@/widgets/TopRestaurants';

//!В первых трех проблема с key в списке

export default function Home() {
    return (
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
}
