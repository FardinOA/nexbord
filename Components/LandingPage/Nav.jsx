import Link from "next/link";
import React from "react";
import LandingBtn from "./Helper/LandingBtn";

const Nav = () => {
    return (
        <nav className="sticky h-20 inset-x-0 rounded-md px-8 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="container mx-auto max-w-6xl">
                <div className="flex h-20 items-center justify-between  ">
                    <Link href="/" className="flex z-40 font-semibold">
                        <span>Lavish POS.</span>
                    </Link>

                    {/* <MobileNav isAuth={!!user} /> */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        {!true ? (
                            <>
                                <Link href="/pricing">Pricing</Link>
                                <Link href={`/login`}>Sign In</Link>
                                <Link href={"/login"}>
                                    {" "}
                                    <LandingBtn>Get Started</LandingBtn>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href={`/stores`}>
                                    <LandingBtn
                                        hoverBg={"#373e48"}
                                        className="!bg-gray-600 text-white  "
                                    >
                                        Dashboard
                                    </LandingBtn>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
