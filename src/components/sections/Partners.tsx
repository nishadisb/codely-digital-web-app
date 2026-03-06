import { motion } from "framer-motion";
import LogoScroll from "../../assets/LogoScroll.png";

const Partners = () => {
    return (
        <section className="">
            <div className="relative overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                >
                    {/* Duplicate image for seamless infinite scroll */}
                    <img src={LogoScroll} alt="Partners" className="h-16 md:h-20" />
                    <img src={LogoScroll} alt="Partners" className="h-16 md:h-20" />
                </motion.div>
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-full md:w-48 bg-linear-to-r from-[#081426] to-transparent pointer-events-none z-10"></div>
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-full md:w-48 bg-linear-to-l from-[#081426] to-transparent pointer-events-none z-10"></div>
            </div>
        </section>
    );
};

export default Partners;
