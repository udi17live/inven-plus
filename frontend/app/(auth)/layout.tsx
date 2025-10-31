import React from "react";
import Image from "next/image";
import LogoExtendedLight from "@/components/logo/LogoExtendedLight";

export default function AuthLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <div className="w-full md:w-[45%] h-full p-10 flex flex-col justify-center items-start">
                <LogoExtendedLight className="h-10 mb-4"/>
                <p className="text-xl mb-4">Inventory Management System</p>
                <hr/>
                {children}
            </div>
            <div className="bg-secondary hidden md:block md:w-[55%] h-full relative">
                <Image fill src="/auth_back.jpg" alt="Auth Background" className="absolute object-cover"/>
                <div>Photo by Michelle Townsend from Pexels:
                    https://www.pexels.com/photo/colorful-yarn-on-shelves-6530060/
                </div>
            </div>
        </div>
    )
}