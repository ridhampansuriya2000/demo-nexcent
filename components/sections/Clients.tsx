import Client1Logo from "@/components/svg/Client1Logo";
import Client2Logo from "@/components/svg/Client2Logo";
import Client3Logo from "@/components/svg/Client3Logo";
import Client4Logo from "@/components/svg/Client4Logo";
import Client5Logo from "@/components/svg/Client5Logo";
import Client6Logo from "@/components/svg/Client6Logo";
import Client7Logo from "@/components/svg/Client7Logo";

export const Clients = () => {
    return <section className="container max-w-none px-4 sm:px-16 xl:px-[200px] py-6 md:py-8 ">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-[#263238] mb-2">Our Clients</h2>
        <p className="text-center text-[#717171] mb-6 md:mb-8 text-sm sm:text-base">
            We have been working with some Fortune 500+ clients
        </p>

        <div
            className="grid grid-cols-3 md:grid-cols-7 gap-4 md:gap-8 py-8 items-center justify-between place-items-center">
            <Client1Logo/>
            <Client2Logo/>
            <Client3Logo/>
            <Client4Logo/>
            <Client5Logo/>
            <Client6Logo/>
            <Client7Logo/>
        </div>
    </section>;
};