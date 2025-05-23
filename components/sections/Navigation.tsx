import SvgLogo from "@/components/svg/Logo";
import Link from "next/link";
import MobileMenu from "@/components/mobile-menu";

export const Navigation = () => {
    return <nav>
        <header
            className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-4 flex items-center justify-between relative">
            <div className="flex items-center">
                <SvgLogo className="h-6 sm:h-8 w-auto"/>
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
                <Link href="#" className="text-[#263238] hover:text-[#4caf4f] text-sm lg:text-base">
                    Home
                </Link>
                <Link href="#" className="text-[#263238] hover:text-[#4caf4f] text-sm lg:text-base">
                    Features
                </Link>
                <Link href="#" className="text-[#263238] hover:text-[#4caf4f] text-sm lg:text-base">
                    Community
                </Link>
                <Link href="#" className="text-[#263238] hover:text-[#4caf4f] text-sm lg:text-base">
                    Blog
                </Link>
                <Link href="#" className="text-[#263238] hover:text-[#4caf4f] text-sm lg:text-base">
                    Pricing
                </Link>
            </nav>
            <div className="hidden md:block">
                <button
                    className="bg-[#4caf4f] text-white px-3 py-2 lg:px-4 lg:py-2 rounded-md text-xs lg:text-sm whitespace-nowrap">
                    Register Now →
                </button>
            </div>
            <MobileMenu/>
        </header>
    </nav>;
};