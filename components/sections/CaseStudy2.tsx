import Image from "next/image";

export const CaseStudy2 = () => {
    return <section
        className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 md:py-12 mb-8 md:mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <Image
                src="/images/footer-design-illustration.svg"
                alt="Footer Design Case Study"
                width={301}
                height={307}
                className="h-auto"
            />
        </div>
        <div className="md:w-2/3 ">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4D4D4D] mb-3 md:mb-4">
                How to design your site footer like we did
            </h2>
            <p className="text-[#717171] mb-4 md:mb-6 text-xs sm:text-sm">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                massa nunc
                varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
                habitasse
                platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue
                vitae nisi
                ultricies, non aliquet urna tincidunt.
            </p>
            <button
                className="bg-[#4caf4f] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-md text-xs sm:text-sm">
                Learn More
            </button>
        </div>
    </section>;
};
