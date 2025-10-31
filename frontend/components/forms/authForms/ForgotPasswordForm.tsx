'use client'

import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ArrowLeft, ArrowRight} from "lucide-react";
import IPButton from "@/components/buttons/IPButton";
import SeparatorWithText from "@/components/misc/SeparatorWithText";
import {useRouter} from "next/navigation";

export default function ForgotPasswordForm() {
    const router = useRouter()
    return (
        <form method="POST" action="/forgot-password" className="flex flex-col space-y-4 w-full">
            <div className="flex flex-col w-full space-y-3">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="w-full px-6 py-6 rounded"
                />
            </div>
            <div className="flex flex-col gap-8">
                <IPButton label="Send Reset Password Link" trailingIcon={ArrowRight}/>
                <SeparatorWithText text="OR"/>
                <IPButton label="Login" leadingIcon={ArrowLeft}
                          className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                          onClick={() => router.push("/login")}/>
            </div>
        </form>
    )
}