import ReactECharts from 'echarts-for-react';
import icons1 from '../images/Monitor/monitorIcon1.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';
import { toast } from 'react-toastify';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

import EarnProfit from './EarnProfit';

const SolarPowerChart = () => {
  const [select, setSelect] = useState("select2");
  const [currentPv, setCurrentPv] = useState([]);
  const [pvPower, setPvPower] = useState([]);
  const [hour, setHour] = useState([]);
  const [allDay, setAllDay] = useState("");

  const [currentDay, setCurrentDay] = useState(dayjs())

  const [selectdate, setSelectdate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectmonth, setSelectmonth] = useState("");
  const [selectyear, setSelectyear] = useState("");

  useEffect(() => {
    if (select === 'select1') {
      setAllDay("/reportData/powerChart?devicePn=402A8FD7707C&type=40");
    } else if (select === "select2") {
      setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=10&date=${selectdate}`);

    } else if (select == 'select3') {
      setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=20&${selectmonth}`);
    } else {
      setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=30&${selectyear}`);
    }
  }, [select]);

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
        const pvPowerGenerations = response.data.result.map(data => data.pvPowerGeneration);
        const currentPv = response.data.result.map(data => data.currentLoadPower);
        const allHours = response.data.records;

        let collectHours = [];
        for (let i = 1; i <= allHours; i++) {
          collectHours.push(i);
        }

        setHour(collectHours);
        setPvPower(pvPowerGenerations);
        setCurrentPv(currentPv);
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
    setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=10&date=${date}`);
  };

  const handleSelectMonth = (e) => {
    const month = `year=${e.$y}&month=${(e.$M + 1).toString().padStart(2, '0')}`;
    setSelectmonth(month);
    setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=20&${month}`);
  };

  const handleSelectYear = (e) => {
    const year = `year=${e.$y}`;
    setSelectyear(year);
    setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=30&${year}`);
  };

  const option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Current load power', 'PV power on the day'],
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
        name: 'Current load power',
        type: 'line',
        color: '#23D37F',
        data: currentPv
      },
      {
        name: 'PV power on the day',
        type: 'line',
        color: '#F6841B',
        data: pvPower
      }
    ]
  };

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[95%] flex justify-between">
        <div className="w-[70%] flex flex-col">
          <div className='flex items-center gap-2'>
            <img src={icons1} alt="" className='h-[40px]' />
            <h1 className='text-[#001647] font-semibold text-2xl'>Solar Power Chart</h1>
          </div>

          <div className='flex flex-col gap-2 p-2 items-center justify-center shadow-lg rounded-xl h-[500px] w-[100%] mt-10'>
            <div className='w-[90%] mt-8 flex items-center justify-end gap-4'>
              <div className='shadow-lg font-semibold text-[#7B94B5] border-2 border-[#DADADA70] flex justify-between items-center h-[45px] w-[350px] rounded-2xl overflow-hidden bg-[#DADADA50] border-1'>
                <div
                  onClick={() => handleSelect("select2")}
                  className={`w-[25%] h-[100%] flex items-center justify-center border-x-2 border-[#DADADA70] ${select === "select2" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                  <span>Day</span>
                </div>
                <div
                  onClick={() => handleSelect("select3")}
                  className={`w-[25%] h-[100%] flex items-center justify-center border-l-2 border-[#DADADA70] ${select === "select3" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                  <span>Month</span>
                </div>
                <div
                  onClick={() => handleSelect("select4")}
                  className={`w-[25%] h-[100%] flex items-center justify-center border-l-2 border-[#DADADA70] ${select === "select4" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                  <span>Years</span>
                </div>
                <div
                  onClick={() => handleSelect("select1")}
                  className={`w-[25%] h-[100%] flex items-center justify-center border-r-2 border-l-2 border-[#DADADA70] ${select === "select1" ? 'bg-[#0072D6] text-white' : ''}`}
                >
                  <span>Total</span>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center gap-2 h-[45px]'>
                <div className='flex justify-center items-center gap-3 w-[200px] h-[45px]'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {select === "select3" ?
                      <DatePicker
                        label={"MM-YYYY"}
                        value={currentDay}
                        views={['month', 'year']}
                        onChange={(newValue) => handleSelectMonth(newValue)}
                        renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                      /> :
                      select === "select4" ?
                        <DatePicker
                          label={"YYYY"}
                          value={currentDay}
                          views={['year']}
                          onChange={(newValue) => handleSelectYear(newValue)}
                          renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                        /> :
                        select === "select2" ?
                          <DatePicker
                            label={"MM-DD-YYYY"}
                            value={currentDay}
                            onChange={(newValue) => handleSelectDate(newValue)}
                            renderInput={(params) => <TextField {...params} sx={{ height: '45px' }} />}
                          /> : ""
                    }
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

        <EarnProfit/>
      </div>
    </div>
  );
};

export default SolarPowerChart;
