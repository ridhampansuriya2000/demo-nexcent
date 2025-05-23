import MembershipIcon from "@/components/svg/MembershipIcon";
import ClubsIcon from "@/components/svg/ClubsIcon";
import AssociationsIcon from "@/components/svg/AssociationsIcon";

export const Community = () => {
    return <section className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-8 md:py-12 mb-8 md:mb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#4D4D4D] mb-2">
            Manage your entire community
            <br/>
            in a single system
        </h2>
        <p className="text-center text-[#717171] mb-8 md:mb-16 text-sm sm:text-base">Who is Nexcent suitable
            for?</p>

        <div className="grid md:h-[280px]  md:overflow-x-auto lg:overflow-x-hidden md:px-2">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:h-[280px] w-max m-auto">
                <div
                    className="text-center px-2 sm:px-4 py-4 w-[230px] h-[210px] sm:w-[280px] sm:h-[250px] bg-white rounded-[10px] shadow-[0px_2px_4px_0px_#ABBED199] m-auto">
                    <div className="flex justify-center mb-4">
                        <MembershipIcon className="w-12 h-12 sm:w-16 sm:h-16"/>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4D4D4D] mb-2 sm:mb-3">Membership
                        Organizations</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">
                        Our membership management software provides full automation of membership renewals and
                        payments
                    </p>
                </div>

                <div
                    className="text-center px-2 sm:px-4 py-4 w-[230px] h-[210px] sm:w-[280px] sm:h-[250px] bg-white rounded-[10px] shadow-[0px_2px_4px_0px_#ABBED199] m-auto">
                    <div className="flex justify-center mb-4">
                        <ClubsIcon className="w-12 h-12 sm:w-16 sm:h-16"/>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4D4D4D] mb-2 sm:mb-3">National
                        Associations</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">
                        Our membership management software provides full automation of membership renewals and
                        payments
                    </p>
                </div>

                <div
                    className="text-center px-2 sm:px-4 py-4 w-[230px] h-[210px] sm:w-[280px] sm:h-[250px] bg-white rounded-[10px] shadow-[0px_2px_4px_0px_#ABBED199] m-auto">
                    <div className="flex justify-center mb-4">
                        <AssociationsIcon className="w-12 h-12 sm:w-16 sm:h-16"/>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4D4D4D] mb-2 sm:mb-3">Clubs And
                        Groups</h3>
                    <p className="text-[#717171] text-xs sm:text-sm">
                        Our membership management software provides full automation of membership renewals and
                        payments
                    </p>
                </div>

            </div>
        </div>
    </section>;
};