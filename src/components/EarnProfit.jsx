import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import icons1 from '../images/Monitor/monitorIcon2.png';
import { getAccessToken } from '../utils/local-storage';

const EarnProfit = () => {
    const [select, setSelect] = useState("select1");
    const [percentage, setPercentage] = useState(100);

    const [getAPI, setGetAPI] = useState("");

    const [selectdate, setSelectdate] = useState(dayjs().format('YYYY-MM-DD'));
    const [selectmonth, setSelectmonth] = useState("");

    const [unit, setUnit] = useState("");
    const [bill, setBill] = useState("");

    useEffect(() => {
        if (select === "select1") {
            setGetAPI("/solarDevice/electricityBill?type=10");
        } else if (select === "select2") {
            setGetAPI(`/solarDevice/electricityBill?type=30&date=${selectdate}`);
        } else if (select === "select3") {
            setGetAPI(`/solarDevice/electricityBill?type=20&${selectmonth}`);
        }
    }, [select, selectdate, selectmonth]);

    useEffect(() => {
        getBill();
    }, [getAPI]);

    const handleSelect = (e) => {
        setSelect(e);
    };

    const handleSelectDay = (e) => {
        const date = `${e.$y}-${(e.$M + 1).toString().padStart(2, '0')}-${e.$D.toString().padStart(2, '0')}`;
        setSelectdate(date);
        setGetAPI(`/solarDevice/electricityBill?type=30&date=${date}`);
    };

    const handleSelectMonth = (e) => {
        const month = `year=${e.$y}&month=${(e.$M + 1).toString().padStart(2, '0')}`;
        setSelectmonth(month);
        setGetAPI(`/solarDevice/electricityBill?type=20&${month}`);
    };

    const getBill = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_TEST}${getAPI}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getAccessToken()
                }
            });

            const getData = response.data;
            if (getData.code === 0) {
                setUnit(getData.result.unit);
                setBill(Number(getData.result.profitEnergyBill).toFixed(2));
            } else {
                toast.error(getData.code);
            }
        } catch (err) {
            toast.error(err.response?.data.message);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
                <img src={icons1} alt="" className="h-[40px]" />
                <h1 className="text-[#001647] font-semibold text-2xl">Earn Profit Energy Bill</h1>
            </div>

            <div className="mt-6 shadow-lg font-semibold text-[#7B94B5] border-2 border-[#DADADA70] flex justify-between items-center h-[45px] w-[250px] rounded-2xl overflow-hidden bg-[#DADADA50] border-1">
                <div
                    onClick={() => handleSelect("select1")}
                    className={`w-[33.3%] h-[100%] flex items-center justify-center border-r-2 border-l-2 border-[#DADADA70] ${select === "select1" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                    <span>Total</span>
                </div>
                <div
                    onClick={() => handleSelect("select2")}
                    className={`w-[33.33%] h-[100%] flex items-center justify-center border-l-2 border-[#DADADA70] ${select === "select2" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                    <span>Day</span>
                </div>
                <div
                    onClick={() => handleSelect("select3")}
                    className={`w-[33.33%] h-[100%] flex items-center justify-center border-l-2 border-[#DADADA70] ${select === "select3" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                    <span>Month</span>
                </div>
            </div>

            <div className="mt-8 w-[100%]">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {select === "select2" ?
                        <DatePicker
                            label="DD-MM-YYYY"
                            value={dayjs()}
                            onChange={(newValue) => handleSelectDay(newValue)}
                            renderInput={(params) => <TextField {...params} />}
                        /> :
                        select === "select3" ?
                            <DatePicker
                                label="MM-YYYY"
                                views={['month', 'year']}
                                value={dayjs()}
                                onChange={(newValue) => handleSelectMonth(newValue)}
                                renderInput={(params) => <TextField {...params} />}
                            /> : ""}
                </LocalizationProvider>
            </div>

            <div className="text-lg flex flex-col items-center mt-5 w-[65%] lg:w-[95%] h-[418px] shadow-[2px_2px_15px_0px_#00000026] rounded-xl gap-2">
                <div className="w-[90%] flex justify-between pt-10">
                    <span>Unit</span>
                    <div>
                        <span className="font-semibold">{unit}</span>
                        <span className="pl-1">kWh</span>
                    </div>
                </div>
                <div className="w-[90%] flex justify-between">
                    <span>Save</span>
                    <div>
                        <span className="font-semibold text-xl">{bill}</span>
                        <span className="pl-1">THB</span>
                    </div>
                </div>

                <div className="relative w-40 h-40 mt-6">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle className="text-gray-200 stroke-current" strokeWidth="14" cx="50" cy="50" r="40" fill="transparent" />
                        <circle className="text-[#107c4ad5] progress-ring__circle stroke-current" strokeWidth="14" strokeLinecap="round" cx="50" cy="50" r="40" fill="transparent" strokeDasharray="251.2" strokeDashoffset={`calc(251.2 - (251.2 * ${percentage}) / 100)`} />
                        <text x="50" y="50" fill="#107C49" fontSize="18" textAnchor="middle" alignmentBaseline="middle" className="font-extrabold">{percentage}%</text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default EarnProfit;
