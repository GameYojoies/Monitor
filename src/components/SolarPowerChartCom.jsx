import ReactECharts from 'echarts-for-react';
import { solarIcon, iconsZoomIn, iconsZoomOut, iconsReset, iconsConsum } from '../images';
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

import useAuth from "../hook/useAuth";
import { useTranslation } from 'react-i18next';

const SolarPwerChartCom = () => {

    const { t, i18n } = useTranslation()

    const [select, setSelect] = useState("select2");
    const [currentPv, setCurrentPv] = useState([]);
    const [pvPower, setPvPower] = useState([]);
    const [sumPv, setSumPv] = useState(0);
    const [hour, setHour] = useState([]);
    const [allDay, setAllDay] = useState("");

    const [currentDay, setCurrentDay] = useState(dayjs())

    const [selectdate, setSelectdate] = useState(dayjs().format('YYYY-MM-DD'));
    const [selectmonth, setSelectmonth] = useState("");
    const [selectyear, setSelectyear] = useState("");

    const { pin, setSolarDate, selecteLanguage } = useAuth();
    const getPin = pin ? pin.devicePn : "402A8FD7707C"

    const echartsRef = useRef(null);


    useEffect(() => {
        if (select === 'select1') {
            setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=40`);
        } else if (select === "select2") {
            setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=10&date=${selectdate}`);
            setSolarDate(selectdate)

        } else if (select == 'select3') {
            setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=20&${selectmonth}`);
        } else {
            setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=30&${selectyear}`);
        }


    }, [select, pin]);

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
                const reversedResult = response.data.result.reverse();
                const pvPowerGenerations = reversedResult.map(data => data.pvPowerGeneration);
                const currentPv = reversedResult.map(data => data.currentLoadPower);
                const allHours = response.data.records;

                let collectHours = [];
                for (let i = 1; i <= allHours; i++) {
                    collectHours.push(i);
                }

                let sum = (currentPv.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) / 1000;


                setHour(collectHours);
                setPvPower(pvPowerGenerations);
                setCurrentPv(currentPv);
                setSumPv(sum.toLocaleString())
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

    const handleSelect = (e) => {
        setSelect(e);
    };

    // select tap events date
    const handleSelectDate = (e) => {
        const date = `${e.$y}-${(e.$M + 1).toString().padStart(2, '0')}-${e.$D.toString().padStart(2, '0')}`;
        setSelectdate(date);
        setSolarDate(date)
        setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=10&date=${date}`);
    };

    const handleSelectMonth = (e) => {
        const month = `year=${e.$y}&month=${(e.$M + 1).toString().padStart(2, '0')}`;
        setSelectmonth(month);
        setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=20&${month}`);
    };

    const handleSelectYear = (e) => {
        const year = `year=${e.$y}`;
        setSelectyear(year);
        setAllDay(`/reportData/powerChart?devicePn=${getPin}&type=30&${year}`);
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
            data: [t("ChartSpan9"), t("ChartSpan10")],
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
                name: t("ChartSpan9"),
                type: 'line',
                color: '#23D37F',
                data: currentPv
            },
            {
                name: t("ChartSpan10"),
                type: 'line',
                color: '#F6841B',
                data: pvPower
            }
        ]
    };
    return (
        <div>
            <div className='flex items-center gap-2'>
                <img src={solarIcon} alt="" className='h-[40px]' />
                <h1 className='text-[#001647] font-semibold text-2xl'>{t("ChartSpan1")}</h1>
            </div>

            <div className='flex flex-col gap-2 p-2 items-center justify-center bg-white shadow-[2px_2px_15px_0px_#00000026] rounded-xl h-auto w-[100%] mt-10'>
                <div className='w-[90%] mt-8 flex items-center justify-center gap-4 relative'>
                    <span>{t("ChartSpan2")}</span>
                    <div className='shadow-lg font-semibold text-[#7B94B5] border-2 border-[#DADADA70] flex justify-between items-center h-[45px] w-[350px] rounded-2xl overflow-hidden bg-[#DADADA50] border-1'>
                        <div
                            onClick={() => handleSelect("select2")}
                            className={`cursor-pointer w-[25%] h-[100%] flex items-center justify-center border-x-2 border-[#DADADA70] ${select === "select2" ? 'bg-[#0072D6] text-white' : ''}`}
                        >
                            <span>{t("ChartSpan3")}</span>
                        </div>
                        <div
                            onClick={() => handleSelect("select3")}
                            className={`cursor-pointer w-[25%] h-[100%] flex items-center justify-center border-l-2 border-[#DADADA70] ${select === "select3" ? 'bg-[#0072D6] text-white' : ''}`}
                        >
                            <span>{t("ChartSpan4")}</span>
                        </div>
                        <div
                            onClick={() => handleSelect("select4")}
                            className={`cursor-pointer w-[25%] h-[100%] flex items-center justify-center border-l-2 border-[#DADADA70] ${select === "select4" ? 'bg-[#0072D6] text-white' : ''}`}
                        >
                            <span>{t("ChartSpan5")}</span>
                        </div>
                        <div
                            onClick={() => handleSelect("select1")}
                            className={`cursor-pointer w-[25%] h-[100%] flex items-center justify-center border-r-2 border-l-2 border-[#DADADA70] ${select === "select1" ? 'bg-[#0072D6] text-white' : ''}`}
                        >
                            <span>{t("ChartSpan6")}</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 h-[45px]'>
                        <div className='flex justify-center items-center gap-3 w-[200px] h-[45px]'>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={selecteLanguage == "EN" ? "en" : "th"}>
                                {select === "select3" ?
                                    <DatePicker
                                        label={t("ChartSpan12")}
                                        value={currentDay}
                                        views={['month', 'year']}
                                        onChange={(newValue) => handleSelectMonth(newValue)}
                                        shouldDisableDate={(date) => dayjs(date).isAfter(dayjs(), 'year')}
                                        renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                                    /> :
                                    select === "select4" ?
                                        <DatePicker
                                            label={t("ChartSpan13")}
                                            value={currentDay}
                                            views={['year']}
                                            onChange={(newValue) => handleSelectYear(newValue)}
                                            shouldDisableDate={(date) => dayjs(date).isAfter(dayjs(), 'year')}
                                            renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                                        /> :
                                        select === "select2" ?
                                            <DatePicker
                                                label={t("ChartSpan11")}
                                                value={currentDay}
                                                onChange={(newValue) => handleSelectDate(newValue)}
                                                shouldDisableDate={(date) => date.isAfter(currentDay)}
                                                renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                                            /> : ""
                                }
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

                <div className='mt-12 flex items-center h-[400px] w-[95%] relative'>
                    <span className='inline-block transform -rotate-90 absolute left-[-30px] font-semibold'>{t("ChartSpan7")}</span>
                    <ReactECharts
                        ref={echartsRef}
                        option={option}
                        notMerge={true}
                        lazyUpdate={true}
                        style={{ height: '95%', width: '100%' }}
                        className='react_for_echarts ml-5'
                    />
                    <span className='absolute bottom-8 -right-1 font-semibold'>{t("ChartSpan8")}</span>
                </div>

                <div className='flex items-center gap-2'>
                    <img src={iconsConsum} alt="" className='h-[24px] ' />
                    <span>{t("ChartSpan17")} </span>
                    <span className='font-semibold'>{sumPv}</span>
                    <span className='font-semibold'>kWh<span>{
                        select == "select1" ? "" :
                            select == "select2" ? "/" + t("ChartSpan3") :
                                select == "select3" ? "/" + t("ChartSpan4") :
                                    select == "select4" ? "/" + t("ChartSpan5") : ""
                    }</span></span>


                </div>

                <div className='h-[10px]'></div>

            </div>


        </div>
    )
}

export default SolarPwerChartCom