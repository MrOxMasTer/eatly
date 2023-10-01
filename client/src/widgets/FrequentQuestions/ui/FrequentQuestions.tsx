'use client';

import { listAccordion } from '../constants/listAccordion';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/shared/ui/Accordion';

export const FrequentQuestions = () => (
    <section className="mb-24 border-t border-solid border-silver">
        <div className="container">
            <div className="inline-flex w-full">
                <h2 className="relative mx-auto mt-[5.7813rem] inline-block text-center text-[1.4774rem] font-semibold leading-[120%] after:absolute after:right-[-27px] after:top-[-12px] after:content-titleFrequentQuestions">
                    Frequently Asked
                    <br />
                    <span className=" inline text-primary"> Questions</span>
                </h2>
            </div>
            <Accordion collapsible className="mt-16" type="single">
                {listAccordion.map(({ trigger, content }, index) => (
                    <AccordionItem
                        key={`item-${index + 1}`}
                        className="border-b-[0.556px] border-solid border-silver decoration-0"
                        value={`item-${index + 1}`}>
                        <AccordionTrigger className="text-left text-[0.7688rem] font-semibold leading-[1.9375rem]">
                            {trigger}
                        </AccordionTrigger>
                        <AccordionContent className="text-justify text-[0.6875rem] leading-[160%] tracking-[0.0069rem] text-silverChalice">
                            {content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
);
