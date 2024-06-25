import { loadData, inverterData, batteryData, photovolData, gridData } from '../data/data';
import { iconsSys, iconsSys1, iconsSys2, iconsSys3 } from '../images';


const SolarDetail = () => {


    return (
        <div >

            <div className='flex items-center gap-2'>
                <img src={iconsSys} alt="" className='h-[40px]' />
                <h1 className='text-[#001647] font-semibold text-2xl'>System Details</h1>
            </div>

            <div className='w-[100%] py-4 bg-white flex flex-col items-center mt-10 shadow-[2px_2px_15px_0px_#00000026] rounded-xl'>

                <div className='w-[95%] h-[55px] bg-[#133261] flex pl-[20px] rounded-tl-lg rounded-tr-lg'>
                    <div className='text-white flex items-center gap-2 w-[30%]'>
                        <img src={iconsSys1} alt="" className='h-[25px]' />
                        <span className='font-semibold'>System Components</span>
                    </div>
                    <div className='text-white flex items-center gap-2 w-[30%]'>
                        <img src={iconsSys2} alt="" className='h-[25px]' />
                        <span className='font-semibold'>System Metrics</span>
                    </div>
                    <div className='text-white flex items-center gap-2 w-[35%]'>
                        <img src={iconsSys3} alt="" className='h-[20px]' />
                        <span className='font-semibold'>Details</span>
                    </div>
                </div>
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>Load</div>
                {loadData.map((data) =>

                    <div className='w-[95%] h-[70px] flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>Inverter</div>
                {inverterData.map((data) =>

                    <div className='w-[95%] h-[70px] flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>Battery</div>
                {batteryData.map((data) =>

                    <div className='w-[95%] h-[70px] flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>Photovoltaic</div>
                {photovolData.map((data) =>

                    <div className='w-[95%] h-[70px] flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}
                <div className='w-[95%] h-[65px] bg-[#F1F1F1] flex pl-[50px] items-center font-semibold'>Grid</div>
                {gridData.map((data) =>

                    <div className='w-[95%] h-[70px] flex items-center pl-[10px] hover:bg-[#BFD7F8] border-b-2'>
                        <div className='w-[35%]'>
                            <span>{data.id}.</span>
                            <span className='pl-4'>{data.name}</span>
                        </div>

                        <div className='w-[65%] flex items-center'>
                            <div className='w-[25%]'>
                                <span>{data.value}</span>
                                <span >{data.unit}</span>
                            </div>
                            <div className='w-[75%]'>
                                <span >{data.des}</span>
                            </div>
                        </div>

                    </div>

                )}


                <div className='h-[30px]'></div>

            </div>

            <div className='h-[20px]'></div>


        </div>
    )
}

export default SolarDetail