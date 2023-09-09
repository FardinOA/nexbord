"use client";
import Sidebar from "@/Components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";
import Header from "@/Components/Header";
import { Tooltip as ReactTooltip } from "react-tooltip";

import Particles from "@/Components/UI/ParticlesCmp";
import ParticlesCmp from "@/Components/UI/ParticlesCmp";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathName = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hideSidebar, setHideSidebar] = useState(false);
    const [isDomLoaded, setIsDomLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDomLoaded(true);
        }
    }, []);

    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
                    rel="stylesheet"
                ></link>
            </head>
            <body className={`${inter.className} `}>
                <div className="dark:bg-boxdark-2 dark:text-bodydark ">
                    {isDomLoaded && (
                        <div className="flex h-screen overflow-hidden">
                            {/* <!-- ===== Sidebar Start ===== --> */}
                            {!["/login", "/register"].includes(
                                `${pathName}`
                            ) && (
                                <Sidebar
                                    hideSidebar={hideSidebar}
                                    setHideSidebar={setHideSidebar}
                                    sidebarOpen={sidebarOpen}
                                    setSidebarOpen={setSidebarOpen}
                                />
                            )}
                            {/* <!-- ===== Sidebar End ===== --> */}

                            {/* <!-- ===== Content Area Start ===== --> */}
                            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                                {/* <!-- ===== Header Start ===== --> */}

                                {!["/login", "/register"].includes(
                                    `${pathName}`
                                ) && (
                                    <Header
                                        hideSidebar={hideSidebar}
                                        setHideSidebar={setHideSidebar}
                                        sidebarOpen={sidebarOpen}
                                        setSidebarOpen={setSidebarOpen}
                                    />
                                )}
                                {/* <!-- ===== Header End ===== --> */}

                                {/* <!-- ===== Main Content Start ===== --> */}

                                {["/login", "/register"].includes(
                                    `${pathName}`
                                ) ? (
                                    <main>
                                        <div className="h-screen w-screen flex justify-center items-center ">
                                            {children}
                                        </div>
                                    </main>
                                ) : (
                                    <main>
                                        <div className="relative">
                                            <ParticlesCmp />
                                            <div className="  absolute top-0 right-0 bottom-0 left-0 mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 !z-[1] ">
                                                {children}
                                            </div>
                                        </div>

                                        <ReactTooltip
                                            style={{
                                                zIndex: 5000,
                                            }}
                                            id="dashboard-icon"
                                            place="top"
                                            content="Dashboard"
                                        />
                                        <ReactTooltip
                                            style={{
                                                zIndex: 5000,
                                            }}
                                            id="pos-menu"
                                            place="top"
                                            content="Toggle Pos menu"
                                        />
                                    </main>
                                )}

                                {/* <!-- ===== Main Content End ===== --> */}
                            </div>
                            {/* <!-- ===== Content Area End ===== --> */}
                        </div>
                    )}
                </div>
            </body>
        </html>
    );
}
