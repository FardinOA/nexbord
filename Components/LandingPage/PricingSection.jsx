import { cn } from "@/service/utils";

import Link from "next/link";
import LandingBtn from "./Helper/LandingBtn";
import Image from "next/image";
const PricingSection = () => {
    const pricingItems = [
        {
            plan: "Free",
            price: 0,
            tagline: "For small side projects.",
            quota: 10,
            features: [
                {
                    text: "5 pages per PDF",
                    footnote: "The maximum amount of pages per PDF-file.",
                },
                {
                    text: "4MB file size limit",
                    footnote: "The maximum file size of a single PDF file.",
                },
                {
                    text: "Mobile-friendly interface",
                },
                {
                    text: "Higher-quality responses",
                    footnote:
                        "Better algorithmic responses for enhanced content quality",
                    negative: true,
                },
                {
                    text: "Priority support",
                    negative: true,
                },
            ],
        },
        {
            plan: "Pro",
            price: 100,
            tagline: "For larger projects with higher needs.",
            quota: "Quota for larger project",
            features: [
                {
                    text: "25 pages per PDF",
                    footnote: "The maximum amount of pages per PDF-file.",
                },
                {
                    text: "16MB file size limit",
                    footnote: "The maximum file size of a single PDF file.",
                },
                {
                    text: "Mobile-friendly interface",
                },
                {
                    text: "Higher-quality responses",
                    footnote:
                        "Better algorithmic responses for enhanced content quality",
                },
                {
                    text: "Priority support",
                },
            ],
        },
    ];

    return (
        <>
            <div className="mb-8 mt-24 text-center  max-w-6xl">
                <div className="mx-auto mb-10 sm:max-w-lg">
                    <h1 className="text-6xl font-bold sm:text-7xl">Pricing</h1>
                    <p className="mt-5 text-gray-600 sm:text-lg">
                        Whether you&apos;re just trying out our service or need
                        more, we&apos;ve got you covered.
                    </p>
                </div>

                <div className=" max-w-3xl mx-auto pt-12 grid place-content-center grid-cols-1 gap-10 lg:grid-cols-2">
                    {pricingItems.map(
                        ({ plan, tagline, quota, features, price }) => {
                            // const price =
                            //   PLANS.find(
                            //     (p) => p.slug === plan.toLowerCase()
                            //   )?.price.amount || 0

                            return (
                                <div
                                    key={plan}
                                    className={cn(
                                        "relative rounded-2xl bg-white shadow-lg",
                                        {
                                            "border-2 border-blue-600 shadow-blue-200":
                                                plan === "Pro",
                                            "border border-gray-200":
                                                plan !== "Pro",
                                        }
                                    )}
                                >
                                    {plan === "Pro" && (
                                        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                                            Upgrade now
                                        </div>
                                    )}
                                    {plan === "Pro" && (
                                        <Image
                                            src={`/pro-badge.png`}
                                            alt="pro"
                                            width={0}
                                            height={0}
                                            sizes="100"
                                            className="absolute -right-2 -top-2 h-[8rem] w-[8rem]  "
                                        />
                                    )}

                                    <div className="p-5">
                                        <h3 className="my-3 text-center  text-3xl font-bold">
                                            {plan}
                                        </h3>
                                        <p className="text-gray-500">
                                            {tagline}
                                        </p>
                                        <p className="my-5  text-6xl font-semibold">
                                            ${price}
                                        </p>
                                        <p className="text-gray-500">
                                            per month
                                        </p>
                                    </div>

                                    <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                                        <div className="  ">
                                            <p>
                                                {quota.toLocaleString()} PDFs/mo
                                                included
                                            </p>
                                        </div>
                                    </div>

                                    <ul className="my-10 space-y-5 px-8">
                                        {features.map(
                                            ({ text, footnote, negative }) => (
                                                <li
                                                    key={text}
                                                    className="flex items-center space-x-5"
                                                >
                                                    <div className="flex-shrink-0">
                                                        {negative ? "-" : "$"}
                                                    </div>
                                                    {footnote ? (
                                                        <div className="flex items-center space-x-1">
                                                            <p
                                                                className={cn(
                                                                    "text-gray-600",
                                                                    {
                                                                        "text-gray-400":
                                                                            negative,
                                                                    }
                                                                )}
                                                            >
                                                                {text}
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <p
                                                            className={cn(
                                                                "text-gray-600",
                                                                {
                                                                    "text-gray-400":
                                                                        negative,
                                                                }
                                                            )}
                                                        >
                                                            {text}
                                                        </p>
                                                    )}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="border-t border-gray-200" />
                                    <div className="p-5">
                                        {plan === "Free" ? (
                                            <Link
                                                href={
                                                    true
                                                        ? "/dashboard"
                                                        : "/login"
                                                }
                                            >
                                                <LandingBtn
                                                    className={`w-full`}
                                                >
                                                    {true
                                                        ? "Upgrade now"
                                                        : "Sign In"}
                                                    {">"}
                                                </LandingBtn>
                                            </Link>
                                        ) : true ? (
                                            // <UpgradeButton />
                                            <LandingBtn className={`w-full`}>
                                                Upgrade
                                            </LandingBtn>
                                        ) : (
                                            // <button className="btn bg-primary w-full border-none hover:bg-primary/90 ">

                                            // </button>
                                            <Link href="/login">
                                                <LandingBtn
                                                    className={"w-full"}
                                                >
                                                    {true
                                                        ? "Upgrade now"
                                                        : "Sign In"}
                                                    {">"}
                                                </LandingBtn>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </>
    );
};

export default PricingSection;
