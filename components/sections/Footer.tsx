import Logo2 from "@/components/svg/Logo2";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return <footer className="bg-[#263238] text-white py-8 sm:py-12 md:py-16">
        <div className="container max-w-none px-4 sm:px-16 xl:px-[200px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 gap-y-6 sm:gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="flex flex-col justify-between items-start">
                    <Logo2 className="h-6 sm:h-8 w-auto"/>
                    {/*<Image*/}
                    {/*    src="/nexcent-logo-white.png"*/}
                    {/*    alt="Nexcent Logo"*/}
                    {/*    width={120}*/}
                    {/*    height={30}*/}
                    {/*    className="h-6 sm:h-8 w-auto mb-4"*/}
                    {/*/>*/}
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">
                        Copyright © 2023 Nexcent ltd.
                        <br/>
                        All rights reserved
                    </p>
                    <div className="flex space-x-3 sm:space-x-4">
                        {[
                            {
                                image: "/images/instagram-icon.svg",
                            },
                            {
                                image: "/images/ball-icon.svg",
                            },
                            {
                                image: "/images/twitter-icon.svg",
                            },
                            {
                                image: "/images/youtube-icon.svg",
                            },
                        ].map((i, index) => (
                            <div
                                key={index}
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#37474f] flex items-center justify-center"
                            >
                                <Image
                                    src={i.image}
                                    alt={`Social Icon ${index}`}
                                    width={16}
                                    height={16}
                                    className="w-3 h-3 sm:w-4 sm:h-4"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Company</h3>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                        <li>
                            <Link href="#">About us</Link>
                        </li>
                        <li>
                            <Link href="#">Blog</Link>
                        </li>
                        <li>
                            <Link href="#">Contact us</Link>
                        </li>
                        <li>
                            <Link href="#">Pricing</Link>
                        </li>
                        <li>
                            <Link href="#">Testimonials</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Support</h3>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                        <li>
                            <Link href="#">Help center</Link>
                        </li>
                        <li>
                            <Link href="#">Terms of service</Link>
                        </li>
                        <li>
                            <Link href="#">Legal</Link>
                        </li>
                        <li>
                            <Link href="#">Privacy policy</Link>
                        </li>
                        <li>
                            <Link href="#">Status</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Stay up to date</h3>
                    <div className="relative flex justify-between items-center max-w-[257px]">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-[#37474f] text-white px-3 py-2 rounded-md text-xs sm:text-sm"
                        />
                        <Image
                            src={'/images/sent-icon.svg'}
                            alt={`sent Icon `}
                            width={16}
                            height={16}
                            className="w-3 h-3 sm:w-4 sm:h-4 absolute right-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    </footer>;
};
