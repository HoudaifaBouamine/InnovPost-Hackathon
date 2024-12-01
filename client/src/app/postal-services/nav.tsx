"use client"
import React from "react";
import Link from "next/link";
import SignButton from "./SignButton";
import Image from 'next/image';
import { usePathname } from "next/navigation";


const Nav: React.FC = () => {
    const navItems = [
        { name: "Home", path: "/home" },
        { name: "Services", path: "/postal-services/services" },
        { name: "Online services", path: "/postal-services/online-services" },
        { name: "Philately", path: "/postal-services/philately" },
        { name: "Notices", path: "/postal-services/notices-tenders" },
    ];
    const pathName = usePathname();

    return (
        <nav className="p-4 flex items-center mb-4 bg-background">
            <Image src="/Logo.svg" alt="Logo" width={68} height={81} />
            <div className="flex space-x-12 mx-auto">
                {navItems.map((item, index) => (
                   <Link href={item.path} key={index}>
                            <span className={`nav-link text-2xl font-thin  ${pathName === item.path ? 'active' : ''}`}>{item.name}</span>
                        </Link>
                   
                ))}
            </div>
            <div className="ml-auto flex space-x-4 ">
                <SignButton content="Sign in" color="primary" backgroundColor="white"/>
                <SignButton content="Sign up" color="white" backgroundColor="primary" />
                <Image src="/globe.svg" alt="Logo" width={42} height={42} />
            </div>
        </nav>
    );
};

export default Nav;
