import { Link , useLocation } from "react-router-dom";
import InstagramIcon from "../../icons/instagramIcon";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';    
import {useSelector} from 'react-redux'
import Avatar from '@mui/material/Avatar';

const Header = () =>{
    const location = useLocation();
    console.log(location.pathname); 
    const {userData} = useSelector(store=>store.userData)
    return(
        <>
            <header className="border-b-2 border-gray-300 shadow-lg">
                <nav className="flex flex-row justify-between text-lg py-[16px] px-[20px]">
                    <div className="flex flex-row gap-[32px]">
                        <Link to="/" className="text-2xl font-semibold flex flex-row gap-[16px] items-center">
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/security-checked--v1.png" alt="security-checked--v1" />
                            <text>SKC Insurance</text>
                        </Link>
                    </div>
                    <div className="flex flex-row gap-[24px] items-center text-[18px] mr-[140px]">
                        <Link to="/" className={`${location.pathname === '/' ? 'text-green-600' : ''}`}>Home</Link>
                        <Link to={'/user-insurance'} className={`${location.pathname === '/user-insurance' ? 'text-green-600' : ''}`}>
                            <text className="">Applied</text>
                        </Link>
                        {/* <Link to={'/contact'} className={`${location.pathname === '/contact' ? 'text-green-600' : ''}`}>Contact</Link> */}
                        <Link to={'/signin'} className="hover:text-green-600">Login</Link>
                        
                    </div>
                    <div className="flex items-center">
                        
                        <div className="flex flex-row gap-[12px] items-center rounded-xl bg-gray-200 p-[8px]">   
                            <Avatar sx={{ bgcolor: 'green' }} title={userData.username}>{userData.username[0].toUpperCase()}</Avatar>
                            <p className="capitalize">{userData.username}</p>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;