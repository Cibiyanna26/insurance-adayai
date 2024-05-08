import { Fragment, useEffect , useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import  axios from 'axios'
import { setPolicies } from '../../../redux/policySlice';
import {useDispatch} from 'react-redux';

const PolicyCard = ({unique,data , insuranceType}) =>{
    return(
        <>
            <Link to={`/policy/${insuranceType}/${unique}`}>
                <div className='flex flex-row'>
                    <div className='w-[100px] h-[80px] p-[8px] bg-white shadow-lg border-2 border-gray-100 rounded-tl-[12px] rounded-bl-[12px]'>
                            <img src={data.image} className='w-full h-full'></img>
                    </div>
                    <div className='w-full p-[16px] text-[14px] flex flex-row gap-[20px] rounded-rb-[12px] shadow-sm mx-auto bg-gray-50 border-[1px] border-gray-300 rounded-b-[16px] rounded-br-[16px]'>
                        <div className='flex flex-col gap-[20px]'>
                            <h1 className='text-xl font-semibold'>{data.policyName}</h1>
                            <ul className='text-light text-gray-600'>
                                {
                                    data.recommendAds.map((ad,index) => {
                                        return(
                                            <>
                                                <li>✅{ad}</li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                            <text className='text-green-600'>Check all Features and Purcharse </text>
                        </div>
                        <div className='flex items-center flex-col gap-[12px] w-[40%] justify-center'>
                            <div className='flex flex-row gap-[20px] border-[1px] border-gray-500 w-full rounded-xl p-[16px] items-center justify-center'>
                                <div className='flex flex-col  gap-[8px] justify-center items-center'>
                                    <text className='text-blue-800 text-lg font-semibold'>Cover amount</text>
                                    <text className='text-gray-600'>${data.coverAmount}</text>
                                </div>
                            </div>
                            <button className='p-[20px] text-white rounded-xl w-full bg-orange-500 hover:bg-orange-400'>${Math.floor(data.coverAmount/24)}/month</button>
                            <text className='text-gray-600 font-light'>${Math.floor(data.coverAmount/2)} annually</text>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}


const Policy = () => {
    const { insuranceType } = useParams();
    const [insuranceData, setInsuranceData] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        fetchAvailableInsurance(insuranceType)
    },[insuranceType])

    const fetchAvailableInsurance = async (insuranceType) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/policy?type=${insuranceType}`);
            const availableInsurance = response.data.message;
            setInsuranceData(availableInsurance); 
            dispatch(setPolicies(availableInsurance))

        } catch (error) {
            console.error('Error fetching available insurance:', error);
            // Handle the error
        }
    }

    return (
        <>
            <Fragment>
                <div className='p-[16px] flex flex-col gap-[20px] bg-gray-100'>
                    <div className='flex flex-col gap-[20px]'>
                         <h1 className='text-3xl font-bold text-gray-700 font-sans text-center'>Insurance Plans Available</h1>
                        <p className='text-xl font-normal text-gray-500 text-center'>Choose the right plan for your needs !</p>
                    </div>
                    <div className='w-[60%] mx-auto flex flex-col gap-[16px]'>
                        {
                            insuranceData && insuranceData.map((data, index) => {
                                return (
                                    <PolicyCard key={index} unique={index} data={data} insuranceType={insuranceType}/>
                                )
                            })
                        }
                    </div>
                </div>
                
            </Fragment>
        </>
    );
}

export default Policy;