// const Banner = () => {
//     return (
//         <section className="py-16 overflow-hidden bg-blue-600 transform -rotate-1 scale-105 border-y-4 border-white/10 shadow-2xl z-20 relative">
//             <div className="whitespace-nowrap flex animate-scroll gap-8">
//                 {[1, 2, 3, 4].map((i) => (
//                     <h2 key={i} className="text-4xl md:text-6xl font-bold text-white flex items-center gap-8 uppercase tracking-tighter">
//                         Build beyond the cloud
//                         <span className="text-white/30 text-4xl">+</span>
//                     </h2>
//                 ))}
//             </div>
//         </section>
//     );
// };
import { motion } from "framer-motion";

const TEXT =
  "Build beyond the cloud + Build beyond the cloud + Build beyond the cloud + ";

const AnimatedCrossBanner = () => {
  return (
      <div className="relative bg-[#081426]">
    <div className="relative w-full h-50 overflow-hidden bg-transparent">
      
      {/* LEFT → RIGHT */}
      <div className="absolute w-[150%] -left-1/4 top-1/2 -translate-y-1/2 rotate-[-3deg]">
        <div className="bg-[#006FEA] backdrop-blur-md py-4">
          <motion.div
            className="flex whitespace-nowrap text-white text-3xl font-semibold tracking-wide"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            <span className="mx-4 font-monument text-[46px] uppercase tracking-[0.28em] font-extrabold">{TEXT}</span>
            <span className="mx-4  text-[46px] uppercase tracking-[0.28em] font-extrabold">{TEXT}</span>
          </motion.div>
        </div>
      </div>

      {/* RIGHT → LEFT */}
      <div className="absolute w-[150%] -left-1/4 top-1/2 -translate-y-1/2 rotate-[3deg]">
        <div className="bg-linear-to-r from-[#006FEA]/90 to-[#83BEFF]/90 backdrop-blur-md py-4">
          <motion.div
            className="flex whitespace-nowrap text-white text-3xl font-semibold tracking-wide"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
          >
            <span className="mx-4   font-monument text-[46px] uppercase tracking-[0.28em] font-extrabold">{TEXT}</span>
            <span className="mx-4 font-monument text-[46px] uppercase tracking-[0.28em] font-extrabold">{TEXT}</span>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AnimatedCrossBanner;


