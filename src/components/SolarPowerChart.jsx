
import ReactECharts from 'echarts-for-react';
import icons1 from '../images/Monitor/monitorIcon1.png'
import icons2 from '../images/Monitor/monitorIcon2.png'
import { useEffect, useState } from 'react';
import icons3 from '../images/Monitor/monitorIcon3.png'
import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';
import { toast } from 'react-toastify';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const SolarPowerChart = () => {


  const [select, setSelect] = useState("select1");
  const [currentPv, setCurrentPv] = useState([]);
  const [pvPower, setPvPower] = useState([]);
  const [hour, setHour] = useState([]);
  const [allDay, setAllDay] = useState("");
  const [selectDate, setSelectDate] = useState("");


  useEffect(() => {
    if (select === 'select1') {
      setAllDay("/reportData/powerChart?devicePn=402A8FD7707C&type=40");
    } else {
      // setAllDay("/reportData/powerChart?devicePn=402A8FD7707C&type=20&year=2024&month=06");
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
        console.log(pvPowerGenerations, currentPv, collectHours);
      } else {
        toast.error(getData.code);
      }
    } catch (err) {
      console.log("err:", err);
      toast.error(err.response?.data.message);
    }
  };

  useEffect(() => {
    getAPI();
  }, [allDay]);

  const handleSelect = (e) => {
    setSelect(e);
  };

  const handleSelectDate = (e) => {
    setSelectDate(e);
    setAllDay(`/reportData/powerChart?devicePn=402A8FD7707C&type=10&date=${e.$y}-${ (e.$M + 1) <= 10? "0" + (e.$M + 1) : (e.$M + 1) }-${e.$D <= 10 ? "0"+e.$D: e.$D}`);
    console.log(e,e.$D, e.$M, e.$y );

  }

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
    <div className="w-full flex justify-center mt-10">
      <div className="w-[95%] flex justify-between">

        {/* content graph */}
        <div className="w-[70%] flex flex-col">
          <div className='flex items-center gap-2'>
            <img src={icons1} alt="" className='h-[40px]' />
            <h1 className='text-[#001647] font-semibold text-2xl'>Solar Power Chart</h1>
          </div>

          {/* <div className='mt-20'>

          </div> */}

          <div className='flex gap-2 p-2 items-center justify-center shadow-lg rounded-xl h-[400px] w-[100%] mt-10'>

            <div className='flex items-center h-[400px] w-[77%] relative'>

              <span className='inline-block transform -rotate-90 absolute left-[-30px]'>Power (kWh)</span>
              <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                style={{ height: '95%', width: '100%' }}
                className='react_for_echarts ml-5'
              />
              <span className='absolute bottom-8 -right-10'>Time (H)</span>

            </div>

            <div className='flex flex-col gap-1'>
              <span>Energy consumption: </span>
              <span className='font-semibold'>137.23 kWh/Day</span>

            </div>

          </div>

        </div>

        {/* content bill */}
        <div className='flex flex-col items-center'>

          <div className='flex items-center gap-2'>
            <img src={icons2} alt="" className='h-[40px]' />
            <h1 className='text-[#001647] font-semibold text-2xl'>Earn Pofit Energy Bill</h1>
          </div>

          <div className='mt-8'>

            <div className='shadow-lg font-semibold text-[#7B94B5] border-2 border-[#DADADA70] flex justify-between items-center h-[45px] w-[250px] rounded-2xl overflow-hidden bg-[#DADADA50] border-1'>
              <div
                onClick={() => handleSelect("select1")}
                className={`w-[33.33%] h-[100%] flex items-center justify-center border-r-2 border-[#DADADA70] ${select === "select1" ? 'bg-[#0072D6] text-white' : ''}`}
              >
                <span>Total</span>
              </div>
              <div
                onClick={() => handleSelect("select2")}
                className={`w-[33.33%] h-[100%] flex items-center justify-center border-x-2 border-[#DADADA70] ${select === "select2" ? 'bg-[#0072D6] text-white' : ''}`}
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

          </div>


          <div className='flex flex-col justify-center gap-2 mt-5'>

            <div className='h-[1px] w-[200px] border-b-2 border-[#4F6785]'></div>
            <div className='flex justify-center items-center gap-3'>
              {/* <img src={icons3} alt="" className='h-[25px]' />
              <span> 22 June, 2024  </span> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker  onChange={(newValue) => handleSelectDate(newValue)} />
              </LocalizationProvider>



            </div>
            <div className='h-[1px] w-[200px] border-b-2 border-[#4F6785]'></div>

          </div>

          <div className='text-lg flex flex-col items-center mt-5 w-[300px] h-[300px] shadow-lg rounded-xl gap-2'>
            <div className='w-[90%] flex justify-between pt-2'>
              <span>Unit</span>
              <div>
                <span className='font-semibold'>2639.1</span>
                <span>kWh</span>
              </div>
            </div>
            <div className='w-[90%] flex justify-between'>
              <span>Save</span>
              <div>
                <span className='font-semibold'>7999.9</span>
                <span>THB</span>
              </div>
            </div>

            {/* <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">

                <circle
                  className="text-[#D3F7E6] stroke-current"
                  stroke-width="15"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                ></circle>

                <circle
                  className="text-[#23D37F]  progress-ring__circle stroke-current"
                  stroke-width="15"
                  stroke-linecap="round"
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke-dasharray="251.2"
                  stroke-dashoffset="calc(251.2 - (251.2 * 72) / 100)"
                ></circle>

                <text x="50" y="50" font-size="14" text-anchor="middle" alignment-baseline="middle" className='font-bold'>70%</text>

              </svg>
            </div> */}

            {/* <div>
              <svg width="170" height="170" viewBox="0 0 232 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M212 115.5C212 128.041 209.517 140.46 204.692 152.046C199.868 163.633 192.797 174.161 183.882 183.029C174.968 191.897 164.385 198.931 152.738 203.731C141.09 208.53 128.607 211 116 211C103.393 211 90.9096 208.53 79.2624 203.73C67.6151 198.931 57.0322 191.897 48.1177 183.029C39.2033 174.161 32.132 163.633 27.3076 152.046C22.4831 140.46 20 128.041 20 115.5C20 102.959 22.4831 90.5403 27.3076 78.9537C32.132 67.3671 39.2034 56.8393 48.1178 47.9713C57.0322 39.1033 67.6152 32.0688 79.2624 27.2695C90.9097 22.4702 103.393 20 116 20C128.607 20 141.09 22.4702 152.738 27.2695C164.385 32.0689 174.968 39.1033 183.882 47.9713C192.797 56.8393 199.868 67.3672 204.692 78.9538C209.517 90.5404 212 102.959 212 115.5L212 115.5Z" stroke="#D3F7E6" stroke-width="40" />
                <path d="M116 20C134.987 20 153.548 25.601 169.335 36.0946C185.122 46.5883 197.426 61.5033 204.692 78.9537C211.958 96.404 213.86 115.606 210.155 134.131C206.451 152.656 197.308 169.673 183.882 183.029C170.457 196.385 153.351 205.48 134.729 209.165C116.107 212.85 96.8043 210.959 79.2626 203.731C61.7209 196.502 46.7277 184.262 36.179 168.557C25.6304 152.852 20.0001 134.388 20 115.5" stroke="#23D37F" stroke-width="40" stroke-linecap="round" />
                <path d="M90.372 128.324C89.556 128.324 88.896 128.144 88.392 127.784C87.888 127.4 87.6 126.896 87.528 126.272C87.456 125.648 87.624 124.964 88.032 124.22L98.004 106.112V108.02H87.888C87 108.02 86.304 107.792 85.8 107.336C85.32 106.88 85.08 106.208 85.08 105.32C85.08 104.432 85.32 103.76 85.8 103.304C86.304 102.848 87 102.62 87.888 102.62H101.424C102.312 102.62 103.044 102.86 103.62 103.34C104.22 103.82 104.52 104.504 104.52 105.392C104.52 106.16 104.4 106.832 104.16 107.408C103.944 107.96 103.668 108.548 103.332 109.172L94.116 126.236C93.732 126.98 93.24 127.52 92.64 127.856C92.064 128.168 91.308 128.324 90.372 128.324ZM110.77 128C109.714 128 108.946 127.76 108.466 127.28C108.01 126.776 107.782 126.044 107.782 125.084C107.782 124.412 107.926 123.812 108.214 123.284C108.526 122.756 108.922 122.24 109.402 121.736L115.702 115.148C116.638 114.14 117.298 113.276 117.682 112.556C118.09 111.836 118.294 111.116 118.294 110.396C118.294 109.484 117.994 108.8 117.394 108.344C116.794 107.888 115.93 107.66 114.802 107.66C114.226 107.66 113.614 107.744 112.966 107.912C112.318 108.056 111.622 108.32 110.878 108.704C110.23 108.992 109.642 109.076 109.114 108.956C108.61 108.836 108.178 108.572 107.818 108.164C107.482 107.756 107.266 107.288 107.17 106.76C107.098 106.232 107.182 105.716 107.422 105.212C107.662 104.684 108.094 104.252 108.718 103.916C109.822 103.316 110.962 102.884 112.138 102.62C113.338 102.356 114.538 102.224 115.738 102.224C117.706 102.224 119.35 102.512 120.67 103.088C122.014 103.664 123.034 104.504 123.73 105.608C124.426 106.688 124.774 108.032 124.774 109.64C124.774 110.648 124.618 111.632 124.306 112.592C124.018 113.552 123.538 114.512 122.866 115.472C122.218 116.432 121.342 117.452 120.238 118.532L114.406 124.292V122.636H123.298C124.186 122.636 124.858 122.864 125.314 123.32C125.794 123.776 126.034 124.436 126.034 125.3C126.034 126.164 125.794 126.836 125.314 127.316C124.858 127.772 124.186 128 123.298 128H110.77ZM138.062 127.46C137.802 127.92 137.472 128.22 137.072 128.36C136.672 128.52 136.282 128.55 135.902 128.45C135.522 128.35 135.192 128.16 134.912 127.88C134.632 127.6 134.462 127.25 134.402 126.83C134.342 126.41 134.442 125.97 134.702 125.51L145.202 107.42C145.482 106.94 145.812 106.63 146.192 106.49C146.572 106.33 146.952 106.3 147.332 106.4C147.732 106.5 148.062 106.7 148.322 107C148.602 107.28 148.772 107.63 148.832 108.05C148.912 108.45 148.812 108.88 148.532 109.34L138.062 127.46ZM133.712 119.45C131.912 119.45 130.512 118.86 129.512 117.68C128.532 116.48 128.042 114.9 128.042 112.94C128.042 111.62 128.272 110.48 128.732 109.52C129.192 108.56 129.842 107.82 130.682 107.3C131.522 106.78 132.532 106.52 133.712 106.52C135.492 106.52 136.872 107.11 137.852 108.29C138.852 109.45 139.352 111 139.352 112.94C139.352 114.24 139.122 115.38 138.662 116.36C138.222 117.34 137.582 118.1 136.742 118.64C135.902 119.18 134.892 119.45 133.712 119.45ZM133.712 116.15C134.012 116.15 134.262 116.05 134.462 115.85C134.682 115.63 134.842 115.29 134.942 114.83C135.062 114.35 135.122 113.72 135.122 112.94C135.122 111.76 134.992 110.94 134.732 110.48C134.492 110.02 134.152 109.79 133.712 109.79C133.392 109.79 133.122 109.89 132.902 110.09C132.702 110.27 132.542 110.59 132.422 111.05C132.322 111.51 132.272 112.14 132.272 112.94C132.272 114.14 132.392 114.98 132.632 115.46C132.872 115.92 133.232 116.15 133.712 116.15ZM149.552 128.33C147.772 128.33 146.382 127.74 145.382 126.56C144.402 125.38 143.912 123.81 143.912 121.85C143.912 120.51 144.132 119.36 144.572 118.4C145.032 117.44 145.682 116.7 146.522 116.18C147.382 115.66 148.392 115.4 149.552 115.4C151.332 115.4 152.722 115.99 153.722 117.17C154.722 118.35 155.222 119.91 155.222 121.85C155.222 123.15 154.992 124.29 154.532 125.27C154.092 126.23 153.452 126.98 152.612 127.52C151.772 128.06 150.752 128.33 149.552 128.33ZM149.552 125.06C149.872 125.06 150.132 124.96 150.332 124.76C150.552 124.54 150.712 124.2 150.812 123.74C150.932 123.26 150.992 122.63 150.992 121.85C150.992 120.67 150.862 119.85 150.602 119.39C150.362 118.93 150.012 118.7 149.552 118.7C149.252 118.7 148.992 118.8 148.772 119C148.572 119.18 148.412 119.5 148.292 119.96C148.192 120.4 148.142 121.03 148.142 121.85C148.142 123.05 148.262 123.89 148.502 124.37C148.742 124.83 149.092 125.06 149.552 125.06Z" fill="#107C49" />
              </svg>
            </div> */}




          </div>

        </div>
      </div>

    </div>
  )
}

export default SolarPowerChart