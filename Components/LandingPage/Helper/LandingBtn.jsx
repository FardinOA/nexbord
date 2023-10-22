import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
const LandingBtn = ({ className, children, hoverBg }) => {
    return (
        <button
            className={twMerge(
                ` group !bg-[#618afa] hover:bg-[#406ce7] relative overflow-hidden border-none btn bg-transparent  text-black outline-none  rounded-[5px]`,
                `${className}`
            )}
        >
            <span
                className={twMerge(
                    `w-full -translate-x-[100%] group-hover:translate-x-0 bg-[#234cbd71] transition-all duration-500 absolute h-full   border-none rounded-[5px]`
                )}
            ></span>
            <span className="delay-200 left-[-4rem] transition-all duration-500 rotate-45 h-5 w-5 bg-white absolute top-[50%] group-hover:left-[-.9rem] translate-y-[-50%] "></span>
            <span className="delay-200 left-[-4rem] transition-all duration-500 rotate-45 h-4 w-4 bg-white border-[1px] border-black absolute top-[50%] group-hover:left-[-.92rem] translate-y-[-50%] "></span>
            <span className="z-[3]   "> {children}</span>
        </button>
    );
};

export default LandingBtn;
