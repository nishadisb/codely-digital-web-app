import { Button, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import abstract3D from '../../assets/3D Abstract3.png';
import Header from './Header';

const Counter = ({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string, decimals?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toFixed(decimals) + suffix;
            }
        });
    }, [springValue, decimals, suffix]);

    return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>;
};

const Hero = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-12 pb-16 md:pb-24 relative min-h-screen z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#006FEA]/20 via-transparent to-transparent -z-10 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
<Header />
            <Row gutter={[24, 32]} align="middle">
                <Col xs={24} lg={8} className="z-50 relative">
                    <div className="space-y-6 md:space-y-8 relative z-50">
                        <div className="inline-flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-white/10 w-fit z-99">
                            <span className="w-2 h-2 bg-[#83BEFF] rounded-full animate-pulse"></span>
                            <span className="text-xs font-medium text-[#83BEFF]">Lorem Ipsum is any dummy text of the</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tight">
                            Build<br />
                            beyond<br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#83BEFF] via-white to-[#83BEFF] animate-gradient">
                                the cloud
                            </span>
                        </h1>

                        <p className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>

                        <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
                            <Button
                                type="primary"
                                size="large"
                                className="bg-white text-blue-900 hover:bg-blue-50 border-0 h-12 md:h-14 px-6 md:px-8 rounded-full font-bold text-base md:text-lg flex items-center gap-2 shadow-xl shadow-blue-900/20 group transition-all hover:scale-105"
                            >
                                Start Now
                                <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                        
                    </div>
                     
                    
                </Col>
              {/* Rotating 3D Image */}
                            <motion.img
                                src={abstract3D}
                                alt="3D Abstract"
                                className="absolute top-1/2 left-1/2
                                 -translate-x-1/2 -translate-y-1/2
                                  w-64 md:w-80 lg:w-96 
                                  h-auto object-contain opacity-80 z-5"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                <Col xs={24} lg={12}>
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
                        {/* Orbits Background */}
                        <div className="absolute inset-0 border border-white/5 rounded-full rotate-45 scale-150"></div>
                        <div className="absolute inset-0 border border-white/5 rounded-full -rotate-12 scale-125"></div>

                        <div className="w-full h-full relative z-10">
                           
                            
                            {/* Stats - Floating Cards */}
                            <div className="absolute top-10 md:top-20 right-0 lg:-right-10 space-y-4 md:space-y-6 z-20">
                                <div className=" p-4 md:p-6  w-36 md:w-48 text-right transform hover:scale-105 transition-transform duration-300 ">
                                <div className="text-2xl md:text-4xl  bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                                        <Counter value={200} suffix="+" /></div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Tech Partners</div>
                                </div>
                                <div className=" p-4 md:p-6  w-36 md:w-48 text-right transform hover:scale-105 transition-transform duration-300 ">
                                    <div className="text-2xl md:text-4xl  bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                                        <Counter value={500} suffix="K+" /></div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Happy Customers</div>
                                </div>
                                <div className="  p-4 md:p-6  w-36 md:w-48 text-right transform hover:scale-105 transition-transform duration-300 ">
                                    <div className="text-2xl md:text-4xl  bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
                                        <Counter value={1.2} suffix="M+" decimals={1} /></div>
                                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Customer Review</div>
                                </div>
                            </div>

                            {/* Description Text and Button */}
                            <div className="absolute bottom-0 right-0 lg:-right-10 max-w-sm z-99">
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
                                </p>
                                <Button
                                    type="default"
                                    className="bg-white/10 hover:bg-white/20 border border-white/20 
                                    h-10 px-6 rounded-full
                                     text-white flex items-center
                                      gap-2 backdrop-blur-md transition-all"
                                >
                                    Read More
                                    <ArrowRightOutlined />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Left Glass Panel Overlay */}
            <div className="absolute top-0 left-0 w-[45%] h-screen z-5 overflow-hidden pointer-events-none">
                {/* The Glass Effect */}
                <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                    <motion.div
                        className="absolute inset-0 flex z-5"
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 40,
                            damping: 30,
                        }}
                    >
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="flex-1 border-r border-white/15 bg-linear-to-b from-white/10 via-white/5 to-white/10 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(255,255,255,0.08)]"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
