
import ReactECharts from 'echarts-for-react';
import icons1 from '../images/Monitor/monitorIcon1.png'
import icons2 from '../images/Monitor/monitorIcon2.png'
import { useEffect, useState } from 'react';
import icons3 from '../images/Monitor/monitorIcon3.png'
import axios from 'axios';
import { getAccessToken } from '../utils/local-storage';
import { toast } from 'react-toastify';


const SolarPowerChart = () => {

  const [select, setSelect] = useState("select1")

  const [currentPv, setCurrentPv] = useState([])
  const [pvPower, setPvPower] = useState([])
  const [hour, setHour] = useState([])

  const handleSelect = (e) => {
    setSelect(e)
    getAPI()
  }

  // content 1
  const option = {
    // title: {
    //   text: 'Stacked Line'
    // },
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
    // toolbox: {
    //   feature: {
    //     saveAsImage: {}
    //   }
    // },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: hour,
      splitLine: {  // เพิ่มเส้นกริดทั้งแนวนอน
        show: true,
        lineStyle: {
          border: '1px solid #3B78FE1A',  // สีของเส้นกริด
          type: 'solid'     // รูปแบบของเส้นกริด (แบบตาราง)
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
        stack: null,
        color: '#23D37F',
        data: currentPv
      },
      {
        name: 'PV power on the day',
        type: 'line',
        stack: null,
        color: '#F6841B',
        data: pvPower
      }
    ]
  };

  const getAPI = async () => {

    try {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_API_TEST}/reportData/powerChart?devicePn=402A8FD7707C&type=20&year=2024&month=06`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + getAccessToken
        }
      });
      console.log()

      const getData = response.data

      if (getData.code == 0) {

        const pvPowerGenerations = response.data.result.map(data => data.pvPowerGeneration);
        const currentPv = response.data.result.map(data => data.currentLoadPower);
        const allHours = response.data.records

        let collectHours = []
        for (let i = 1; i <= allHours; i++) {
          collectHours.push(i)
        }

        setHour(collectHours)
        setPvPower(pvPowerGenerations);
        setCurrentPv(currentPv)
        console.log(pvPowerGenerations, currentPv, collectHours);
        
      } else {

        toast.error(getData.code)
      }

    } catch (err) {

      console.log("err:", err)
      toast.error(err.response?.data.message)
    }

  }

  useEffect(() => {
    getAPI()

  }, [])



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
              <img src={icons3} alt="" className='h-[25px]' />
              <span> 22 June, 2024  </span>
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




          </div>

        </div>
      </div>

    </div>
  )
}

export default SolarPowerChart