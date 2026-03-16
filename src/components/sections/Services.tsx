import { Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import blueHolo1 from '../../assets/BlueHolo1.png';
import blueHolo2 from '../../assets/BlueHolo2.png';
import blueHolo3 from '../../assets/BlueHolo3.png';
import blueHolo4 from '../../assets/BlueHolo4.png';
import blueHole5 from '../../assets/BlueHolo5.png';
import waveBackground from '../../assets/WaveBackground.png';
import AnimatedCrossBanner from './Banner';

const Services = () => {
    const services = [
        {
            title: 'UI/UX',
            subtitle: 'Design that Converts',
            description:
                'We design intuitive and engaging user experiences that turn ideas into meaningful digital products. Our UI/UX approach focuses on usability, clarity, and seamless interaction to ensure every product is both beautiful and functional.',
            image: blueHolo1,
        },
        {
            title: 'Development',
            subtitle: 'Fast, Clean Builds',
            description:
                'Our engineering team builds scalable, high-performance applications using modern technologies and clean architecture. We focus on speed, reliability, and maintainable code to deliver products that grow with your business.',
            image: blueHolo2,
        },
        {
            title: 'Graphic Designing',
            subtitle: 'Creative Visual Identity',
            description:
                'We craft modern brand identities and visual assets that communicate your message with clarity and impact. From digital graphics to marketing materials, our designs ensure your brand stands out across every platform.',
            image: blueHolo3,
        },
        {
            title: 'Hosting & Maintenance',
            subtitle: 'Secure & Reliable Infrastructure',
            description:
                'Reliable hosting and ongoing technical support to keep your platforms secure, optimized, and running smoothly. We handle updates, monitoring, and maintenance so you can focus on growing your business.',
            image: blueHolo4,
        },
    ];

    return (
        <>
            <div
                className="relative w-full py-24"
                style={{
                    backgroundImage: `url(${waveBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <section className="container mx-auto px-6 relative z-10">
                    <Row gutter={[32, 32]}>
                        {/* LEFT GRID */}
                        <Col xs={24} lg={12}>
                            <Row gutter={[24, 24]}>
                                {services.map((service, index) => (
                                    <Col xs={24} sm={12} key={index}>
                                        <motion.div
                                            whileHover="hover"
                                            className="relative h-[420px] rounded-[30px] overflow-hidden group cursor-pointer border border-white/5 transition-all duration-300 hover:-translate-y-2"
                                            style={{
                                                backdropFilter: 'blur(10px)',
                                                background: 'linear-gradient(180deg, rgba(17,24,53,0.9) 0%, rgba(10,14,39,0.9) 100%)',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                            }}
                                        >

                                            {/* LIGHT EFFECT */}
                                            <div className="absolute -top-20 -left-20 w-[260px] h-[260px] bg-blue-500/20 rounded-full blur-[120px]" />
                                            {/* TEXT CONTENT */}
                                            <div className="relative z-20 flex flex-col h-full p-8">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="text-sm font-medium text-gray-300 uppercase">
                                                        {service.title}
                                                    </div>

                                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#006FEA] transition-colors backdrop-blur-md">
                                                        <ArrowRightOutlined className="-rotate-45 text-sm" />
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-white mb-4">
                                                    {service.subtitle}
                                                </h3>

                                                <p className="text-gray-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* 3D IMAGE */}
                                            <div className="absolute bottom-0 right-0 w-[80%] h-[60%] flex items-end justify-end z-10 translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-105 transition-all duration-500 ease-out">
                                                <motion.img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,100,255,0.3)]"
                                                    style={{ transformOrigin: 'center center' }}
                                                    variants={{
                                                        hover: {
                                                            rotate: 360,
                                                            transition: {
                                                                duration: 2,
                                                                ease: 'linear',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>

                        {/* RIGHT BIG CARD */}
                        <Col xs={24} lg={12} className="flex flex-col mt-10 lg:mt-24">
                            <div className="mb-10 lg:pl-10">
                                <h2 className="text-7xl font-light text-white tracking-wide">
                                    What We Do
                                </h2>
                            </div>

                            <motion.div
                                whileHover="hover"
                                className="relative h-[659px] rounded-[30px] overflow-hidden group cursor-pointer border border-white/5 transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    backdropFilter: 'blur(10px)',
                                    background: 'linear-gradient(90deg, rgba(17,24,53,0.9) 0%, rgba(14,23,81,0.9) 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                                }}
                            >
                                <div className="absolute -top-32 -right-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[160px]" />

                                {/* TEXT */}
                                <div className="relative z-20 flex flex-col h-full p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="text-sm font-medium text-gray-300 uppercase">
                                            Software Development
                                        </div>

                                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-900 transition-colors backdrop-blur-md">
                                            <ArrowRightOutlined className="-rotate-45 text-sm" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">
                                        Build Scalable Digital Products
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                        Codely develops powerful software solutions tailored to business needs. From custom platforms to enterprise systems,
                                        we build scalable applications designed for performance, security, and long-term growth.
                                    </p>
                                </div>

                                {/* BIG 3D IMAGE */}
                                <div className="absolute bottom-0 right-0 w-[60%] h-[40%] flex items-end justify-end z-10 translate-y-4 translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-105 transition-all duration-500 ease-out">
                                    <motion.img
                                        src={blueHole5}
                                        alt="Software Development"
                                        className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,100,255,0.3)]"
                                        style={{ transformOrigin: 'center center' }}
                                        variants={{
                                            hover: {
                                                rotate: 360,
                                                transition: {
                                                    duration: 2.5,
                                                    ease: 'linear',
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </Col>
                    </Row>

                </section>
            </div>
            <AnimatedCrossBanner />
        </>
    );
};

export default Services;