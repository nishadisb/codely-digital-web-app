const Footer = () => {
    return (
        <footer className="container mx-auto px-6 py-12 border-t border-white/5 bg-[#0a0e27]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#006FEA] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">C</span>
                    </div>
                    <span className="text-xl font-bold">codely</span>
                </div>

                <div className="flex gap-8 text-sm text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>

                <div className="text-gray-500 text-sm">
                    © 2025 Codely Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
