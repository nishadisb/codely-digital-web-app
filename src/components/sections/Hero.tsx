import { Button, Statistic } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import abstract3D from "../../assets/3D Abstract3.png";
import swatchBg from "../../assets/Swatch.png";
import frameBg from "../../assets/Frame.png";
import Header from "./Header";
import CountUp from "react-countup";

const Hero = () => {

    const stripeCount = 12;

    return (
        <section className="relative w-full min-h-screen overflow-hidden text-white">

            {/* BACKGROUND IMAGES */}
            <img
                src={swatchBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            <img
                src={frameBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            {/* <Header /> */}

            <motion.img
                src={abstract3D}
                alt="3D Abstract"
                className="
                    absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px]
                    opacity-90
                    z-10
                    pointer-events-none
                "
                animate={{ rotate: 360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* MAIN CONTENT */}
            <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 min-h-screen px-6 md:px-16 lg:px-24 items-center">

                {/* LEFT TEXT */}
                <div className="space-y-8 max-w-xl">
                    <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                        <span className="w-2 h-2 bg-[#83BEFF] rounded-full animate-pulse"></span>
                        <span className="text-sm text-[#83BEFF]">
                            Lorem Ipsum is simply dummy text
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9]">
                        Build <br />
                        beyond <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#83BEFF] via-white to-[#83BEFF]">
                            the cloud
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-md">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>

                    <Button
                        type="primary"
                        className="bg-white text-blue-900 border-0 h-12 px-8 rounded-full font-semibold flex items-center gap-2"
                    >
                        Start Now
                        <ArrowRightOutlined />
                    </Button>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">

                    {/* STATS */}
                    <div className="absolute right-0 top-16 md:top-20 space-y-8 md:space-y-10 text-right z-20">
                        <div>
                            <Statistic
                                value={200}
                                suffix="+"
                                valueStyle={{ color: "#fff", fontSize: "42px", fontWeight: 300, lineHeight: 1 }}
                                formatter={(value) => <CountUp end={value as number} duration={2} />}
                            />
                            <div className="text-gray-400 text-sm -mt-2">Lorem Ipsum is simply</div>
                        </div>

                        <div>
                            <Statistic
                                value={500}
                                suffix="K+"
                                valueStyle={{ color: "#fff", fontSize: "42px", fontWeight: 300, lineHeight: 1 }}
                                formatter={(value) => <CountUp end={value as number} duration={2.5} />}
                            />
                            <div className="text-gray-400 text-sm -mt-2">Lorem Ipsum is simply</div>
                        </div>

                        <div>
                            <Statistic
                                value={1.2}
                                suffix="M+"
                                precision={1}
                                valueStyle={{ color: "#fff", fontSize: "42px", fontWeight: 300, lineHeight: 1 }}
                                formatter={(value) => <CountUp end={value as number} decimals={1} duration={3} />}
                            />
                            <div className="text-gray-400 text-sm -mt-2">Lorem Ipsum is simply</div>
                        </div>
                    </div>

                    {/* DESCRIPTION + BUTTON */}
                    <div className="absolute right-0 bottom-10 max-w-[320px] text-left z-20">
                        <p className="text-gray-300 text-sm leading-7 mb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>

                        <Button className="bg-white text-blue-900 border-0 rounded-full px-6 h-10 flex items-center gap-2">
                            Read More
                            <ArrowRightOutlined />
                        </Button>
                    </div>
                </div>
            </div>

            {/* LEFT GLASS PANEL */}
            <div
                className="
                    absolute top-0 left-0
                    w-[60%] md:w-[45%]
                    h-full min-h-screen
                    z-10 overflow-hidden
                "
            >
                <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">

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
            </div>

        </section>
    );
};

export default Hero;