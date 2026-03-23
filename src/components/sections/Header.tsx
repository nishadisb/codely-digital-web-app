import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isMenuPage = location.pathname === '/menu';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between">
            <div className="flex items-center">
                {/* <img src={logo} alt="Codely" className="h-7 md:h-9 object-contain" /> */}
            </div>
            
            <Link to={isMenuPage ? "/" : "/menu"}>
                <button className="w-8 h-8 mt-2 rounded-full  flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
                    {isMenuPage ? (
                        <CloseOutlined className="text-white text-md" />
                    ) : (
                        <MenuOutlined className="text-white text-md" />
                    )}
                </button>
            </Link>
        </header>
    );
};

export default Header;
