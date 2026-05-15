import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
    const panelRef = useRef<HTMLDivElement>(null);
    const [stripeCount, setStripeCount] = useState(12);

    useEffect(() => {
        const updateStripes = () => {
            if (!panelRef.current) return;

            const panelWidth = panelRef.current.offsetWidth;
            const stripeWidth = 45;
            const count = Math.max(8, Math.floor(panelWidth / stripeWidth));

            setStripeCount(count);
        };

        updateStripes();
        window.addEventListener("resize", updateStripes);
        return () => window.removeEventListener("resize", updateStripes);
    }, []);

    return (
        <footer className="relative -mt-[200px] bg-[#081426]/20 backdrop-blur-xl overflow-hidden z-30">

            {/* LEFT GLASS PANEL */}
            <div
                ref={panelRef}
                className="absolute top-0 left-0 w-1/2 h-full z-10 overflow-hidden"
            >
                <motion.div
                    className="absolute inset-0 flex z-30"
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 30,
                    }}
                >
                    {[...Array(stripeCount)].map((_, i) => (
                        <div
                            key={i}
                            className="flex-1 backdrop-blur-xl"
                            style={{
                                background:
                                    "linear-gradient(to bottom, rgba(160,180,205,0.18), rgba(20,35,60,0.15), rgba(10,20,40,0.25))",
                                boxShadow: "inset 0 0 30px rgba(180,200,230,0.08)",
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* CONTENT */}
            <div className="relative z-40 max-w-7xl mx-auto px-6 py-10 
                flex flex-col md:grid md:grid-cols-2 
                min-h-[400px] md:min-h-[auto]">

                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">
                            CALL US NOW
                        </p>
                        <p className="text-md font-medium mt-1">
                            033 666 666 66
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">
                            EMAIL
                        </p>
                        <p className="text-md font-medium mt-1">
                            info@codely.com.au
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest">
                            ADDRESS
                        </p>
                        <p className="text-md font-medium mt-1 mb-3">
                            Codely Digital
                            1/194, Cambridge Rd, Warrane, TAS 7018
                            ABN 45 690 827 573
                            ACN - 690 827 573
                        </p>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col items-end text-right space-y-4 mt-auto md:mt-0 md:items-end md:text-right self-center">

                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, y: -20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >
                        <motion.img
                            src={logo}
                            className="h-8 md:h-10 object-contain"
                            animate={{ y: [0, -4, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                            }}
                        />
                    </motion.div>

                    <p className="text-gray-400 text-sm max-w-md">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                    </p>

                    <p className="text-gray-500 text-sm">
                        © 2026 — Copyright
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;