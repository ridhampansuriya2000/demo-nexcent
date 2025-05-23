import {ArrowRight} from "lucide-react";

export const CTA = () => {
    return <section
        className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 sm:py-12 md:py-16 text-center bg-[#f5f7fa]">
        <h2 className="text-2xl sm:text-3xl md:text-5xl leading-[32.9px] md:leading-[52.9px] font-bold text-[#4D4D4D] mb-6 md:mb-8">
            Pellentesque suscipit
            <br/>
            fringilla libero eu.
        </h2>
        <button
            className="bg-[#4caf4f] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md inline-flex items-center text-sm sm:text-base">
            Get a Demo <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4"/>
        </button>
    </section>;
};
