import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between">
            <div className="flex items-center">
                {/* <img src={logo} alt="Codely" className="h-7 md:h-9 object-contain" /> */}
            </div>
            
            <Link to={isHomePage ? "/home" : "/"}>
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                    {isHomePage ? (
                        <CloseOutlined className="text-white text-2xl" />
                    ) : (
                        <MenuOutlined className="text-white text-2xl" />
                    )}
                </button>
            </Link>
        </header>
    );
};

export default Header;
