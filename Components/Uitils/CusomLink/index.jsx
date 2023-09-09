"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CustomLink = ({ children, href, customStyles }) => {
    const pathName = usePathname();
    const styles = customStyles
        ? customStyles({ isActive: pathName.includes(href) })
        : "";
    return (
        <Link className={styles} href={href}>
            {children}
        </Link>
    );
};

export default CustomLink;
