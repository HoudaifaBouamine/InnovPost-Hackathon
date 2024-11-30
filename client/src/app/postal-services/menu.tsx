"use client"
import { AlignRight } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import SignButton from "./SignButton";
const MenuBar: React.FC = () => {
    const pathName = usePathname();
    const navItems = [
        { name: "Home", path: "/postal-services/home" },
        { name: "Services", path: "/postal-services/services" },
        { name: "Online services", path: "/postal-services/online-services" },
        { name: "Philately", path: "/postal-services/philately" },
        { name: "Notices", path: "/postal-services/notices-tenders" },
    ];
    return (
        <Sheet>
            <SheetTrigger><AlignRight className="text-primary transition-all size-10 hover:text-secondary" /></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="my-6">            <Image src="/Logo.svg" alt="Logo" width={68} height={81} />
                    </SheetTitle>
                    <SheetDescription className="flex flex-col gap-10 w-full ">
                        <div className="flex flex-col w-full">
                            {navItems.map((item, index) => (
                               
                                    <Link href={item.path} key={index} className={` my-8 py-4   ${pathName === item.path ? 'border-b-2 border-primary' : ''}`}>
                                        <span className={`  text-2xl w-full font-thin   ${pathName === item.path ? 'active' : ''}`}>{item.name}</span>
                                    </Link>
                          
                            ))}
                        </div>
                        <div className="ml-auto flex flex-row space-x-4 ">
                            <SignButton content="Sign in" color="primary" backgroundColor="white" />
                            <SignButton content="Sign up" color="white" backgroundColor="primary" />
                            <Image src="/globe.svg" alt="Logo" width={42} height={42} />
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
};
export default MenuBar;