import React, { useEffect , useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Radio } from '@mui/material';
import PaymentCard from './PaymentCard';

const PolicyDetails = () => {

    const { insuranceType , policyId } = useParams();
    const {policies} = useSelector(store => store.policy);
    const [policyData, setPolicyData] = useState({});
    const [totalAmount , setTotalAmount] = useState(0);
    const [filterAmount , setFilterAmount] = useState(0);
    const [payment, setPayment] = useState(0);

    
    useEffect(() => {
        
        setPolicyData(policies[policyId])
        setTotalAmount('$'+policies[policyId].coverAmount)
        setFilterAmount('$'+policies[policyId].coverAmount)
    }, [policyId]);

    return (
        <>
            <div className='bg-gray-100 p-[20px] relative h-[85vh]'>
                {
                    payment  === 1 ? <PaymentCard setPayment={setPayment} data={policyData}  totalAmount={totalAmount}/> : ''
                }
                <div className="w-[80%] mx-auto flex flex-row gap-[20px] ">
                    <div className='w-[60%] mx-auto flex flex-col gap-[20px]'>
                        <div className='h-[111px] rounded-xl flex flex-col justify-between shadow-md bg-white  overflow-hidden '>
                            <div className='flex flex-row gap-[16px] mt-[20px]'>
                                <div className='w-[100px] flex items-center'>
                                    <img src={policyData.image}></img>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-semibold'>{policyData?.policyName}</h1>
                                    <p className='text-green-400'>386 Cashless hospitals (+Cashless anywhere support)</p>
                                </div>
                            </div>
                            <div className='bg-cyan-200 text-cyan-700 text-center'>
                                <h1>PolicyBazaar is a 5 Star Partner for Care Health</h1>
                            </div>
                        </div>
                        <div className='p-[16px] h-[162px] rounded-xl bg-white flex flex-col gap-[16px]'>
                            <h1 className='text-xl font-semibold'>Cover Amount</h1>
                            <p className='text-gray-500'>Is this cover amount sufficient ? </p>
                            <select className='h-[50px] border-2 border-black rounded-[4px]' value={totalAmount} onChange={(e)=>{
                                setFilterAmount(e.target.value)
                                setTotalAmount(e.target.value)
                            }
                            }>
                                <option>${policyData?.coverAmount}</option>
                                <option>${2* policyData?.coverAmount}</option>
                                <option>${3 * policyData?.coverAmount}</option>
                            </select>
                        </div>

                        <div className='h-[100px] rounded-xl bg-white p-[16px]'>
                            <h1 className='text-xl font-semibold'>Member Covered</h1>
                            <text className='font-medium text-gray-600'>Cibiyanna P</text>
                        </div>
                    </div>
                    <div className='w-[30%] h-[250px] mx-auto rounded-xl shadow-sm p-[16px] flex flex-col gap-[16px] bg-white'>
                        <h1 className='text-2xl font-semibold'>Summary</h1>
                        <p>Proceed to Claim Your Policy</p>
                        <div className='flex flex-row justify-between'>
                            <h1 className='text-lg font-semibold'>Total Amount</h1>
                            <p className='font-light text-gray-600'>{filterAmount}</p>
                        </div>
                        <button onClick={()=>setPayment(1)} className='p-[20px] rounded-xl w-full bg-orange-500 hover:bg-orange-400 text-white'>Proceed to proporsal</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PolicyDetails;