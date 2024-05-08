
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { setCookie } from "../../utils/cookie.service";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
                email, password ,username , confirmPassword
            })
            setCookie('token',response.data.token,156)
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }
    return(
        <>  
            <div className="flex flex-col items-center justify-center h-screen bg-red-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign up</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address"  autoComplete="off" />
                        <input onChange={(e)=>setUsername(e.target.value)}  type="text" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="username"  autoComplete="off"/>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password"   autoComplete="off"/>
                        <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Confirm password"  autoComplete="off" />

                        <div className="flex items-center justify-between flex-wrap">
                        
                            <p className="text-gray-900 mt-4"> Don't have an account? <Link to={'/signin'} className="text-sm text-blue-500 -200 hover:underline mt-4">Signin</Link></p>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;