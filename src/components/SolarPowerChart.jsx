
import ReactECharts from 'echarts-for-react';
import icons1 from '../images/Monitor/monitorIcon1.png'
import icons2 from '../images/Monitor/monitorIcon2.png'
// import icons3  from '../images/Monitor/monitorIcon3.png'


const SolarPowerChart = () => {

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
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
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
        data: [120, 132, 101, 134, 90, 230, 210, 232, 122, 123, 231, 433, 146, 221]
      },
      {
        name: 'PV power on the day',
        type: 'line',
        stack: null,
        color: '#F6841B',
        data: [220, 182, 191, 234, 290, 330, 310, 231, 144, 221, 196, 132, 141, 212]
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
        <div>

          <div className='flex items-center gap-2'>
            <img src={icons2} alt="" className='h-[40px]' />
            <h1 className='text-[#001647] font-semibold text-2xl'>Earn Pofit Energy Bill</h1>
          </div>

        </div>
      </div>

    </div>
  )
}

export default SolarPowerChart