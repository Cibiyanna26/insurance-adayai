import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { getCookie } from '../../../utils/cookie.service';

const UserPurchased = () => {

    let token = getCookie('token')

    const [purchased, setPurchased] = React.useState([])

    useEffect(()=>{
        fetchUserPurchased()
    },[])

    async function fetchUserPurchased(){

        try{
            const response = await axios.get(`${ process.env.REACT_APP_API_URL }/policy/user`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setPurchased(response.data.message)
        }catch(err){    
            console.log(err)
        }
    }

    return (
        <div>
            <div className='p-[20px]'>
                {
                    purchased.length > 0 ? purchased.map((policy,index)=>{
                        return(
                            <div key={index} className='bg-gray-100 p-[20px] my-[20px] rounded-md shadow-sm border-2 border-gray-700'>
                                <h1 className='text-2xl font-semibold'>{policy.policyName}</h1>
                                <p className='text-lg'>{policy.coverAmount}</p>
                            </div>
                        )
                    }) : <h1 className='text-3xl text-center'>Nothing in the purchase 🐺</h1>
                
                }
               
            </div>
        </div>
    );
};

export default UserPurchased;