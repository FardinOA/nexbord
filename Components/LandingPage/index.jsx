"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";

import PricingSection from "./PricingSection";
import Footer from "./Footer";
// import "locomotive-scroll/dist/locomotive-scroll.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll/module";
import ScrollTriggerProxy from "./ScrollTriggerProxy";
const LandingPage = () => {
    const containerRef = useRef(null);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, []);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
                // ... all available Locomotive Scroll instance options
                smartphone: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            }}
            watch={
                [
                    //..all the dependencies you want to watch to update the scroll.
                    //  Basicaly, you would want to watch page/location changes
                    //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
                ]
            }
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                <Nav />

                <div data-scroll-section>
                    <div className=" landing-hero-polygon bg-[#F3F9FE] h-screen">
                        {" "}
                        <Hero />
                    </div>
                    <div className="mt-4 p-4 md:p-0 overflow-hidden ">
                        <div className="container max-w-6xl mx-auto space-y-8 relative ">
                            <div className="space-y-4">
                                <h2
                                    data-scroll
                                    data-scroll-speed="-.1"
                                    className="text-center shadow-lg lg:text-[3rem] mx-auto w-fit py-1 px-4 bg-white rounded-full ring-8 ring-zinc-300 "
                                >
                                    Manage business easily with POS
                                </h2>
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Provident esse ut nihil
                                    qui. Nemo, optio. Quo sint odit maiores
                                    numquam provident nihil aliquam explicabo
                                </p>
                            </div>
                            <div className="min-h-screen w-full    ">
                                <div className="grid items-center align-middle gap-8 grid-cols-1 md:grid-cols-3 ">
                                    <div
                                        data-scroll
                                        data-scroll-speed="-.9"
                                        data-scroll-direction="horizontal"
                                        className="space-y-4"
                                    >
                                        <div className=" relative overflow-hidden h-[26rem] rounded-2xl bg-[#FFCB44] ">
                                            <Image
                                                src={`/pos-landing-1.png`}
                                                alt="order"
                                                height={0}
                                                width={0}
                                                sizes="100"
                                                className=" w-[100%] h-full absolute top-[-2rem] left-[50%] translate-x-[-50%]  "
                                            />
                                        </div>
                                        <div className="px-2 ">
                                            <h4 className="text-center font-bold text-[1.35rem] lg:text-[1.7rem] ">
                                                User-Friendly Interface
                                            </h4>
                                            <p className="text-center text-base text-zinc-400 ">
                                                Ensuring staff can quickly
                                                navigate the application without
                                                extensive training
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className=" relative overflow-hidden h-[26rem] rounded-2xl bg-[#FFCB44] ">
                                            <Image
                                                src={`/pos-landing-2.png`}
                                                alt="order"
                                                height={0}
                                                width={0}
                                                sizes="100"
                                                className=" w-[100%] h-full absolute bottom-[-2rem] left-[50%] translate-x-[-50%]  "
                                            />
                                        </div>
                                        <div className="px-2 ">
                                            <h4 className="text-center font-bold text-[1.35rem] lg:text-[1.7rem]">
                                                User-Friendly Interface
                                            </h4>
                                            <p className="text-center text-base text-zinc-400 ">
                                                Ensuring staff can quickly
                                                navigate the application without
                                                extensive training
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        data-scroll
                                        data-scroll-speed=".9"
                                        data-scroll-direction="horizontal"
                                        className="space-y-4"
                                    >
                                        <div className="relative overflow-hidden h-[26rem] rounded-2xl bg-[#FFCB44] ">
                                            <Image
                                                src={`/pos-landing-3.png`}
                                                alt="order"
                                                height={0}
                                                width={0}
                                                sizes="100"
                                                className=" w-[100%] p-4 h-[60%] absolute top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%]  "
                                            />
                                        </div>
                                        <div className="px-2 ">
                                            <h4 className="text-center font-bold text-[1.35rem] lg:text-[1.7rem] ">
                                                User-Friendly Interface
                                            </h4>
                                            <p className="text-center text-base text-zinc-400 ">
                                                Ensuring staff can quickly
                                                navigate the application without
                                                extensive training
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="  bg-gradient-to-b from-[#F7F8F1] to-[#F3F9FE] ">
                        <div className="relative isolate">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="200"
                                viewBox="0 0 409.6 409.6"
                                className="absolute -top-[10rem] z-[1] right-[10rem] opacity-30 "
                            >
                                <path
                                    d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
                                    fill='url("#SvgjsLinearGradient1042")'
                                ></path>
                                <defs>
                                    <linearGradient id="SvgjsLinearGradient1042">
                                        <stop
                                            stop-color="#74ebd5"
                                            offset="0"
                                        ></stop>
                                        <stop
                                            stop-color="#9face6"
                                            offset="1"
                                        ></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                    }}
                                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                />
                            </div>

                            <div className="z-[2]">
                                <div className="mx-auto max-w-6xl px-6 lg:px-8">
                                    <div className="mt-16 flow-root sm:mt-24">
                                        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                            <Image
                                                src="/pos-dashboard.png"
                                                alt="product preview"
                                                width={1364}
                                                height={866}
                                                quality={100}
                                                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            >
                                <div
                                    style={{
                                        clipPath:
                                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                    }}
                                    className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                                />
                            </div>
                        </div>
                    </div>
                    {/*  */}

                    <div className="bg-[#F6F4FF] min-h-screen flex items-center justify-center ">
                        <div className="container max-w-6xl mx-auto space-y-8 ">
                            <div></div>
                            <div className="grid items-center align-middle gap-8 grid-cols-1 md:grid-cols-4 ">
                                {" "}
                                <div
                                    data-scroll
                                    data-scroll-speed="2"
                                    className="h-[380px] overflow-hidden space-y-6 p-2 px-8 group bg-[#fff] rounded-xl  shadow-lg "
                                >
                                    <div className="flex h-[130px] justify-between flex-shrink ">
                                        <p className=" text-[2rem] lg:text-[2vw]  group-hover:scale-90  transition-all duration-300 self-end  bg-lightBlue-600 w-[4rem] h-[4rem] rounded-[4rem] flex justify-center items-center   ">
                                            +
                                        </p>

                                        <p className=" text-[5rem] lg:text-[4vw] text-zinc-200 self-start ">
                                            01
                                        </p>
                                    </div>
                                    <div className="space-y-2 pb-3">
                                        <h4 className=" text-[2rem] lg:text-[1.3vw] font-bold leading-8 text-left ">
                                            Recipe management & costing
                                        </h4>
                                        <p className=" text-[1rem] lg:text-[1vw] leading-7 ">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Quae
                                            fugit quisquam alias suscipit minima
                                            asperiores obcaecati unde veritatis.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-scroll
                                    data-scroll-speed="-1"
                                    className="h-[380px] overflow-hidden space-y-6 p-2 px-8 group bg-[#fff] rounded-xl   shadow-lg "
                                >
                                    <div className="flex h-[130px] justify-between flex-shrink ">
                                        <p className=" text-[2rem] lg:text-[2vw]  group-hover:scale-90  transition-all duration-300 self-end  bg-lightBlue-600 w-[4rem] h-[4rem] rounded-[4rem] flex justify-center items-center   ">
                                            +
                                        </p>

                                        <p className=" text-[5rem] lg:text-[4vw] text-zinc-200 self-start ">
                                            01
                                        </p>
                                    </div>
                                    <div className="space-y-2 pb-3">
                                        <h4 className=" text-[2rem] lg:text-[1.3vw] font-bold leading-8 text-left ">
                                            Recipe management & costing
                                        </h4>
                                        <p className=" text-[1rem] lg:text-[1vw] leading-7 ">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Quae
                                            fugit quisquam alias suscipit minima
                                            asperiores obcaecati unde veritatis.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-scroll
                                    data-scroll-speed="2"
                                    className="h-[380px] overflow-hidden space-y-6 p-2 px-8 group bg-[#fff] rounded-xl  shadow-lg "
                                >
                                    <div className="flex h-[130px] justify-between flex-shrink ">
                                        <p className=" text-[2rem] lg:text-[2vw]  group-hover:scale-90  transition-all duration-300 self-end  bg-lightBlue-600 w-[4rem] h-[4rem] rounded-[4rem] flex justify-center items-center   ">
                                            +
                                        </p>

                                        <p className=" text-[5rem] lg:text-[4vw] text-zinc-200 self-start ">
                                            01
                                        </p>
                                    </div>
                                    <div className="space-y-2 pb-3">
                                        <h4 className=" text-[2rem] lg:text-[1.3vw] font-bold leading-8 text-left ">
                                            Recipe management & costing
                                        </h4>
                                        <p className=" text-[1rem] lg:text-[1vw] leading-7 ">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Quae
                                            fugit quisquam alias suscipit minima
                                            asperiores obcaecati unde veritatis.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-scroll
                                    data-scroll-speed="-1"
                                    className="h-[380px] overflow-hidden space-y-6 p-2 px-8 group bg-[#fff] rounded-xl   shadow-lg "
                                >
                                    <div className="flex h-[130px] justify-between flex-shrink ">
                                        <p className=" text-[2rem] lg:text-[2vw]  group-hover:scale-90  transition-all duration-300 self-end  bg-lightBlue-600 w-[4rem] h-[4rem] rounded-[4rem] flex justify-center items-center   ">
                                            +
                                        </p>

                                        <p className=" text-[5rem] lg:text-[4vw] text-zinc-200 self-start ">
                                            01
                                        </p>
                                    </div>
                                    <div className="space-y-2 pb-3">
                                        <h4 className=" text-[2rem] lg:text-[1.3vw] font-bold leading-8 text-left ">
                                            Recipe management & costing
                                        </h4>
                                        <p className=" text-[1rem] lg:text-[1vw] leading-7 ">
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit. Quae
                                            fugit quisquam alias suscipit minima
                                            asperiores obcaecati unde veritatis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden bg-[#D1ECEC] min-h-screen flex items-center justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Capa_1"
                            width="200"
                            height="200"
                            x="0"
                            y="0"
                            version="1.1"
                            viewBox="0 0 402.85 402.851"
                            className="absolute top-0 left-0 rotate-45  "
                        >
                            <path
                                d="M97.158 402.851c.717 0 1.434-.275 1.984-.822l50.721-50.715a2.804 2.804 0 0 0 0-3.962l-46.721-46.718 48.767-48.769c1.086-1.084 1.086-2.867 0-3.961l-46.537-46.523 49.002-49.002a2.805 2.805 0 0 0 0-3.962l-46.715-46.72 48.767-48.766a2.807 2.807 0 0 0 0-3.962L108.276.821a2.799 2.799 0 0 0-3.961 0 2.804 2.804 0 0 0 0 3.961l46.167 46.165-48.739 48.736a2.808 2.808 0 0 0 0 3.961c.08.08.175.107.257.17.096.134.153.285.271.402l46.166 46.172L99.7 199.124c-.696.695-.898 1.653-.715 2.545a2.79 2.79 0 0 0 .808 2.041l46.167 46.183-48.739 48.723c-1.085 1.096-1.085 2.879 0 3.963.08.087.17.114.254.164.094.131.145.284.273.405l46.166 46.161-48.731 48.728c-1.092 1.095-1.092 2.884 0 3.962.533.586 1.258.852 1.975.852zm75.624 0a2.8 2.8 0 0 0 1.982-.822l50.718-50.715a2.822 2.822 0 0 0 0-3.962l-46.712-46.718 48.771-48.769c1.078-1.084 1.078-2.867 0-3.961L181 201.381l49.007-49.002a2.813 2.813 0 0 0 0-3.962l-46.715-46.714 48.769-48.767a2.802 2.802 0 0 0 0-3.961L183.908.832a2.8 2.8 0 1 0-3.961 3.961l46.165 46.165-48.731 48.737a2.804 2.804 0 0 0 0 3.961c.074.074.161.101.246.164.096.134.146.29.274.408l46.171 46.173-48.735 48.736c-.689.69-.892 1.643-.713 2.534a2.806 2.806 0 0 0 .806 2.06l46.184 46.178-48.766 48.721a2.818 2.818 0 0 0 0 3.962c.08.076.17.115.248.153.101.131.152.295.28.405l46.164 46.174-48.734 48.727a2.799 2.799 0 0 0 0 3.961c.533.573 1.25.839 1.976.839zm75.627 0a2.77 2.77 0 0 0 1.983-.822l50.726-50.715a2.804 2.804 0 0 0 0-3.962l-46.72-46.718 48.765-48.769a2.8 2.8 0 0 0 0-3.961l-46.532-46.523 49.007-49.002a2.846 2.846 0 0 0 0-3.962l-46.732-46.72 48.769-48.766a2.814 2.814 0 0 0 0-3.962L259.517.821c-1.094-1.095-2.883-1.095-3.961 0a2.802 2.802 0 0 0 0 3.961l46.155 46.165-48.728 48.736a2.8 2.8 0 0 0 0 3.961c.079.08.159.107.263.17.109.134.139.285.265.402l46.173 46.172-48.746 48.736c-.69.695-.876 1.653-.71 2.545a2.769 2.769 0 0 0 .818 2.041l46.173 46.183-48.742 48.723c-1.083 1.096-1.083 2.879 0 3.963.075.087.164.114.249.164.102.131.134.284.274.405l46.173 46.161-48.731 48.728c-1.097 1.095-1.097 2.884 0 3.962a2.615 2.615 0 0 0 1.967.852z"
                                fill='url("#SvgjsLinearGradient1055")'
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1055">
                                    <stop
                                        stop-color="#e1eec3"
                                        offset="0"
                                    ></stop>
                                    <stop
                                        stop-color="#f05053"
                                        offset="1"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="200"
                            height="200"
                            viewBox="0 0 409.6 409.6"
                            className="absolute right-0 bottom-0 "
                        >
                            <path
                                d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0"
                                fill='url("#SvgjsLinearGradient1042")'
                            ></path>
                            <defs>
                                <linearGradient id="SvgjsLinearGradient1042">
                                    <stop
                                        stop-color="#74ebd5"
                                        offset="0"
                                    ></stop>
                                    <stop
                                        stop-color="#9face6"
                                        offset="1"
                                    ></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="container max-w-6xl mx-auto  ">
                            <PricingSection />
                        </div>
                    </div>

                    <div className=" bg-[#000]  text-[#ffffff92] h-fit ">
                        <Footer />
                    </div>
                </div>
            </div>
        </LocomotiveScrollProvider>
    );
};

export default LandingPage;
