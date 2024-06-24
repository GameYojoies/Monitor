import ReactECharts from 'echarts-for-react';
import {chargIcon} from '../images'
import {  useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';
import { toast } from 'react-toastify';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

import useAuth from "../hook/useAuth";

const ChargePower = () => {
    const [select, setSelect] = useState("select2");
 
    const [pvPower, setPvPower] = useState([]);
    const [hour, setHour] = useState([]);
    const [allDay, setAllDay] = useState("");

    const [currentDay, setCurrentDay] = useState(dayjs())

    const [selectdate, setSelectdate] = useState(dayjs().format('YYYY-MM-DD'));

    const { pin } = useAuth();
    const getPin = pin ? pin.devicePn : "402A8FD7707C"


    useEffect(() => {
        setAllDay(`/reportData/chargePower?devicePn=${getPin}&date=${selectdate}`);
    }, [select, pin]);

    const getAPI = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: `${import.meta.env.VITE_API_TEST}${allDay}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getAccessToken()
                }
            });

            const getData = response.data;

            if (getData.code === 0) {
                const pvChargingPower = response.data.result.map(data => data.pvChargingPower);
               
                const allHours = response.data.records;

                let collectHours = [];
                for (let i = 1; i <= allHours; i++) {
                    collectHours.push(i);
                }

                setHour(collectHours);
                setPvPower(pvChargingPower)
            } else {
                toast.error(getData.code);
            }
        } catch (err) {
            toast.error(err.response?.data.message);
        }
    };

    useEffect(() => {
        getAPI();
    }, [allDay]);


    // select tap events date
    const handleSelectDate = (e) => {
        const date = `${e.$y}-${(e.$M + 1).toString().padStart(2, '0')}-${e.$D.toString().padStart(2, '0')}`;
        setSelectdate(date);
        setAllDay(`/reportData/chargePower?devicePn=${getPin}&date=${date}`);
    };



    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['PV Charging Power'],
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: hour,
            splitLine: {
                show: true,
                lineStyle: {
                    border: '1px solid #3B78FE1A',
                    type: 'solid'
                },
            }
        },
        yAxis: {
            type: 'value',
        },
        series: [
            
            {
                name: 'PV Charging Power',
                type: 'line',
                color: '#472BF0',
                data: pvPower
            }
        ]
    };
    return (
        <div>
            <div className='flex items-center gap-2'>
                <img src={chargIcon} alt="" className='h-[40px]' />
                <h1 className='text-[#001647] font-semibold text-2xl'>Charge Power</h1>
            </div>

            <div className='flex flex-col gap-2 p-2 items-center justify-center shadow-[2px_2px_15px_0px_#00000026] rounded-xl h-[500px] w-[100%] mt-10'>
                <div className='w-[90%] mt-8 flex items-center justify-center gap-4'>
                    <span className='font-semibold'>Today</span>
                    <div className='shadow-lg font-semibold text-[#7B94B5] border-2 border-[#DADADA70] flex justify-between items-center h-[45px] w-[90px] rounded-2xl overflow-hidden bg-[#DADADA50] border-1'>
                        <div className={`w-[100%] h-[100%] flex items-center justify-center border-x-2 border-[#DADADA70] bg-[#0072D6] text-white`} >
                            <span>Day</span>
                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 h-[45px]'>
                        <div className='flex justify-center items-center gap-3 w-[200px] h-[45px]'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label={"MM-DD-YYYY"}
                                    value={currentDay}
                                    onChange={(newValue) => handleSelectDate(newValue)}
                                    renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex items-center h-[400px] w-[95%] relative'>
                    <span className='inline-block transform -rotate-90 absolute left-[-30px]'>Power (kWh)</span>
                    <ReactECharts
                        option={option}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '95%', width: '100%' }}
                        className='react_for_echarts ml-5'
                    />
                    <span className='absolute bottom-8 -right-1'>H</span>
                </div>
            </div>
        </div>
    )
}

export default ChargePower