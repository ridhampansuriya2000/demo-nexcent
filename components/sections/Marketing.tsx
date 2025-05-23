import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export const Marketing = () => {
    return <section className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 md:py-12 mb-8 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#4D4D4D] mb-3 md:mb-4">
            Caring is the new marketing
        </h2>
        <p className="text-center text-[#717171] mb-8 md:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            The Nexcent blog is the best place to read about the latest membership insights, trends and
            resources for
            growing your membership organization.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
            {[
                {
                    title: "Creating Streamlined Safeguarding Processes with OneRen",
                    image: "/images/blog-image-1.svg",
                },
                {
                    title: "What are your safeguarding responsibilities and how can you manage them?",
                    image: "/images/blog-image-2.svg",
                },
                {
                    title: "Revamping the Membership Model with Triathlon Australia",
                    image: "/images/blog-image-3.svg",
                },
            ].map((card, i) => (
                <div key={i}
                     className="w-[250px] sm:w-[300px] h-48 sm:h-[300px] bg-auto overflow-hidden relative flex justify-center m-auto lg:m-0">
                    <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        width={300}
                        height={200}
                        className="w-full h-40 sm:h-[239px] object-cover rounded-xl"
                    />
                    <div className="p-2 sm:p-6 bg-[#F5F7FA] w-5/6 absolute bottom-0 m-auto rounded-xl">
                        <h3 className="font-bold text-[#717171] mb-1 sm:mb-3 md:mb-4 text-center text-xs sm:text-sm">{card.title}</h3>
                        <div className="flex justify-center">
                            <Link href="#" className="text-[#4CAF4F] flex items-center font-[600] text-xs sm:text-sm">
                                Readmore <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4"/>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>;
};
