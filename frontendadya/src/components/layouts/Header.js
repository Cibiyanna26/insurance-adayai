import { Link , useLocation } from "react-router-dom";
import InstagramIcon from "../../icons/instagramIcon";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';    

const Header = () =>{
    const location = useLocation();
    console.log(location.pathname); 
    return(
        <>
            <header className="border-b-2 border-gray-300 shadow-lg">
                <nav className="flex flex-row justify-between text-lg p-[16px]">
                    <div className="flex flex-row gap-[32px]">
                        <Link to="/" className="text-2xl font-semibold flex flex-row gap-[16px] items-center">
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/security-checked--v1.png" alt="security-checked--v1" />
                            <text>SKC Insurance</text>
                        </Link>
                       
                    </div>
                    <div className="flex flex-row gap-[24px] items-center text-[18px]">
                        <Link to="/" className={`${location.pathname === '/' ? 'text-green-500' : ''}`}>Home</Link>
                        <Link to={'/user-insurance'} className={`${location.pathname === '/user-insurance' ? 'text-green-500' : ''}`}>
                            <text className="">Applied</text>
                        </Link>
                        <Link to={'/contact'} className={`${location.pathname === '/contact' ? 'text-green-500' : ''}`}>Contact</Link>
                        <Link to={'/signin'} className="hover:text-green-500">Login</Link>
                    </div>
                   
                </nav>
            </header>
        </>
    )
}

export default Header;