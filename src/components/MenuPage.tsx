import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import glassShape from '../assets/Glass.png';

const MenuPage = () => {
    const menuItems = [
        { title: 'Home', path: '/home' },
        { title: 'About', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact', path: '/contact' },
    ];

    return (
        <div className="min-h-screen bg-[#081426] text-white overflow-hidden relative">
            <div className="container mx-auto px-10 py-6">
                <header className="flex justify-between items-center mb-12">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#006FEA] rounded-full flex items-center justify-center shadow-lg shadow-[#006FEA]/50">
                            <span className="text-white font-bold text-xl">C</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight">codely</span>
                    </div>
                    <Link to="/">
                        <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                            <CloseOutlined className="text-xl" />
                        </button>
                    </Link>
                </header>

                <div className="flex flex-col md:flex-row items-center justify-between h-[calc(100vh-150px)]">
                    <div className="space-y-4 z-10">
                        {menuItems.map((item, index) => (
                            <Link to={item.path} key={index} className="block group">
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600 text-lg font-mono">0{index + 1}</span>
                                    <h2 className="text-6xl md:text-7xl font-bold group-hover:text-[#006FEA] transition-colors duration-300">
                                        {item.title}
                                    </h2>
                                    <ArrowRightOutlined className="text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#006FEA]" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="relative w-full md:w-1/2 h-[500px] md:h-full flex items-center justify-center pointer-events-none">
                        <motion.div
                            layoutId="hero-glass-object"
                            className="w-full h-full flex items-center justify-center"
                            // transition={{ duration: 0.8, type: "spring", bounce: 8 }}
                            initial={{ x: "100%" }}   // Start from right side
                            animate={{ x: 0 }}        // Move to original position
                            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        >
                            <img
                                src={glassShape}
                                alt="Glass 3D Shape"
                                className="w-[120%] h-[120%] object-contain drop-shadow-[0_0_80px_rgba(59,130,246,0.4)]"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuPage;
