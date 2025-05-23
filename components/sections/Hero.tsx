import Image from "next/image";

export const Hero = () => {
    return <section
        className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 md:pt-16 lg:pt-24 pb-6 sm:pb-8 flex flex-col items-center gap-10 sm:gap-16 mb-8 md:mb-16 bg-[#f5f7fa]">
        <div className="w-full flex flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mb-4">
                    Lessons and insights <br/>
                    <span className="text-[#4caf4f]">from 8 years</span>
                </h1>
                <p className="text-[#717171] mb-6 max-w-md text-sm sm:text-base">
                    Where to grow your business as a photographer: site or social media?
                </p>
                <button
                    className="bg-[#4caf4f] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base">
                    Register
                </button>
            </div>
            <div className="md:w-1/3">
                <Image
                    src="/images/hero-illustration.svg"
                    alt="Hero Illustration"
                    width={272}
                    height={283}
                    className=" h-auto"
                />
            </div>
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 ">
            <div className="w-2 h-2 rounded-full bg-[#4caf4f]"></div>
            <div className="w-2 h-2 rounded-full bg-[#e0e0e0]"></div>
            <div className="w-2 h-2 rounded-full bg-[#e0e0e0]"></div>
        </div>
    </section>;
};