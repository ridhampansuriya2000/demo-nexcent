import Image from "next/image";

export const CaseStudy1 = () => {
    return <section
        className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 md:py-12 mb-8 md:mb-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <Image
                src="/images/pixelgrade-illustration.svg"
                alt="Pixelgrade Case Study"
                width={307}
                height={229}
                className=" h-auto"
            />
        </div>
        <div className="md:w-2/3 md:pl-6 lg:pl-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4D4D4D] mb-3 md:mb-4">
                The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-[#717171] mb-4 md:mb-6 text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan
                quam vitae
                est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique
                iaculis.
                Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae,
                tempus sem.
                Donec elementum pulvinar odio.
            </p>
            <button
                className="bg-[#4caf4f] text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-md text-sm sm:text-base">
                Learn More
            </button>
        </div>
    </section>;
};
