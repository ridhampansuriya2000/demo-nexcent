import Image from "next/image";

export const Stats = () => {
    return <section
        className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 md:py-12 mb-8 md:mb-16 flex flex-col md:flex-row bg-[#F5F7FA]">
        <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4D4D4D] mb-1 md:mb-2">Helping a
                local</h2>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4caf4f] mb-3 md:mb-4">
                business reinvent itself
            </h2>
            <p className="text-[#717171] text-sm sm:text-base">We reached here with our hard work and
                dedication</p>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-8">
            <div className="flex items-center">
                <div className="mr-3 md:mr-4 text-[#4caf4f]">
                    <Image
                        src="/images/members-icon.svg"
                        alt="Members Icon"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4D4D4D]">2,245,341</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">Members</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-3 md:mr-4 text-[#4caf4f]">
                    <Image
                        src="/images/clubs-icon.svg"
                        alt="Clubs Icon"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4D4D4D]">46,328</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">Clubs</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-3 md:mr-4 text-[#4caf4f]">
                    <Image
                        src="/images/event-bookings-icon.svg"
                        alt="Event Bookings Icon"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4D4D4D]">828,867</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">Event Bookings</p>
                </div>
            </div>
            <div className="flex items-center">
                <div className="mr-3 md:mr-4 text-[#4caf4f]">
                    <Image
                        src="/images/payments-icon.svg"
                        alt="Payments Icon"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                </div>
                <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#4D4D4D]">1,926,436</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">Payments</p>
                </div>
            </div>
        </div>
    </section>;
};