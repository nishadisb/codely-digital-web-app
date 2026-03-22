import { Button, Statistic } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";

import abstract3D from "../../assets/3D Abstract3.png";
import swatchBg from "../../assets/Swatch.png";
import frameBg from "../../assets/Frame.png";
import logo from "../../assets/logo.png";
import { useEffect, useRef, useState } from "react";

const stats = [
    {
        value: 150,
        suffix: "+",
        label: "Projects Successfully Delivered",
    },
    {
        value: 30,
        suffix: "+",
        label: "Businesses Digitally Transformed",
    },
    {
        value: 1.0,
        suffix: "M+",
        label: "Users Powered by Our Platforms",
        precision: 1,
    },
];

const Hero = () => {
    const panelRef = useRef<HTMLDivElement | null>(null);
    const [stripeCount, setStripeCount] = useState(12);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const tag: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    useEffect(() => {
        const updateStripes = () => {
            if (!panelRef.current) return;

            const panelWidth = panelRef.current.offsetWidth;

            const stripeWidth = 45; // desired stripe width in px

            const count = Math.max(8, Math.floor(panelWidth / stripeWidth));

            setStripeCount(count);
        };

        updateStripes();
        window.addEventListener("resize", updateStripes);

        return () => window.removeEventListener("resize", updateStripes);
    }, []);

    return (
        <section className="relative w-full min-h-[100svh] overflow-hidden text-white">
            {/* BACKGROUND */}
            <img
                src={swatchBg}
                className="absolute inset-0 w-full h-full object-cover"
            />

            <img
                src={frameBg}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* LOGO */}
            <motion.div
                className="absolute top-6 left-6 md:left-12 lg:left-24 z-30"
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

            {/* ROTATING OBJECT */}
            <motion.img
                src={abstract3D}
                className="
                    absolute
                    top-[40%] sm:top-[40%] md:top-[45%] lg:top-1/2
                    left-[60%] lg:left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-[220px] sm:w-[300px] md:w-[380px] lg:w-[420px]
                    opacity-90 pointer-events-none z-10
                "
                animate={{ rotate: 360 }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* MAIN CONTENT */}
            <div
                className="
                relative z-20
                grid grid-cols-1 lg:grid-cols-2
                min-h-[100svh]
                max-w-[1600px] mx-auto
                px-6 md:px-16 lg:px-24
                items-center
                gap-12 lg:gap-16
                py-[6vh] lg:py-0
             "
            >
                {/* LEFT CONTENT */}
                <div className="space-y-6 lg:space-y-8 max-w-xl">
                    {/* TAGS */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="
                            flex flex-wrap items-center
                            gap-2 sm:gap-x-3 sm:gap-y-2
                            bg-white/5 backdrop-blur-md
                            px-3 sm:px-4
                            py-2
                            mt-[4vh]
                            rounded-xl sm:rounded-full
                            border border-white/10
                            w-fit max-w-[95vw]
                            "
                    >
                        {["Digital Engineering", "Design", "Cloud Solutions"].map(
                            (item, i) => (
                                <motion.span
                                    key={item}
                                    variants={tag}
                                    animate={{
                                        y: [0, -6, 0],
                                    }}
                                    transition={{
                                        duration: 4 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    className="
                                        flex items-center gap-2
                                        px-2.5 py-1
                                        sm:px-0 sm:py-0
                                        text-xs sm:text-xs md:text-sm
                                        text-[#83BEFF]
                                        bg-white/5 sm:bg-transparent
                                        rounded-md sm:rounded-none
                                        whitespace-nowrap
                                        cursor-default
                                        "
                                >
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#83BEFF] rounded-full animate-pulse" />
                                    {item}
                                </motion.span>
                            ),
                        )}
                    </motion.div>

                    {/* TITLE */}
                    <motion.h1
                        className="
                            font-light leading-[0.95]
                            text-[clamp(30px,6vh,42px)]
                            sm:text-[clamp(34px,7vh,60px)]
                            md:text-[clamp(38px,8vh,90px)]
                            lg:text-[clamp(42px,10vh,120px)]
                            "
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.25,
                                },
                            },
                        }}
                    >
                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: "easeOut" },
                                },
                            }}
                            className="block"
                        >
                            Build
                        </motion.span>

                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: "easeOut" },
                                },
                            }}
                            className="block"
                        >
                            beyond
                        </motion.span>

                        <motion.span
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.8, ease: "easeOut" },
                                },
                            }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#83BEFF] via-white to-[#83BEFF]"
                        >
                            the cloud
                        </motion.span>
                    </motion.h1>

                    {/* Mobile description */}
                    <motion.p
                        className="text-gray-400 text-sm leading-relaxed md:hidden max-w-[50vw]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        Codely is a digital engineering studio focused on building modern
                        web platforms, scalable systems, and exceptional user experiences.
                    </motion.p>

                    {/* Desktop description */}
                    <motion.p
                        className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[30vw] hidden md:block"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        Codely is a digital engineering studio focused on building modern
                        web platforms, scalable systems, and exceptional user experiences.
                        We partner with businesses to transform ideas into powerful digital
                        products through clean architecture, thoughtful design, and
                        cutting-edge technology.
                    </motion.p>

                    {/* MOBILE STATS */}
                    <motion.div
                        className="grid grid-cols-3 gap-6 lg:hidden pt-6"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.25,
                                },
                            },
                        }}
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { duration: 0.6, ease: "easeOut" },
                                    },
                                }}
                            >
                                <Statistic
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    precision={stat.precision}
                                    valueStyle={{
                                        color: "#fff",
                                        fontSize: "26px",
                                        fontWeight: 300,
                                    }}
                                    formatter={(value) => (
                                        <CountUp end={Number(value)} decimals={stat.precision} duration={4} />
                                    )}
                                />

                                <motion.div
                                    className="text-gray-400 text-xs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* MOBILE DESCRIPTION */}
                    <motion.div
                        className="lg:hidden"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <p className="text-gray-400 text-sm leading-relaxed mb-5">
                            From high-performance websites to complex business systems, Codely
                            delivers solutions designed for scalability, speed, and reliability.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button className="bg-white text-blue-900 border-0 rounded-full px-6 h-10 flex items-center gap-2">
                                Explore Our Work
                                <ArrowRightOutlined />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* RIGHT CONTENT (DESKTOP) */}
                <div className="relative hidden lg:block min-h-[520px]">
                    {/* STATS */}
                    <motion.div
                        className="absolute right-0 top-14 text-right"
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.3,
                                },
                            },
                        }}
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, x: 40 },
                                    show: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { duration: 0.7, ease: "easeOut" },
                                    },
                                }}
                            >
                                <Statistic
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    precision={stat.precision}
                                    valueStyle={{
                                        color: "#fff",
                                        fontSize: "42px",
                                        fontWeight: 300,
                                    }}
                                    formatter={(value) => (
                                        <CountUp end={Number(value)} decimals={stat.precision} duration={4} />
                                    )}
                                />

                                <motion.div
                                    className="text-gray-400 text-sm -mt-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 0.5,
                                    }}
                                >
                                    {stat.label}
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* DESCRIPTION */}
                    <motion.div
                        className="absolute right-0 bottom-2 max-w-[35vw]"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1,
                            ease: "easeOut",
                        }}
                    >
                        <motion.p
                            className="text-gray-300 text-sm leading-7 mb-5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                        >
                            From high-performance websites to complex business systems, Codely
                            delivers solutions designed for scalability, speed, and reliability.
                            Our team combines development, UI/UX design, and cloud infrastructure
                            to build digital products that move businesses forward.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 1.3,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                        >
                            <Button className="bg-white text-blue-900 border-0 rounded-full px-6 h-10 flex items-center gap-2">
                                Explore Our Work
                                <ArrowRightOutlined />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* GLASS PANEL */}
            <div
                ref={panelRef}
                className="
                    absolute top-0 left-0
                    w-[60vw] md:w-[45vw]
                    h-full
                    z-10 overflow-hidden
                    "
            >
                <motion.div
                    className="absolute inset-0 flex"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
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
        </section>
    );
};

export default Hero;
