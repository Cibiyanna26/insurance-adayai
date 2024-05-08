
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import {setCookie} from '../../utils/cookie.service'
import {useNavigate} from 'react-router-dom'
const SignIn = () => {
    const navigate = useNavigate();

   
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/login',{
                email,password
            })
            console.log(response.data)
            setCookie('token', response.data.token, 156)
            navigate('/')
        }catch(err){
            console.log(err.message)
        }
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-red-100">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <input onChange={(e)=>setEmail(e.target.value)} autoComplete="off" type="email" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email address" />
                        <input onChange={(e)=>setPassword(e.target.value)} autocomplete="off" type="password" className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Password" />
                        <div className="flex items-center justify-between flex-wrap">
                            <p className="text-gray-900 mt-4"> Don't have an account? <Link to={'/signup'} className="text-sm text-blue-500 -200 hover:underline mt-4">Signup</Link></p>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;