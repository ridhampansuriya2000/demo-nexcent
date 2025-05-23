import Image from "next/image";
import Client1Logo from "@/components/svg/Client1Logo";
import Client2Logo from "@/components/svg/Client2Logo";
import Client3Logo from "@/components/svg/Client3Logo";
import Client4Logo from "@/components/svg/Client4Logo";
import Client5Logo from "@/components/svg/Client5Logo";
import Client6Logo from "@/components/svg/Client6Logo";
import Client7Logo from "@/components/svg/Client7Logo";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export const Testimonial = () => {
    return <section
        className="container max-w-none px-4 sm:px-16 lg:px-[200px] py-8 md:py-12 mb-8 md:mb-16 bg-[#f5f7fa] ">
        <div className=" rounded-lg flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0 flex">
                <Image
                    src="/images/tesla-logo.svg"
                    alt="Tesla Logo"
                    width={226}
                    height={226}
                    className="w-[227px] h-[227px] sm:w-24 sm:h-24 md:w-[227px] md:h-[227px] rounded-lg"
                />
            </div>
            <div className="md:w-2/3 lg:w-3/4 md:pl-6 md:pl-8">
                <p className="text-[#717171] mb-4 italic text-xs sm:text-sm">
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
                    risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                    in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
                    molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
                    tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
                    potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate
                    odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus
                    ac sit amet magna.
                </p>
                <div>
                    <p className="font-bold text-[#4caf4f] text-sm sm:text-base py-[10px]">Tim Smith</p>
                    <p className="text-[#717171] text-xs sm:text-sm">British Dragon Boat Racing Association</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-6 md:mt-8 space-x-2 sm:space-x-4">
                    <Client1Logo/>
                    <Client2Logo/>
                    <Client3Logo/>
                    <Client4Logo/>
                    <Client5Logo/>
                    <Client6Logo/>
                    <Client7Logo/>
                    <Link href="#"
                          className="text-[#4caf4f] flex items-center ml-2 sm:ml-4 font-[600] text-xs sm:text-sm">
                        Meet all customers <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4"/>
                    </Link>
                </div>
            </div>

        </div>
    </section>;
};
