import Image from 'next/image';

import SweDishBig from '../../../../public/images/SweDishBig.png';

const EmailSubscribe = () => (
    <section>
        <h2 className="visually-hidden">Email Subscribe</h2>
        <div className="container pb-[198px] pt-[79px]">
            <div className="relative rounded-[15px] bg-primary px-[27px] pb-[95px] pt-9">
                <span className="block text-center text-4xl font-extrabold uppercase text-white">
                    get 50%
                </span>
                <div className="mt-4">
                    <div
                        className="flex h-12 w-full items-center justify-between gap-0.5 rounded-[9px] bg-white
                    pl-[14px] pr-[8px] text-gray"
                        style={{
                            boxShadow:
                                '0px 4.72px 29.48px 0px rgba(0, 0, 0, 0.10)',
                        }}>
                        <input
                            className="w-[55%] bg-white outline-none"
                            placeholder="Email Address"
                            type="email"
                        />
                        <button
                            className="btn my-auto h-[38px] w-[94px] rounded-[7.32px]"
                            type="button">
                            <span className="block text-[9.6px] font-medium uppercase tracking-[0.288px] text-[#F7F8FA]">
                                subscribe
                            </span>
                        </button>
                    </div>
                </div>
                <Image
                    alt="decorate sweDish"
                    className="absolute inset-x-0 bottom-[-102px] mx-auto h-[170.6] w-[169px] object-contain"
                    src={SweDishBig}
                />
            </div>
        </div>
    </section>
);

export default EmailSubscribe;
