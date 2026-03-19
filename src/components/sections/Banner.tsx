import { motion } from "framer-motion";

const TEXT =
  "Build beyond the cloud + Build beyond the cloud + Build beyond the cloud + ";

const AnimatedCrossBanner = () => {
  return (
    <div className="relative bg-[#061B3A]">
      <div className="relative w-full h-[120px] md:h-[180px] overflow-hidden">

        {/* LEFT → RIGHT */}
        <div className="absolute w-[180%] -left-1/3 top-1/2 -translate-y-1/2 rotate-[-2deg] md:rotate-[-3deg]">
          <div className="bg-[#006FEA] py-2 md:py-4">
            <motion.div
              className="flex whitespace-nowrap text-white font-semibold tracking-wide"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 20, // slower for mobile readability
                ease: "linear",
              }}
            >
              <span className="mx-3 md:mx-4 font-monument text-[18px] md:text-[46px]  tracking-[0.2em] md:tracking-[0.28em] font-extrabold">
                {TEXT}
              </span>
              <span className="mx-3 md:mx-4 font-monument text-[18px] md:text-[46px]  tracking-[0.2em] md:tracking-[0.28em] font-extrabold">
                {TEXT}
              </span>
            </motion.div>
          </div>
        </div>

        {/* RIGHT → LEFT */}
        <div className="absolute w-[180%] -left-1/3 top-1/2 -translate-y-1/2 rotate-[2deg] md:rotate-[3deg]">
          <div className="bg-gradient-to-r from-[#006FEA]/90 to-[#83BEFF]/90 py-2 md:py-4">
            <motion.div
              className="flex whitespace-nowrap text-white font-semibold tracking-wide"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              <span className="mx-3 md:mx-4 font-monument text-[18px] md:text-[46px]  tracking-[0.2em] md:tracking-[0.28em] font-extrabold">
                {TEXT}
              </span>
              <span className="mx-3 md:mx-4 font-monument text-[18px] md:text-[46px]  tracking-[0.2em] md:tracking-[0.28em] font-extrabold">
                {TEXT}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCrossBanner;