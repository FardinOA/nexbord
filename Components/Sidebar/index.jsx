"use client";
import React, { useEffect, useRef, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Link from "next/link";

import { usePathname } from "next/navigation";
import CustomLink from "../Uitils/CusomLink";

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
    hideSidebar,
    setHideSidebar,
}) => {
    const pathname = usePathname();

    const trigger = useRef(null);
    const sidebar = useRef(null);
    let storedSidebarExpanded;
    if (typeof window !== "undefined") {
        storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    }

    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null
            ? false
            : storedSidebarExpanded === "true"
    );

    // close on click outside
    useEffect(() => {
        if (window?.innerWidth < 900) {
            setHideSidebar(false);
        }

        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document
                .querySelector("body")
                ?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={` ${
                hideSidebar && "w-[7rem]"
            } absolute left-0 top-0 z-9999  h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark dark:text-whiteForDark lg:static lg:translate-x-0 ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className={` ${hideSidebar ? "hidden" : "block"}   h-full  `}>
                {/* <i className="ri-arrow-left-circle-line absolute top-4 right-[0rem] cursor-pointer text-4xl "></i> */}

                {/* <!-- SIDEBAR HEADER --> */}
                <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                    <Link href="/">
                        {/* <img src={Logo} alt="Logo" /> */} LOGO
                    </Link>

                    <button
                        ref={trigger}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                        className="block lg:hidden"
                    >
                        <svg
                            className="fill-current"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
                {/* <!-- SIDEBAR HEADER --> */}

                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                        {/* <!-- Menu Group --> */}
                        <div>
                            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 dark:text-whiteForDark">
                                MENU
                            </h3>

                            <ul className="mb-6 flex flex-col gap-1.5">
                                <li>
                                    <Link
                                        href="/"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                    >
                                        <i className="ri-dashboard-line"></i>
                                        Dashboard
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/tables"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/tables" ||
                                                pathname.includes("tables")) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                    >
                                        <i class="ri-table-fill"></i>
                                        Tables
                                    </Link>
                                </li>

                                <SidebarLinkGroup
                                    activeCondition={pathname.includes("pos")}
                                >
                                    {(handleClick, open) => {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    href="#"
                                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                        pathname.includes(
                                                            "pos"
                                                        ) &&
                                                        "bg-graydark dark:bg-meta-4"
                                                    }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded
                                                            ? handleClick()
                                                            : setSidebarExpanded(
                                                                  true
                                                              );
                                                    }}
                                                >
                                                    POS
                                                    <i
                                                        className={`ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                            open && "rotate-180"
                                                        }`}
                                                    ></i>
                                                </Link>
                                                {/* <!-- Dropdown Menu Start --> */}
                                                <div
                                                    className={`translate transform overflow-hidden ${
                                                        !open && "hidden"
                                                    }`}
                                                >
                                                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                        <li>
                                                            <CustomLink
                                                                href={"/pos"}
                                                                customStyles={({
                                                                    isActive,
                                                                }) => {
                                                                    return (
                                                                        "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 dark:text-whiteForDark duration-300 ease-in-out hover:text-white " +
                                                                        (isActive &&
                                                                            "!text-white")
                                                                    );
                                                                }}
                                                            >
                                                                POS
                                                            </CustomLink>
                                                        </li>
                                                        <li>
                                                            <CustomLink
                                                                href="/pos/orders"
                                                                customStyles={({
                                                                    isActive,
                                                                }) =>
                                                                    "group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 dark:text-whiteForDark duration-300 ease-in-out hover:text-white " +
                                                                    (isActive &&
                                                                        "!text-white")
                                                                }
                                                            >
                                                                All Orders
                                                            </CustomLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- Dropdown Menu End --> */}
                                            </React.Fragment>
                                        );
                                    }}
                                </SidebarLinkGroup>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- Sidebar Menu --> */}
                </div>
            </div>

            {/* for lg  */}
            <div
                className={`${
                    hideSidebar ? " lg:block " : "hidden"
                }  h-full w-[7rem]`}
            >
                {/* <i className="ri-arrow-left-circle-line absolute top-4 right-[0rem] cursor-pointer text-4xl "></i> */}

                {/* <!-- SIDEBAR HEADER --> */}
                <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                    <Link href="/">
                        {/* <img src={Logo} alt="Logo" /> */} LOGO
                    </Link>

                    <button
                        ref={trigger}
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                        className="block lg:hidden"
                    >
                        <svg
                            className="fill-current"
                            width="20"
                            height="18"
                            viewBox="0 0 20 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
                {/* <!-- SIDEBAR HEADER --> */}

                <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                        {/* <!-- Menu Group --> */}
                        <div>
                            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2 dark:text-whiteForDark">
                                MENU
                            </h3>

                            <ul className="mb-6 flex flex-col gap-1.5">
                                <li
                                    data-tooltip-id="dashboard-icon"
                                    className=" w-full"
                                >
                                    <Link
                                        href="/"
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                            (pathname === "/" ||
                                                pathname.includes(
                                                    "dashboard"
                                                )) &&
                                            "bg-graydark dark:bg-meta-4"
                                        }`}
                                    >
                                        <i className="ri-dashboard-line mx-auto "></i>
                                    </Link>
                                </li>

                                <SidebarLinkGroup
                                    activeCondition={pathname.includes("pos")}
                                >
                                    {(handleClick, open) => {
                                        return (
                                            <React.Fragment>
                                                <Link
                                                    data-tooltip-id="pos-menu"
                                                    href="#"
                                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                                        pathname.includes(
                                                            "pos"
                                                        ) &&
                                                        "bg-graydark dark:bg-meta-4"
                                                    }`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded
                                                            ? handleClick()
                                                            : setSidebarExpanded(
                                                                  true
                                                              );
                                                    }}
                                                >
                                                    <i className="ri-stock-fill"></i>
                                                    <i
                                                        className={`ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                                                            open && "rotate-180"
                                                        }`}
                                                    ></i>
                                                </Link>
                                                {/* <!-- Dropdown Menu Start --> */}
                                                <div
                                                    className={`translate transform overflow-hidden ${
                                                        !open && "hidden"
                                                    }`}
                                                >
                                                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                        <li className="">
                                                            <CustomLink
                                                                href="/pos"
                                                                customStyles={({
                                                                    isActive,
                                                                }) =>
                                                                    "group relative  duration-300 ease-in-out hover:text-white " +
                                                                    (isActive &&
                                                                        "!text-white")
                                                                }
                                                            >
                                                                <i className="ri-stock-fill"></i>
                                                            </CustomLink>
                                                        </li>
                                                        <li>
                                                            <CustomLink
                                                                href="/pos/orders"
                                                                customStyles={({
                                                                    isActive,
                                                                }) =>
                                                                    "group relative  duration-300 ease-in-out hover:text-white " +
                                                                    (isActive &&
                                                                        "!text-white")
                                                                }
                                                            >
                                                                <i className="ri-stock-fill"></i>
                                                            </CustomLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <!-- Dropdown Menu End --> */}
                                            </React.Fragment>
                                        );
                                    }}
                                </SidebarLinkGroup>
                            </ul>
                        </div>
                    </nav>
                    {/* <!-- Sidebar Menu --> */}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
