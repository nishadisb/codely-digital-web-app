import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import blackChromeShape from "../../assets/3D Black Chrome Shape.png";

const HomePage = () => {

    const controls = useAnimation();
    const [stripeCount, setStripeCount] = useState(14);

    useEffect(() => {
        const updateStripes = () => {
            if (window.innerWidth < 640)
                setStripeCount(6); // mobile
            else if (window.innerWidth < 1024)
                setStripeCount(10); // tablet
            else setStripeCount(14); // desktop
        };

        updateStripes();
        window.addEventListener("resize", updateStripes);
        return () => window.removeEventListener("resize", updateStripes);
    }, []);

    useEffect(() => {
        controls.start({
            rotate: 360,
            transition: {
                duration: 5,
                ease: "linear"
            }
        });
    }, [controls]);

    const menuItems = [
        { title: "Home", path: "/home" },
        // { title: "About Us", path: "/about" },
        { title: "What We Do", path: "/services" },
        // { title: "Recent Projects", path: "/projects", hasSub: true },
        { title: "Recent Projects", path: "/projects" },
        { title: "Contact Us", path: "/contact" },
    ];

    const handleHoverStart = () => {
        controls.start({
            rotate: [0, 360],
            transition: {
                rotate: {
                    duration: 5,
                    ease: "linear",
                    repeat: Infinity,
                },
                scale: {
                    duration: 0.3,
                },
            },
        });
    };

    const handleHoverEnd = () => {
        controls.stop();
    };

    return (
        <section className="w-full min-h-screen relative z-10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#081426] via-transparent to-transparent -z-10 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Left Content */}
            <div
                className="
                w-full md:w-[55%]
                h-full min-h-screen
                absolute left-0 top-0
                z-20 flex flex-col justify-center
                px-6 sm:px-12 md:px-24
                bg-[#081426]
            "
            >
                <div className="w-full max-w-lg">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="border-b border-white/10"
                        >
                            <Link
                                to={item.path}
                                onMouseEnter={handleHoverStart}
                                onMouseLeave={handleHoverEnd}
                                className="group flex items-center py-4 sm:py-5"
                            >
                                {/* Responsive Text */}
                                <span
                                    className={`
                                    text-3xl sm:text-4xl md:text-4xl lg:text-5xl
                                    font-light tracking-wide
                                    transition-all duration-300
                                    ${index === 0
                                            ? "text-white font-normal"
                                            : "text-slate-500 group-hover:text-white group-hover:pl-2"
                                        }
                                `}
                                >
                                    {item.title}
                                </span>

                                {item.hasSub && (
                                    <RightOutlined className="ml-2 mt-1 sm:mt-2 text-slate-500 text-lg sm:text-xl group-hover:text-white transition-colors" />
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3D Rotating Object */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <motion.div
                    animate={controls}
                    className="
                        w-[220px] h-[220px]
                        sm:w-[280px] sm:h-[280px]
                        md:w-[320px] md:h-[320px]
                        lg:w-[400px] lg:h-[400px]
                        opacity-90 sm:opacity-90
                        translate-x-[40px] sm:translate-x-[60px] md:translate-x-[80px] lg:translate-x-[100px]
                    "
                >
                    <img
                        src={blackChromeShape}
                        alt="3D Shape"
                        className="w-full h-full object-contain"
                    />
                </motion.div>
            </div>

            {/* Right Glass Panel */}
            <div
                className="
                absolute top-0 right-0
                w-[60%] md:w-[45%]
                h-full min-h-screen
                z-30 overflow-hidden
            "
            >
                <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 flex z-10"
                        initial={{ x: "100%" }}
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
            </div>
        </section>
    );
};

export default HomePage;
