import { motion } from "framer-motion";

import MicrosoftLogo from "../../assets/MicrosoftLogo.png";
import GoogleplusLogo from "../../assets/GoogleplusLogo.png";
import ApplepayLogo from "../../assets/ApplepayLogo.png";
import InstagramLogo from "../../assets/InstagramLogo.png";
import LinkedinLogo from "../../assets/LinkedinLogo.png";
import MetallbLogo from "../../assets/MetallbLogo.png";

const logos = [
  MicrosoftLogo,
  GoogleplusLogo,
  ApplepayLogo,
  InstagramLogo,
  LinkedinLogo,
  MetallbLogo,
];

const Partners = () => {
  return (
    <section className="bg-[#081426] py-6 md:py-10">
      <div className="relative overflow-hidden">

        {/* SCROLL TRACK */}
        <motion.div
          className="flex items-center gap-8 md:gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[100px] md:min-w-[160px]"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="h-8 md:h-12 object-contain opacity-80 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* LEFT GRADIENT */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#081426] to-transparent pointer-events-none z-10" />

        {/* RIGHT GRADIENT */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#081426] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Partners;