import { Link } from "react-router-dom";
import InstagramIcon from "../../icons/instagramIcon";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';    

const Header = () =>{
    return(
        <>
            <header className="border-b-2 border-gray-300 shadow-lg">
                <nav className="flex flex-row justify-between text-lg p-[16px]">
                    <div className="flex flex-row gap-[32px]">
                        <Link to="/" className="text-2xl font-semibold">Policy Ins</Link>
                       
                    </div>
                    <div className="flex flex-row gap-[24px]">
                        <Link to="/" className="hover:text-orange-500">Insurance Products</Link>
                        <Link to={'/user-insurance'} className="flex flex-row gap-[8px] items-center justify-center hover:text-orange-500">
                            <text>Your Insurances</text>
                            <ShoppingCartIcon />
                        </Link>
                    </div>
                    
                </nav>
            </header>
        </>
    )
}

export default Header;