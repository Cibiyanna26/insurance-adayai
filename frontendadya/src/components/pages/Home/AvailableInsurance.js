import { Fragment } from "react";
import { Link } from "react-router-dom";
import CrossIcon from '../../../icons/crossIcon';
import CarIcon from '../../../icons/carIcon';
import HouseIcon from '../../../icons/houseIcon';
import FireIcon from '../../../icons/fireIcon';
import BookIcon from '../../../icons/bookIcon';
import AirplaneIcon from '../../../icons/airplaneIcon';


const Card = ({data}) =>{
    return(
        <>
            <Link to={'/policy/'+data.route} className="mx-auto">
                <div className="w-[300px] flex flex-col gap-[16px] p-[8px] pb-[40px] rounded-[20px] border-2 border-gray-400 hover:scale-105 duration-200 ease-in">
                
                    <div className=" rounded-[4px] p-[4px] flex flex-col gap-[16px] items-center">
                        <div className="">
                            {data.icon} 
                        </div>
                        
                        <div className="rounded-[4px] text-center">
                            <p className="text-xl font-semibold">{data.insurance}</p>
                        </div>
                        <div className="h-[50px] w-full rounded-[4px] p-[4px] flex items-center bg-green-400 justify-center text-white">
                            Explore
                        </div>
                    </div>
                    
                    
                </div>
            </Link>
        </>
    )
}
 

const AvailableInsurance = () =>{

    const insuranceData = [
        {
            insurance: 'Life & Health Insurance',
            icon:<CrossIcon/>,
            description:'',
            route:'health-insurance'
        },
        {
            insurance: 'Motor Insurance',
            icon: <CarIcon />,
            description: '',
            route:'car-insurance'
        },
        {
            insurance: 'Home Insurance',
            icon: <HouseIcon />,
            description: '',
            route: 'home-insurance'

        },
        {
            insurance: 'Fire Insurance',
            icon: <FireIcon />,
            description: '',
            route: 'fire-insurance'

        },
        {
            insurance: 'Study Insurance',
            icon: <BookIcon />,
            description: '',
            route: 'study-insurance'
        },
        {
            insurance: 'Travel Insurance',
            icon: <AirplaneIcon />,
            description: '',
            route:'travel-insurance'
        }
    ]

    return(
        <>  
            <Fragment>
                <div className="w-full my-[80px]" id="insuranceproducts z-10" >
                    <div className="w-[70%] mx-auto flex flex-col gap-[25px]">
                        <div className="flex flex-col gap-[12px] text-center">
                            <h1 className="text-3xl font-semibold">Every Insurance you need in the 21st Century</h1>
                            <p className="text-xl font-normal text-gray-700">
                                We do care, that's why we are everywhere you <br/>
                                need to be with whatever you need.
                            </p>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 gap-[25px]">
                                {
                                    insuranceData.map((data,index) =>(
                                        <Card key={index} data={data}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section className='mt-sm-5'>
                    <h2 className='productHeader text-center mb-4'>
                        Every Insurance you need in the 21st Century
                    </h2>
                    <p className='productText text-center'>
                        We do care, that's why we are everywhere you
                        <br className='break' /> need to be with whatever you need.
                    </p>

                    <div className='container '>
                        <div className='grid grid-cols-3'>
                            <div className=' text-center productCard col-md-3'>
                                <CrossIcon />
                                <h3 className='contentHeader '>
                                    Life & Health <br /> Insurance
                                </h3>
                                <p className='startingFrom '>Starting from</p>
                                <h4 className='month '>$5/month</h4>
                                <Link className='buy btn btn-lg btn-block ' to='/insure'>
                                    Quote
                                </Link>
                            </div>
                            <div className=' text-center productCard col-md-3 '>
                                <CarIcon />
                                <h3 className='contentHeader'>
                                    Motor <br /> Insurance
                                </h3>
                                <p className='startingFrom'>Starting from</p>
                                <h4 className='month'>$3/month</h4>
                                <Link className='buy btn btn-lg btn-block ' to='/insure'>
                                    Quote
                                </Link>
                            </div>
                            <div className=' text-center productCard col-md-3 '>
                                <HouseIcon />
                                <h3 className='contentHeader'>
                                    Home <br /> Insurance
                                </h3>
                                <p className='startingFrom'>Starting from</p>
                                <h4 className='month'>$10/month</h4>
                                <Link className='buy btn btn-lg btn-block ' to='/insure'>
                                    Quote
                                </Link>
                            </div>
                        </div>

                        <div className='row productList '>
                            <div className=' text-center productCard col-md-3'>
                                <FireIcon />
                                <h3 className='contentHeader '>
                                    Fire <br /> Insurance
                                </h3>
                                <p className='startingFrom '>Starting from</p>
                                <h4 className='month '>$15/month</h4>
                                <Link className='buy btn btn-lg btn-block ' to='/insure'>
                                    Quote
                                </Link>
                            </div>
                            <div className=' text-center productCard col-md-3'>
                                <BookIcon />
                                <h3 className='contentHeader'>
                                    Study <br /> Insurance
                                </h3>
                                <p className='startingFrom'>Starting from</p>
                                <h4 className='month'>$10/month</h4>
                                <Link className='buy btn btn-lg btn-block ' to='/insure'>
                                    Quote
                                </Link>
                            </div>
                            <div className=' text-center productCard col-md-3'>
                                <AirplaneIcon />
                                <h3 className='contentHeader'>
                                    Travel <br /> Insurance
                                </h3>
                                <p className='startingFrom'>Starting from</p>
                                <h4 className='month'>$30/trip</h4>
                                <Link className='buy btn btn-lg btn-block ' to='/insure'>
                                    Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section> */}
                
            </Fragment>
        </>
    )
}

export default AvailableInsurance;