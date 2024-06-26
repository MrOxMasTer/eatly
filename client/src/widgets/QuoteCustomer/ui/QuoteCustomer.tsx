'use client';

import { Progress } from '@/shared/ui/Progress';

import { EmailSubscribe } from '@/features/EmailSubscribe';
import { Quote } from './Quote';

export const QuoteCustomer = () => (
    <section className=" relative w-full border-t border-solid border-silver">
        <div className="container pt-[90px]">
            <h2 className="text-center text-[30px] font-semibold leading-[120%] text-tuna">
                <span className="text-primary">Customer</span>
                <br /> Say
            </h2>
            <div className="quote-customer relative">
                <Quote />
            </div>
            <Progress
                aria-label="decorate-progress"
                className="mt-[46px] h-[5px] bg-primary/20"
                classNameIndicator="bg-primary"
                value={30}
            />
            <EmailSubscribe />
        </div>
    </section>
);
