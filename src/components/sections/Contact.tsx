import { Button, Input, Form, Row, Col, Select } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import footerShape from '../../assets/3D Black Chrome Shape1.png';
import { motion } from 'framer-motion';

const Contact = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Form values:', values);
    };

    return (
        <section className="container mx-auto px-6 py-24 relative overflow-hidden bg-[#0a1525] rounded-3xl min-h-screen">
           
            
            {/* 3D Shape at bottom center - rotating from below */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 pointer-events-none z-99">
                <motion.div
                    className="w-full h-full flex items-center justify-center"
                   // initial={{ y: 200, opacity: 0, rotate: -15 }}
                    // animate={{ 
                    //     y: 0, 
                    //     opacity: 0.6,
                    //     rotate: [0, 360, 0]
                    // }}
                       initial={{ y: "100%" }}
                         animate={{ y: 0,  rotate: [360, 0, 0] }}
                        transition={{
                                type: "spring",
                                stiffness: 40,
                                damping: 30,
                                 duration: 1.5,
                                 rotate: {
                                    duration: 8,
                                 }
                            }}
                    // transition={{
                    //     y: { duration: 1.5, type: "spring", bounce: 0.2 },
                    //     opacity: { duration: 1.5 },
                    //     rotate: {
                    //         duration: 8,
                    //         repeat: Infinity,
                    //         ease: "easeInOut"
                    //     }
                    // }}
                >
                    <img
                        src={footerShape}
                        alt="Glass 3D Shape"
                        className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(0,111,234,0.3)]"
                    />
                </motion.div>
            </div>

            <Row gutter={[64, 64]} className="relative z-20">
                <Col xs={24} lg={12}>
                    <div className="space-y-6 relative z-10">
                        {/* Blue accent line */}
                        <div className="border-l-4 border-[#006FEA] pl-6">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                Do you have<br />
                                <span className="text-gray-500">any questions?</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm max-w-md pl-6">
                            Feel free to send us your questions or request a free consultation.
                        </p>

                        <Form
                            form={form}
                            onFinish={onFinish}
                            layout="vertical"
                            className="space-y-4 pt-6 pl-6"
                            requiredMark={false}
                        >
                            <Row gutter={[16, 8]}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="fullName"
                                        label={<span className="text-white text-sm font-medium">Full Name*</span>}
                                        rules={[{ required: true, message: 'Please input your name!' }]}
                                    >
                                        <Input variant="underlined" placeholder="(Name)" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="phone"
                                        label={<span className="text-white text-sm font-medium">Phone Number*</span>}
                                        rules={[{ required: true }]}
                                    >
                                        <Input variant="underlined" placeholder="(Optional)" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[16, 8]}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="company"
                                        label={<span className="text-white text-sm font-medium">Company Name*</span>}
                                    >
                                        <Input variant="underlined" placeholder="(Company)" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="email"
                                        label={<span className="text-white text-sm font-medium">Email*</span>}
                                        rules={[{ required: true, type: 'email' }]}
                                    >
                                        <Input variant="underlined" placeholder="name@email.com" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                name="message"
                                label={<span className="text-white text-sm font-medium">How can we help?</span>}
                                rules={[{ required: true }]}
                            >
                                <Select 
                                    placeholder="Select an option"
                                    variant="borderless"
                                    className="custom-select"
                                    options={[
                                        { value: 'consultation', label: 'Request a consultation' },
                                        { value: 'support', label: 'Technical support' },
                                        { value: 'partnership', label: 'Partnership enquiry' },
                                        { value: 'other', label: 'Other' }
                                    ]}
                                />
                            </Form.Item>

                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                className="bg-white text-[#006FEA] border-0 h-12 px-8 rounded-full font-semibold text-base mt-6 hover:bg-[#83BEFF] hover:scale-105 transition-all shadow-lg"
                                icon={<SendOutlined />}
                                iconPosition="end"
                            >
                                Send a message
                            </Button>
                        </Form>
                    </div>
                </Col>
                
                {/* Info box on the right */}
                <Col xs={24} lg={12}>
                    <div className="relative z-10 flex items-center justify-end h-full">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-md">
                            <p className="text-gray-300 text-base leading-relaxed">
                                It is necessary to wash the car before tinting, as it affects the quality of the work.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Footer Section */}
            <div className="absolute bottom-12 left-0 right-0 px-12 flex justify-between items-end z-30">
                {/* Contact Info */}
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">CALL US NOW</p>
                        <p className="text-white text-lg font-semibold">033 666 666 66</p>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">EMAIL</p>
                        <p className="text-white text-base">info@codely.com.au</p>
                    </div>
                </div>

                {/* Branding */}
                <div className="max-w-xs text-right">
                    <div className="flex items-center justify-end gap-2 mb-2">
                        <div className="w-6 h-6 bg-[#006FEA] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">C</span>
                        </div>
                        <span className="text-white text-xl font-bold">codely</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">© 2026 — Copyright</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
