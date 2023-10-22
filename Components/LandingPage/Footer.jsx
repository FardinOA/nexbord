import React from "react";
import LandingBtn from "./Helper/LandingBtn";

const Footer = () => {
    return (
        <div className="space-y-8 pt-12 p-2 ">
            <div className="container max-w-6xl mx-auto  ">
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                x="0"
                                y="0"
                                version="1.1"
                                viewBox="0 0 494.148 494.148"
                                width="200"
                                height="200"
                                className="h-12 w-12"
                            >
                                <path
                                    d="M405.284 201.188 130.804 13.28C118.128 4.596 105.356 0 94.74 0 74.216 0 61.52 16.472 61.52 44.044v406.124c0 27.54 12.68 43.98 33.156 43.98 10.632 0 23.2-4.6 35.904-13.308l274.608-187.904c17.66-12.104 27.44-28.392 27.44-45.884.004-17.48-9.664-33.764-27.344-45.864z"
                                    fill='url("#SvgjsLinearGradient1059")'
                                ></path>
                                <defs>
                                    <linearGradient id="SvgjsLinearGradient1059">
                                        <stop
                                            stop-color="#3a7bd5"
                                            offset="0"
                                        ></stop>
                                        <stop
                                            stop-color="#3a6073"
                                            offset="1"
                                        ></stop>
                                    </linearGradient>
                                </defs>
                            </svg>{" "}
                            <p className=" text-[1.5rem] font-bold ">POS</p>
                        </div>
                        <p className="ml-[6px]">
                            On the other hand, we denounce with righteous
                            indignation and dislike men who are so
                        </p>
                        <div className="flex gap-4 ml-[6px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                className="bg-white text-[2rem] rounded-full  "
                            >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                            </svg>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className=" text-[1.5rem] font-bold ">
                            Available POS
                        </p>
                        <div className="space-y-2">
                            <p>Food Delivery</p>
                            <p>Furniture Store</p>
                            <p>Coffee Shop</p>
                            <p>Clothing Store</p>
                            <p>eCommerce</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className=" text-[1.5rem] font-bold ">Company</p>
                        <div className="space-y-2">
                            <p>Features</p>
                            <p>FAQ</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className=" text-[1.5rem] font-bold ">
                            Subscribe us
                        </p>
                        <p>
                            Get Business news,tip and solutions to your problems
                            from our experts
                        </p>
                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="input bg-white text-gray-600 w-full "
                            />
                            <LandingBtn className={`w-full  `}>
                                Subscribe
                            </LandingBtn>
                        </div>
                    </div>
                </div>
            </div>

            <p className=" text-center border-t-[1px] w-full py-4 ">
                Copyright {new Date().getFullYear()}. Created by Microdeft{" "}
            </p>
        </div>
    );
};

export default Footer;
