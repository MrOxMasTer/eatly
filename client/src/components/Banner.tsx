import Image from 'next/image';

import SweDish from '../../public/images/sweDish.png';

const Banner = () => (
    <div className="banner relative mt-[62px] rounded-[7.555px] bg-blueViolet bg-banner px-6 py-5">
        <span className="text-[30px] font-extrabold uppercase text-white">
            50% off
            <span className="text-[35px] text-moodyBlue">
                <br />
                weekend
            </span>
        </span>
        <Image
            alt="sweDish"
            className="absolute right-[10px] top-[20px] h-[103.5px] w-[102.77px]"
            src={SweDish}
        />
    </div>
);

export default Banner;
