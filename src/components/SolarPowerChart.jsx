

import EarnProfit from './EarnProfit';
import SolarPowerChartCom from './SolarPowerChartCom';


const SolarPowerChart = () => {
 

  return (
    <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[95%] flex flex-col lg:flex-row justify-center lg:justify-between gap-10">
        <div className="w-[100%] lg:w-[70%] flex flex-col">
          <SolarPowerChartCom/>
        </div>
        <div className='w-[100%] lg:w-[30%]' >
        <EarnProfit/>
        </div>
      </div>
    </div>
  );
};

export default SolarPowerChart;
