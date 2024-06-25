import ReactECharts from 'echarts-for-react';
import { chargIcon, calendarIcon, iconsZoomIn, iconsZoomOut, iconsReset } from '../images';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';
import { toast } from 'react-toastify';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

import { useTranslation } from 'react-i18next';

import useAuth from "../hook/useAuth";

const ChargePower = () => {
    const [select, setSelect] = useState("select2");
    const [pvPower, setPvPower] = useState([]);
    const [hour, setHour] = useState([]);
    const [allDay, setAllDay] = useState("");
    const [currentDay, setCurrentDay] = useState(dayjs());
    const [selectdate, setSelectdate] = useState(dayjs().format('YYYY-MM-DD'));

    const { pin, selecteLanguage } = useAuth();
    const getPin = pin ? pin.devicePn : "402A8FD7707C";
    const {t} = useTranslation()

    const echartsRef = useRef(null); // Create a ref to access the ECharts instance

    useEffect(() => {
        setAllDay(`/reportData/chargePower?devicePn=${getPin}&date=${selectdate}`);
    }, [select, pin]);

    useEffect(() => {
        getAPI();
    }, [allDay]);


    const getAPI = async () => {
        if (!allDay) return;

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
                const pvChargingPower = response.data.result.reverse().map(data => data.pvChargingPower);
                const allHours = response.data.records;

                let collectHours = [];
                for (let i = 1; i <= allHours; i++) {
                    collectHours.push(i);
                }

                setHour(collectHours);
                setPvPower(pvChargingPower);
            } else {
                toast.error(getData.code);
            }
        } catch (err) {
            toast.error(err.response?.data.message);
        }
    };

  
    // select tap events date
    const handleSelectDate = (e) => {
        const date = `${e.$y}-${(e.$M + 1).toString().padStart(2, '0')}-${e.$D.toString().padStart(2, '0')}`;
        setSelectdate(date);
        setAllDay(`/reportData/chargePower?devicePn=${getPin}&date=${date}`);
    };

    // Zoom In function
    const handleZoomIn = () => {
        const echartsInstance = echartsRef.current.getEchartsInstance();
        const zoom = echartsInstance.getOption().dataZoom[0];
        let start = zoom.start;
        let end = zoom.end;

        if (end - start > 20) {
            start += 10;
            end -= 10;
        }

        echartsInstance.dispatchAction({
            type: 'dataZoom',
            start,
            end
        });
    };

    // Zoom Out function
    const handleZoomOut = () => {
        const echartsInstance = echartsRef.current.getEchartsInstance();
        const zoom = echartsInstance.getOption().dataZoom[0];
        let start = zoom.start;
        let end = zoom.end;

        if (start > 0 || end < 100) {
            start -= 10;
            end += 10;
        }

        if (start < 0) start = 0;
        if (end > 100) end = 100;

        echartsInstance.dispatchAction({
            type: 'dataZoom',
            start,
            end
        });
    };

    // Reset Zoom function
    const handleResetZoom = () => {
        const echartsInstance = echartsRef.current.getEchartsInstance();
        echartsInstance.dispatchAction({
            type: 'dataZoom',
            start: 0,
            end: 100
        });
    };

    const option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [t("ChartPSpan3")],
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
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100,
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100,
            }
        ],
        series: [
            {
                name: t("ChartPSpan3"),
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
                <h1 className='text-[#001647] font-semibold text-2xl'>{t("ChartPSpan1")}</h1>
            </div>

            <div className='flex flex-col gap-2 p-2 items-center justify-center bg-white shadow-[2px_2px_15px_0px_#00000026] rounded-xl h-[500px] w-[100%] mt-10'>
                <div className='w-[90%] mt-8 flex items-center justify-center gap-4 relative'>
                    <div className='flex gap-1 items-center'>
                        <img src={calendarIcon} alt="" className='h-[20px]' />
                        <span className='font-semibold'>{t("ChartPSpan2")}</span>
                    </div>
                    <div className='shadow-lg font-semibold text-[#7B94B5] border-2 border-[#DADADA70] flex justify-between items-center h-[45px] w-[90px] rounded-2xl overflow-hidden bg-[#DADADA50] border-1'>
                        <div className={`w-[100%] h-[100%] flex items-center justify-center border-x-2 border-[#DADADA70] bg-[#0072D6] text-white`} >
                            <span>{t("ChartSpan3")}</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 h-[45px]'>
                        <div className='flex justify-center items-center gap-3 w-[200px] h-[45px]'>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={selecteLanguage === "EN" ? "en" : "th"}>
                                <DatePicker
                                    label={t("ChartSpan11")}
                                    value={currentDay}
                                    onChange={(newValue) => handleSelectDate(newValue)}
                                    renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>

                    <div className='flex w-[90%] justify-end gap-3 absolute top-16 right-0 text-[12px]'>
                        <button className='flex' onClick={handleZoomIn}>
                            <img src={iconsZoomIn} alt="" className='h-[20px]' />
                            <span className='text-[#3D5A80]' >{t("ChartSpan14")}</span>
                        </button>
                        <button className='flex' onClick={handleZoomOut}>
                            <img src={iconsZoomOut} alt="" className='h-[20px]' />
                            <span className='text-[#3D5A80]' >{t("ChartSpan15")}</span>
                        </button>
                        <button className='flex' onClick={handleResetZoom}>
                            <img src={iconsReset} alt="" className='h-[20px]' />
                            <span className='text-[#3D5A80]' >{t("ChartSpan16")}</span>
                        </button>
                    </div>
                </div>



                <div className='mt-6 flex items-center h-[400px] w-[95%] relative'>
                    <span className='inline-block transform -rotate-90 absolute left-[-30px]'>{t("ChartSpan7")}</span>
                    <ReactECharts
                        ref={echartsRef}
                        option={option}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '95%', width: '100%' }}
                        className='react_for_echarts ml-5'
                    />
                    <span className='absolute bottom-8 -right-1'>{t("ChartSpan8")}</span>
                </div>
            </div>
        </div>
    )
}

export default ChargePower;
