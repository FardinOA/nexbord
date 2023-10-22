import React from "react";

import LandingBtn from "./Helper/LandingBtn";
import Image from "next/image";

const Hero = () => {
    return (
        <div className=" pt-[20vh] container max-w-6xl mx-auto  ">
            <div className=" z-[1] p-2 grid grid-cols-1 lg:grid-cols-2">
                <div className="   ">
                    <p className="ml-2">POS is live now</p>
                    <p className=" text-[2.5rem] lg:text-[4rem] font-bold">
                        Easy-to-use
                    </p>

                    <p className=" text-[2.5rem] lg:text-[4rem] font-bold">
                        <span>{"Point of sale"}</span>
                        {/* <Cursor cursorColor="#F7ABBA" /> */}
                    </p>
                    <p className="pt-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolores officia pariatur impedit dolor esse rem
                        culpa ducimus dicta ut excepturi.
                    </p>

                    <div className="pt-8">
                        <LandingBtn>Start Free Trail</LandingBtn>
                    </div>
                </div>
                <div className="relative   ">
                    <Image
                        data-scroll
                        data-scroll-delay="0.9"
                        data-scroll-speed="5"
                        alt="pos"
                        src={`/pos-banner.png`}
                        height={0}
                        width={0}
                        sizes="100"
                        className=" h-[100%] w-[80%] lg:h-full lg:w-[100%]    "
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
