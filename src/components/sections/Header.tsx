import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container mx-auto px-6 py-6 flex justify-between items-center relative z-40">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#006FEA] rounded-full flex items-center justify-center shadow-lg shadow-[#006FEA]/50">
                    <span className="text-white font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">codely</span>
            </div>
           
            <Link to="/menu" className="md:hidden text-white text-2xl">
                <MenuOutlined />
            </Link>
        </header>
    );
};

export default Header;
