import { Button, Input, Form, Row, Col, Select, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import CurveLines from '../../assets/CurveLines.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import footerShape from "../../assets/3D Black Chrome Shape1.png";

const Contact = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    const onFinish = async (values: any) => {
        setLoading(true);

        try {
            // EmailJS configuration - get these from your EmailJS dashboard
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Map message value to readable label
            const messageLabels: Record<string, string> = {
                consultation: 'Request a consultation',
                support: 'Technical support',
                partnership: 'Partnership enquiry',
                other: 'Other'
            };

            // Prepare template parameters
            const templateParams = {
                user_name: values.fullName,
                user_email: values.email,
                phone: values.phone || 'Not provided',
                company_name: values.company || 'Not provided',
                message: messageLabels[values.message] || values.message,
                to_email: 'hnishadisathsarani@gmail.com', // Your receiving email
            };

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            message.success('Message sent successfully! We\'ll get back to you soon.');
            form.resetFields();

        } catch (error) {
            console.error('Error sending message:', error);
            message.error('Failed to send message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="relative overflow-hidden bg-[#081426] py-20 px-6 md:px-12 ">

                <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                        src={CurveLines}
                        alt="curve lines"
                        className="w-full h-full object-cover opacity-10 md:opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#061B3A]/20 via-[#061B3A]/60 to-[#061B3A]" />
                </div>


                <div className="relative z-20 max-w-6xl mx-auto">

                    {/* TOP HEADER (LEFT + RIGHT TEXT) */}
                    <motion.div
                        className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* LEFT TITLE */}
                        <motion.div variants={itemVariants}>
                            <div>
                                <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                                    Do you have <br />
                                    any questions?
                                </h2>
                                <p className="text-gray-400 text-sm mt-4 max-w-md">
                                    Feel free to send us your questions or request a free consultation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="max-w-sm">
                            {/* RIGHT SMALL TEXT */}
                            <div className="max-w-sm">
                                <p className="text-gray-400 text-sm">
                                    It is necessary to wash the car before tinting, as it affects the quality of the work.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* FORM */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Form
                            form={form}
                            onFinish={onFinish}
                            layout="vertical"
                            requiredMark={false}
                        >
                            {/* ROW 1 */}
                            <motion.div variants={itemVariants}>
                                <Row gutter={[32, 24]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="fullName"
                                            label={<span className="text-white text-sm">Full Name*</span>}
                                            rules={[{ required: true, message: 'Please input your name!' }]}
                                        >
                                            <Input variant="underlined" placeholder="Full Name" />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="phone"
                                            label={<span className="text-white text-sm">Phone Number</span>}
                                        >
                                            <Input variant="underlined" placeholder="Phone Number" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </motion.div>

                            {/* ROW 2 */}
                            <motion.div variants={itemVariants}>
                                <Row gutter={[32, 24]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="company"
                                            label={<span className="text-white text-sm">Company Name</span>}
                                        >
                                            <Input variant="underlined" placeholder="Company" />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="email"
                                            label={<span className="text-white text-sm">Email*</span>}
                                            rules={[{ required: true, type: 'email' }]}
                                        >
                                            <Input variant="underlined" placeholder="Email address" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </motion.div>

                            {/* SELECT */}
                            <motion.div variants={itemVariants}>
                                <Row gutter={[32, 24]}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            name="message"
                                            label={<span className="text-white text-sm">How can we help?</span>}
                                            rules={[{ required: true }]}
                                        >
                                            <Select
                                                placeholder="Select an option"
                                                variant="underlined"
                                                className="custom-select"
                                                style={{ backgroundColor: 'transparent', color: 'white' }}

                                                options={[
                                                    { value: 'consultation', label: 'Request a consultation' },
                                                    { value: 'support', label: 'Technical support' },
                                                    { value: 'partnership', label: 'Partnership enquiry' },
                                                    { value: 'other', label: 'Other' }
                                                ]}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </motion.div>

                            {/* BUTTON */}
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    loading={loading}
                                    className="bg-white text-[#006FEA] border-0 h-12 px-8 rounded-full font-semibold mt-6 hover:bg-[#83BEFF] transition-all"
                                    icon={<SendOutlined />}
                                    iconPosition="end"
                                >
                                    {loading ? 'Sending...' : 'Send a message'}
                                </Button>
                            </motion.div>
                        </Form>
                    </motion.div>
                </div>
            </section>
            {/* GLOBAL FLOATING OBJECT (shared between sections) */}
            <div className="relative h-[200px] bg-[#081426] overflow-visible">

                <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 z-10 pointer-events-none">
                    <motion.div
                        className="w-full h-full flex items-end justify-center"
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 0.8 }}
                        viewport={{ once: true }}
                        transition={{
                            y: { duration: 3, type: "spring", bounce: 0.2 },
                            opacity: { duration: 1 }
                        }}
                    >
                        <motion.img
                            src={footerShape}
                            alt="3D Shape"
                            className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(0,111,234,0.3)]"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Contact;
