"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd, LayoutIcon,
    Map, MapIcon,
    PieChart, Pin, ScrollText,
    Settings2, Shirt,
    SquareTerminal, Users,
} from "lucide-react"

import {NavUser} from "@/components/sidebar/NavUser"
import {NavMain} from "@/components/sidebar/NavMain";
import {TeamSwitcher} from "@/components/sidebar/TeamSwitcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import LogoExtendedLight from "@/components/logo/LogoExtendedLight";
import LogoLight from "@/components/logo/LogoLight";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "All",
            logo: MapIcon,
            plan: "All Locations",
        },
        {
            name: "Colombo",
            logo: MapIcon,
            plan: "Enterprise",
        },
        {
            name: "Delhi",
            logo: MapIcon,
            plan: "Startup",
        }
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/",
            icon: LayoutIcon,
        },
        {
            title: "Factory Inventory",
            url: "#",
            icon: Pin,
            items: [
                {
                    title: "All Items",
                    url: "/factory-inventory/",
                },
                {
                    title: "Item Categories",
                    url: "/factory-inventory/item-categories",
                },
                {
                    title: "Suppliers",
                    url: "/factory-inventory/suppliers",
                },
            ],
        },
        {
            title: "Product Inventory",
            url: "#",
            icon: Shirt,
            items: [
                {
                    title: "All Items",
                    url: "/products/",
                },
                {
                    title: "Categories",
                    url: "/products/categories",
                },
                {
                    title: "Genders",
                    url: "/products/genders",
                },
                {
                    title: "Colors",
                    url: "/products/colors",
                },
                {
                    title: "Sizes",
                    url: "/products/sizes",
                },
            ],
        },
        {
            title: "Sales",
            url: "#",
            icon: ScrollText,
            items: [
                {
                    title: "Invoices",
                    url: "/sales/invoices/",
                },
                {
                    title: "Quotations",
                    url: "/sales/quotations",
                },
                {
                    title: "Purchase Orders",
                    url: "/sales/purchase-orders",
                },
                {
                    title: "Gate Pass",
                    url: "/invoicing/gate-pass",
                },
            ],
        },
        {
            title: "Purchasing",
            url: "#",
            icon: ScrollText,
            items: [
                {
                    title: "Purchase Orders",
                    url: "/purchasing/purchase-orders/",
                },
                {
                    title: "Goods Received Note",
                    url: "/purchasing/goods-received-note",
                },
                {
                    title: "Purchase Orders",
                    url: "/sales/purchase-orders",
                },
            ],
        },
        {
            title: "Users",
            url: "#",
            icon: Users,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <div className="w-full p-4 flex space-x-4 justify-start items-center">
                    <LogoLight className="h-8"/>
                    <LogoExtendedLight className="h-6"/>
                </div>
                <hr/>
                <TeamSwitcher teams={data.teams}/>
                <hr/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                {/*<NavProjects projects={data.projects}/>*/}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
