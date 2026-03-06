import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import blackChromeShape from '../../assets/3D Black Chrome Shape.png';
import Header from './Header';

const HomePage = () => {
    // Menu items based on the provided design
    const menuItems = [
        { title: 'Home', path: '/home' },
        { title: 'About Us', path: '/about' },
        { title: 'What We Do', path: '/services', hasSub: true },
        { title: 'Recent Projects', path: '/projects', hasSub: true },
        { title: 'Contact Us', path: '/contact' },
    ];

    return (
        <>
            <Header />
            <section className="container mx-auto px-6 pt-12 pb-24 relative min-h-screen z-10">
                {/* Background Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-[#081426] via-transparent to-transparent -z-10 rounded-full blur-3xl opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
                
                {/* Left Content Area - Solid Background */}
                <div className="w-[55%] h-full min-h-screen absolute left-0 top-0 z-20 flex flex-col justify-center pl-16 md:pl-32 bg-[#081426]">
                    {/* Menu List */}
                    <div className="w-full max-w-lg z-10">
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
                                    className="group flex items-center justify-between py-5 md:py-6"
                                >
                                    <span className={`text-3xl md:text-5xl font-light tracking-wide transition-all duration-300 ${index === 0 ? 'text-white font-normal' : 'text-slate-400 group-hover:text-white group-hover:pl-2'}`}>
                                        {item.title}
                                    </span>
                                    {item.hasSub && (
                                        <RightOutlined className="text-slate-500 text-xl group-hover:text-white transition-colors" />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3D Rotating Object - Center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <motion.div
                        className="w-[400px] h-[400px] opacity-50"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ transformOrigin: "center center" }}
                    >
                        <img
                            src={blackChromeShape}
                            alt="3D Black Chrome Shape"
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                </div>

                {/* Right Glass Panel Overlay */}
                <div className="absolute top-0 right-0 w-[45%] h-full min-h-screen z-30 overflow-hidden">
                    {/* The Glass Effect */}
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
        </>
    );
};

export default HomePage;
